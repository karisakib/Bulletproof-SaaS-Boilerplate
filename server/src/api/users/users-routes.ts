// import {Router, Request, Response} from "express"
// const bcrypt = require("bcrypt");
// const { UserModel } = require("./model");
// const OTPModel = require("../auth/otp/model");
// const { hashData, verifyHashedData } = require("@/utils/hashData");
// const { error } = require("console");
// const { authenticateUser } = require("./controller");
// const auth = require("@/middleware/authMiddleware");
// const { v4: uuidv4 } = require("uuid");
// // const log = require("@/utils/logger")

// const router: Router = Router();
// // Protected route
// router.get("/protected-route", auth, async (req: Request, res: Response) => {
//  res
//   .status(200)
//   .json({ message: `You're in private territory: ${req.currentUser.email}` });
// });

// /**
//  * @path /api/v1/users/:userId/stats
//  * @method get
//  * @param userId
//  * @summary returns stats for user given userId
//  */
// router.get("/:userId/stats", async (req: Request, res: Response) => {
//  try {
//   const { userId } = req.params;
//   const { email } = req.body;
//   res.status(200).json({
//    status: "ok",
//    results: {
//     userId: uuidv4(),
//     email: email,
//     totalNumberOfApplications: 1768,
//     diceApplications: 432,
//     linkedInApplications: 436,
//     zipRecruiterApplications: 425,
//     indeedApplications: 475,
//    },
//   });
//  } catch (err) {
//   res.status(500).json({ error: err.message });
//  }
// });

// module.exports = router;
