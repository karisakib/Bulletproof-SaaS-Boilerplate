const express = require("express");
const router = express.Router();
const UserModel = require("../users/model");
const ApplicationsModel = require("./model");
const { v4: uuidv4 } = require("uuid");
const {logger} = require("../../../utils/logger");

/**
 * @path /api/v1/applications/:userId
 * @method get
 * @param userId
 * @summary returns stats for user given userId
 */
router.get("/:userId/stats", async (req, res) => {
 try {
  const userId = req.params.userId;
  // const user = UserModel.findById(userId);

  // If no user found, throw error user does not exist

  // If user found, return user details
  const responseBody = {
   status: "ok",
   results: {
    userId: uuidv4(),
    username: "testuser",
    totalNumberOfApplications: 845,
   },
  };

  // Send the response
  res.status(200).json(responseBody);

    // Log after the response has been sent
     logger.info("Response sent successfully", {
       label: 'http-response',
       responseBody,
     });
 } catch (err) {
  res.status(400).json({ error: err.message });
  logger.error("Error occurred while processing request", {
   label: "http-error",
   errorMessage: err.message,
  });
 }
});

/**
 * @path /api/v1/applications/:userId
 * @method get
 * @param userId
 * @summary returns stats for user given userId
 */
router.post("/:userId", async (req, res) => {
 try {
  const userId = req.params.userId;
  res.status(200).json({ params: userId });
 } catch (err) {
  res.status(400).json({ error: err.message });
 }
});

module.exports = router;
