require("dotenv").config();
import fs from "fs";
const createError = require("http-errors"); // TODO: Convert to ESM import
import express, { Express, Request, Response, NextFunction } from "express";
import path from "path";
const cors = require("cors"); // TODO: Delete CJS import
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const { xss } = require("express-xss-sanitizer");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const responseTime = require("response-time");
const compression = require("compression");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express"); // TODO: Delete CJS import
// import { SwaggerOptions } from "swagger-ui-express";
const YAML = require("yaml");

// Utility imports
import config from "./config/config";

// Logging imports
// const { logger } = require("./utils/logger.js");

// Database imports
// import mongo from "./config/mongo";

// Router imports
import router from "./api/index"

// Swagger docs import
// const swaggerDocument = require("./swagger.json")
const file = fs.readFileSync("./swagger.yml", "utf8");
const swaggerDocument = YAML.parse(file);

// App init
const app: Express = express();

app.enable("trust proxy");

// 3rd Party Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(responseTime());
app.use(morgan("dev"));
// const morganFormat = ":method :url :status :response-time ms";

// app.use(
//  morgan(morganFormat, {
//   stream: {
//    write: (message: String) => {
//     const logObject = {
//      method: message.split(" ")[0],
//      url: message.split(" ")[1],
//      status: message.split(" ")[2],
//      responseTime: message.split(" ")[3],
//      label: "http-response",
//     };
//     // logger.info(JSON.stringify(logObject), { });
//    },
//   },
//  })
// );

// app.use(logger.requestLogger)
// app.use(logger.responseLogger)

app.use(express.json());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Cache Static Files Efficiently Ensures better load speeds and reusability
app.use(express.static(path.join(__dirname, "../public"), { maxAge: "1y" }));
app.use(compression());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", router);
// 404 Error Middleware - For API Routes Only (Not React Frontend)
app.use("/api/*", (req: Request, res: Response, next: NextFunction) => {
 // next(createError(404, "API route not found"));
 res.status(404).json({
  status: "error",
  message: "Not Found",
 });
});

// Global Error Handler Middleware (Handles All Errors)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
 console.error(err); // Log error for debugging

 res.status(err.status || 500).json({
  status: "error",
  message: err.message || "Internal Server Error",
  stack: process.env.NODE_ENV === "production" ? undefined : err.stack, // Hide stack trace in production
 });
});


// Serve static assets from the correct folder
app.use(express.static(path.join(__dirname, "../../client/dist"), { maxAge: "1y" }));

// Ensure CSS, JS, and other assets are correctly served
app.use("/assets", express.static(path.join(__dirname, "../../client/dist/assets")));

// Catch-all route to serve React app for SPA routing
app.get("*", (req: Request, res: Response) => {
 res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
});

export default app