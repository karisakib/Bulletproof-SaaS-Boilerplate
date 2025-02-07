import os from "os";
import fs from "fs"
// import { createServer } from "http2";
import https from "https";
import app from "./server"
import config from "../src/config/config"
import { logger } from "./utils/logger"

// Confirm paths to certificates
const keyPath = `${os.homedir()}/localhost-key.pem`;
const certPath = `${os.homedir()}/localhost.pem`;

// Check if files exist
if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
 console.error("Certificate files not found. Please check the paths.");
 process.exit(1);
}

// HTTPS server options
const httpsOptions = {
 key: fs.readFileSync(keyPath),
 cert: fs.readFileSync(certPath),
};

// Start HTTPS 1.1 server
https.createServer(httpsOptions, app).listen(config.dev.port, () => {
 logger.info(`App running on https://localhost:${config.dev.port}`, {});
 console.log(`App running on https://localhost:${config.dev.port}`);
});

// Start HTTP2 Secure Server
// const server = createServer({
//  key: fs.readFileSync(`${os.homedir()}/localhost-key.pem`),
//  cert: fs.readFileSync(`${os.homedir()}/localhost.pem`),
// }, app);


// server.listen(config.dev.port, () => {
//  logger.info(`App running on port https://localhost:${config.dev.port}`, {});
// });

// Start Express App
// app.listen(config.dev.port, () => {
//  logger.info(`App running on port http://localhost:${config.dev.port}`, {})
// });
