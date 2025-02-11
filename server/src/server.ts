require("dotenv").config();
import fs from "fs";
const createError = require("http-errors"); // TODO: Delete CJS import
// import { HttpError } from "http-errors";
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
const favicon = require("serve-favicon");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express"); // TODO: Delete CJS import
// import { SwaggerOptions } from "swagger-ui-express";
const YAML = require("yaml");
// const mongoose = require("mongoose");

// Utility imports
// const config = require("./config/config");

// Custom Middleware Imports
// const maintenanceMiddleware = require("./middleware/maintenanceMiddleware");

// Database imports
require("./config/mongoDB.js");
// require("./config/postgres.js");

// Logging imports
// const { logger } = require("./utils/logger.js");

// Router imports
import apiRouter from "@/api/index.js"

// Swagger docs import
// const swaggerDocument = require("./swagger.json")
const file = fs.readFileSync("./swagger.yml", "utf8");
const swaggerDocument = YAML.parse(file);

// Database configs
// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(console.log("Connection to MongoDB successful."))
//   .catch((error) => console.log(error));

// App init
const app: Express = express();

app.enable("trust proxy");

// Middleware
app.use(
 helmet({
  contentSecurityPolicy: false,
 })
);

// MAINTENANCE_MODE
// app.use(maintenanceMiddleware)

// 3rd Party Middleware
app.use(cors());
app.use(responseTime());
app.use(morgan("dev"));

// https://docs.chaicode.com/advance-node-logger/
const morganFormat = ":method :url :status :response-time ms";

app.use(
 morgan(morganFormat, {
  stream: {
   write: (message: String) => {
    const logObject = {
     method: message.split(" ")[0],
     url: message.split(" ")[1],
     status: message.split(" ")[2],
     responseTime: message.split(" ")[3],
     label: "http-response",
    };
    // logger.info(JSON.stringify(logObject), { });
   },
  },
 })
);
// app.use(logger.requestLogger)
// app.use(logger.responseLogger)
app.use(express.json());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(favicon(path.join(__dirname, "../public/favicon.ico")));
// app.use(express.static(path.join(__dirname, "../public")));
// app.use(express.static("public", { maxAge: "1y" })); Cache Static Files Efficiently Ensures better load speeds and reusability
app.use(compression());


// Routers
// app.use("/", uploadRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", apiRouter);


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
app.use(express.static(path.join(__dirname, "../../client/dist")));

// Ensure CSS, JS, and other assets are correctly served
app.use("/assets", express.static(path.join(__dirname, "../../client/dist/assets")));

// Catch-all route to serve React app for SPA routing
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
});

export default app