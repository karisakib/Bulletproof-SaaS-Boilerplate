require("dotenv").config()
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE;

/**
 * It works. Don't touch it.
 */
const maintenanceMiddleware = async (req, res, next) => {

 const maintenanceMode = MAINTENANCE_MODE === "true" ? true : false;

 if (maintenanceMode) {
  res.status(503).json({
   message: "Under maintenance temporarily. Please try again later.",
  });
 } else {
  next();
 }
};

module.exports = maintenanceMiddleware;
