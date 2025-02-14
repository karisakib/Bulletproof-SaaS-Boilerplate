import config from "dotenv";
import winston from "winston";
// const { format } = require("winston");

import winstonMongoDB from "winston-mongodb";
import morgan from "morgan";

// const customRequestFormat =
//  ":remote-addr - :remote-user [:date[clf]] :method :url HTTP/:http-version :status :user-agent";
// const customResponseFormat =
//  ":remote-addr - :remote-user [:date[clf]] :method :url HTTP/:http-version :status :res[content-length] :referrer :user-agent :response-time ms";

// const requestLogger = morgan(customRequestFormat, {
//  stream: {
//    write: (message) => logger.info(message, {
//      label: 'http-request'
//    })
//  }
// });

// const responseLogger = morgan(customResponseFormat, {
//  stream: {
//    write: (message) => logger.info(message, {
//      label: 'http-response'
//    })
//  }
// });


// const logger = winston.createLogger({
 // format: winston.format.combine(format.simple(), format.timestamp()),
//  transports: [
  // write errors to console too
//   new winston.transports.File({
//    filename: "logs/info.log",
//    level: "info",
//    format: winston.format.combine(format.timestamp(), format.json()),
//   }),
//   new winston.transports.File({
//    filename: "logs/error.log",
//    level: "error",
//    format: winston.format.combine(format.timestamp(), format.json()),
//   }),
  // new winston.transports.MongoDB({
  //  db: process.env.MONGODB_URL,
  //  collection: "logs.http",
  //  level: "http",
  //  label: "http",
  //  expireAfterSeconds: 86400, // Logs expire after 24 hours (86400 seconds)
  //  tryReconnect: true,
  //  silent: false, // This option will suppress logging transport, meaning it won't actually log anything to MongoDB
  //  options: { useUnifiedTopology: true },
  // }),
//   new winston.transports.MongoDB({
//    db: process.env.MONGODB_URL,
//    collection: "logs.info",
//    level: "info",
//    label: "info",
//    expireAfterSeconds: 86400, // Logs expire after 24 hours (86400 seconds)
//    tryReconnect: true,
//    silent: false, // This option will suppress logging transport, meaning it won't actually log anything to MongoDB
//    options: { useUnifiedTopology: true },
//   }),
//   new winston.transports.MongoDB({
//    db: process.env.MONGODB_URL,
//    collection: "logs.error",
//    level: "error",
//    label: "error",
//    expireAfterSeconds: 86400, // Logs expire after 24 hours (86400 seconds)
//    tryReconnect: true,
//    silent: false, // This option will suppress logging transport, meaning it won't actually log anything to MongoDB
//    options: { useUnifiedTopology: true },
//   }),
//  ],
//  rejectionHandlers: [
//   new winston.transports.File({
//    filename: "logs/rejections.log",
//   }),
//  ],
 // exceptionHandlers: [
 //  new winston.transports.File({
 //   filename: "logs/exceptions.log",
 //  }),
 // ],
//  handleRejections: true,
 // handleExceptions: false,
//  exitOnError: false,
// });

// if (process.env.NODE_ENV !== "production") {
//  logger.add(
//   new winston.transports.Console({
//    format: format.combine(
//     format.colorize(),
//     format.timestamp(),
//     format.simple()
//    ),
//   })
//  );
// }

// module.exports = {logger, requestLogger, responseLogger};