const { v4: uuidv4 } = require("uuid");

const express = require("express");
const router = express.Router();
// const sendOTP = require("./controller");


/**
 * @path /api/v1/apikey/
 * @method post
 */
router.post("/", async (req, res) => {
  try {
   let { email, subject, message, duration } = req.body;
   res.status(201).json({
    message: "POST /api/v1/apikey/ working"
   });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @path /api/v1/apikey/
 * @method get
 * @param userId
 * @summary returns stats for user given userId
 */
router.get("/", async (req, res) => {
 try {
  res.status(200).json({
   message: "GET /api/v1/apikey/ working"
});
 } catch (error) {
   res.status(400).json({ error: error.message });
 }
});


/**
 * @path /api/v1/apikey/create
 * @method post
 * @param userId
 * @summary returns a newly created api key
 */
router.post("/create", async (req, res) => {
 let { email } = req.body;
 email = email.trim();
 const generatedApiKey = uuidv4();
 console.log(generatedApiKey);
 try {
  const newApiKeyData = new ApiKeyModel({ email, generatedApiKey });
  const savedApiKeyData = await newApiKeyData.save();
  console.log(savedApiKeyData);
  res.status(201).json({
   message: `API KEY: ${generatedApiKey} created for user with email: ${email}`
  });
 } catch (error) {
  res.status(400).json({ error: error.message });
 }
});


/**
 * @path /api/v1/apikey/:userId
 * @method get
 * @param userId
 * @summary returns a newly created api key based on userId
 */
// router.get("/:userId", async (req, res) => {
//  let { email } = req.body;
//  email = email.trim();
//  const generatedApiKey = crypto.randomBytes(16).toString("hex");
//  console.log(generatedApiKey);
//  try {
//   const newApiKeyData = new ApiKeyModel({ email, generatedApiKey });
//   const savedApiKeyData = await newApiKeyData.save();
//   console.log(savedApiKeyData);
//   res.status(201).json({
//    message: `API KEY: ${generatedApiKey} created for user with email: ${email}`
//   });
//  } catch (error) {
//   res.status(400).json({ error: error.message });
//  }
// });





module.exports = router;


// // Testing user login
// router.post("/login", async (req: Request, res: Response) => {
//  try {
//   // Get req.body data from client
//   let { email, password } = req.body;
//   email = email.trim();
//   password = password.trim();

//   if (!email && !password) {
//    throw Error("Email and password required.")
//   }

//   const userCredentials = await UserModel.findOne({
//    email: req.body.email,
//   });
//   const isValid = await bcrypt.compare(
//    req.body.password,
//    userCredentials.hashedPassword
//   );
//   if (isValid) {
//    res.status(200).json({
//     message: "User authenticated.",
//    });
//   } else {
//    res.status(401).json({
//     message: "User authentication failed.",
//    });
//   }
//  } catch (err) {
//   res.status(400).json({ error: err.message });
//  }
// });
