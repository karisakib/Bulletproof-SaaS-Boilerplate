// // import {Router, Request, Response} from "express"
// // const bcrypt = require("bcrypt");
// // const { UserModel } = require("./model");
// // const OTPModel = require("../auth/otp/model");
// // const { hashData, verifyHashedData } = require("@/utils/hashData");
// // const { error } = require("console");
// // const { authenticateUser } = require("./controller");
// // const auth = require("@/middleware/authMiddleware");
// // const { v4: uuidv4 } = require("uuid");
// // // const log = require("@/utils/logger")

// // const router: Router = Router();
// // // Protected route
// // router.get("/protected-route", auth, async (req: Request, res: Response) => {
// //  res
// //   .status(200)
// //   .json({ message: `You're in private territory: ${req.currentUser.email}` });
// // });

// // /**
// //  * @path /api/v1/users/:userId/stats
// //  * @method get
// //  * @param userId
// //  * @summary returns stats for user given userId
// //  */
// // router.get("/:userId/stats", async (req: Request, res: Response) => {
// //  try {
// //   const { userId } = req.params;
// //   const { email } = req.body;
// //   res.status(200).json({
// //    status: "ok",
// //    results: {
// //     userId: uuidv4(),
// //     email: email,
// //     totalNumberOfApplications: 1768,
// //     diceApplications: 432,
// //     linkedInApplications: 436,
// //     zipRecruiterApplications: 425,
// //     indeedApplications: 475,
// //    },
// //   });
// //  } catch (err) {
// //   res.status(500).json({ error: err.message });
// //  }
// // });

// // module.exports = router;


// // User Management:
// import { Router, Request, Response } from "express";
// const router: Router = Router();

// const UserModel = require("../../users/model");


// // View Users: GET /admin/users
// router.get("/users", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// // Edit User Details: PUT /admin/users/:userId
// router.put("/users/:userId", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// // Deactivate/Activate User: PATCH /admin/users/:userId/status
// router.patch("/users/:userId/status", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// // Delete User: DELETE /admin/users/:userId
// router.delete("/users/:userId", (req: Request, res: Response) => {
//  res.status(204).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// // Search and Filter Users: GET /admin/users/search
// router.get("/users/search", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });




// /**
//  * @summary returns the number of users
//  * @path /api/v1/admin/users/total
//  * @method get
//  */
// router.get("/total", async (req, res) => {
//  try {
//   const userCount = await UserModel.countDocuments();
//   res.json({
//    message: "Total user count",
//    result: userCount,
//   });
//  } catch (error) {
//   res.status(500).json({ error: "Internal Server Error" });
//  }
// });

// /**
//  * @summary returns a list of all users and their details
//  * @path /api/v1/admin/users/all
//  * @method get
//  */
// router.get("/all", async (req, res) => {
//  try {
//   const userCount = await UserModel.countDocuments();
//   const page = req.params.page || 1; // default to 1 if not provided;
//   const per_page = req.params.per_page || 10; // default to 10 if not provided;
//   const offset = Number(req.params.offset)|| 0; // default to 0 if not provided
//   const limit = Number(req.params.limit) || 10; // default to 10 if not provided
//   const sort_by = req.params.sort_by || "BLANK"; // default to BLANK if not provided;
//   const sort_order = req.params.sort_order || "asc"; // default to asc if not provided;
//   const is_active = req.params.is_active || false; // default to false if not provided;

// /**
//  * TODO: If result count < limit & page = 1, no prev
//  * 
//  * TODO: If result count > limit & page = pages, no next
//  */

// res.status(200).json({
//  results: [],
//  pagination: {
//   count: userCount,
//   page: 0,
//   pages: 0,
//   per_page: 0,
//   prev: `http://${"localhost:3000"}/api/v1/admin/users/details?offset=${
//    offset - limit
//   }&limit=${limit}`,
//   next: `http://${"localhost:3000"}/api/v1/admin/users/details?offset=${
//    offset + limit
//   }&limit=${limit}`
//  },
// });
// } catch (err) {
// res.status(500).json({ error: "Internal Server Error" });
// }
// });

// /**
//  * @summary returns detailed information for a specific user
//  * @path /api/v1/admin/:userId/details
//  * @method get
//  */
// router.get("/details", async (req, res) => {
//  try {
//   const userCount = await UserModel.countDocuments();
//   const page = req.params.page || 1; // default to 1 if not provided;
//   const per_page = req.params.per_page || 10; // default to 10 if not provided;
//   const offset = Number(req.params.offset)|| 0; // default to 0 if not provided
//   const limit = Number(req.params.limit) || 10; // default to 10 if not provided
//   const sort_by = req.params.sort_by || "BLANK"; // default to BLANK if not provided;
//   const sort_order = req.params.sort_order || "asc"; // default to asc if not provided;
//   const is_active = req.params.is_active || false; // default to false if not provided;

// // TODO: If at beginning, no prev

// // TODO: If at end, no next

//   res.status(200).json({
//    results: [],
//    pagination: {
//     count: userCount,
//     page: 0,
//     pages: 0,
//     per_page: 0,
//     next: `http://${"localhost:3000"}/api/v1/admin/users/details?offset=${
//      offset + limit
//     }&limit=${limit}`,
//     prev: `http://${"localhost:3000"}/api/v1/admin/users/details?offset=${
//      offset - limit
//     }&limit=${limit}`,
//    },
//   });
//  } catch (err) {
//   res.status(500).json({ error: "Internal Server Error" });
//  }
// });

// export default router

// // Role and Permission Management:
// import { Router, Request, Response } from "express";
// const router: Router = Router();


// // View Roles: GET /admin/roles
// router.get("/roles/", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// // Create Role: POST /admin/roles
// router.post("/roles", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });


// // Edit Role: PUT /admin/roles/:roleId
// router.put("/roles/:roleId", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// // Delete Role: DELETE /admin/roles/:roleId
// router.delete("/roles/:roleId", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });


// // Assign Role: POST /users/roles/assign
// // Revoke Role: DELETE /users/roles/revoke

// // Assign/Revoke Role to/from User: PATCH /admin/roles/users/:userId

// // View Permissions: GET /admin/roles/:roleId/permissions
// // Edit Permissions: PUT /admin/roles/:roleId/permissions