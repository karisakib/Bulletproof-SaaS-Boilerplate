import app from "./server"
import appConfig from "@config/config";
// import { logger } from "./utils/logger"


// Start Express App
app.listen(appConfig.port, () => {
 // logger.info(`App running on port http://localhost:${appConfig.dev.port}`, {})
 console.log(appConfig.env);
 console.log(`App running on http://localhost:${appConfig.port}`);
});