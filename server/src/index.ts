import os from "os";
import fs from "fs"
import app from "./server"
// import { createServer } from "http2";
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
// Start Express App
app.listen(config.port, () => {
 // logger.info(`App running on port http://localhost:${config.dev.port}`, {})
 console.log(`App running on http://localhost:${config.port}`);
});

// HTTPS server options
const httpsOptions = {
 key: fs.readFileSync(keyPath),
 cert: fs.readFileSync(certPath),
};

// Start HTTP2 Secure Server
// const server = createServer({
//  key: fs.readFileSync(`${os.homedir()}/localhost-key.pem`),
//  cert: fs.readFileSync(`${os.homedir()}/localhost.pem`),
// }, app);