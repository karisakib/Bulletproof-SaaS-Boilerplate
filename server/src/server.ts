import { config } from "dotenv";
import fs from "fs";
import path from "path";
import express, { Express, Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize"
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express"
import YAML from "yaml"
const { xss } = require("express-xss-sanitizer");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const responseTime = require("response-time");
const compression = require("compression");
// Utility imports
import appConfig from "@config/config";

// Logging imports
// const { logger } = require("./utils/logger.js");


// Router imports
import router from "./api/index"

// Swagger docs import
// const swaggerDocument = require("./swagger.json")
config();
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
//    logger.info(JSON.stringify(logObject), { });
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

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", router);
// 404 Error Middleware - For API Routes Only (Not React Frontend)

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
app.use(compression());

// Ensure CSS, JS, and other assets are correctly served
app.use("/assets", express.static(path.join(__dirname, "../../client/dist/assets")));

// Catch-all route to serve React app for SPA routing
app.get("*", (req: Request, res: Response) => {
 res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
});

export default app