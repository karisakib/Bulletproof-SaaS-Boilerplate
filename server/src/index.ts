import app from "./server"
import config from "../src/config/config"
// import { logger } from "./utils/logger"

// Start Express App
app.listen(config.port, () => {
 // logger.info(`App running on port http://localhost:${config.dev.port}`, {})
 console.log(`App running on http://localhost:${config.port}`);
});