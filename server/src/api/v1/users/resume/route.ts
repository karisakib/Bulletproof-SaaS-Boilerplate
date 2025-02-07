const express = require("express");
const router = express.Router();

/**
 * User tier level constraints:
 * How many resumes can a user have on the free tier?
 * How many on the plus tier?
 * How many on the pro tier?
 */

/**
 * Api level constraints:
 * How will individual resumes be stored?
 * Will they be stored as flat records referencing associated users in resume collection?
 * Will they be stored under the users record as an array with an upper bound dictated by user's tier level constraints? 
 */

/**
 * @path /api/v1/resume/:userId
 * @method get
 * @param
 * @summary gets users resume
 */
router.get("/:userId", async (req, res) => {
 try {
  res.status(200).json({
   status: "ok",
   message: "GET /api/v1/resume/:userId endpoint",
   function: "Fetches a user's resume from the database",
   results: [],
  });
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
});

/**
 * @path /api/v1/resume/:userId
 * @method post
 * @param
 * @summary submits a user's resume to save in database
 */
router.post("/userId", async (req, res) => {
 try {
  res.status(201).json({
   status: "ok",
   message: "POST /api/v1/resume/:userId endpoint",
   function: "Submits and saves a user's resume in the database",
   results: [],
  });
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
});

module.exports = router;
