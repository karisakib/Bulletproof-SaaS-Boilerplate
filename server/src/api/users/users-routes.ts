import { Router, Request, Response } from "express";
const router: Router = Router();

// Get user details
router.get("/userId", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Update user profile details
router.put("/profile", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Upload user avatar
router.post("/profile/avatar", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Update user contact information
router.put("/profile/contact-info", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})

// Delete user profile
router.delete("/profile", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });
})


/** ADMIN ONLY ROUTES */
// Get all users
router.get("/", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "All users" });
})

// Get user by ID
router.get("/:userId", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "userId" });
})

// Update user role
router.patch("/:userId/role", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "Updated: user:role" });
})

// Delete user
router.delete("/:userId", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "Deleted: user with id" });
})

// IP ban user
router.patch("/:userId/ban", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "Updated: userId banned" });
  // IP black list user information
  // Mark user as banned
})

router.use("*", (req: Request, res: Response) => {
 res.status(404).json({
  error: "Not Found",
  message: `The requested resource '${req.originalUrl}' was not found.`
 })
});

export default router;

// User routes
// router.get("/profile", authenticate, UserController.getProfile);
// router.put("/profile", authenticate, UserController.updateProfile);

// Admin-only routes
// router.get("/", authenticate, isAdmin, UserController.getAllUsers);
// router.get("/:userId", authenticate, isAdmin, UserController.getUserById);
// router.patch("/:userId/role", authenticate, isAdmin, UserController.updateUserRole);
// router.delete("/:userId", authenticate, isAdmin, UserController.deleteUser);


// returns stats for user given userId
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



// User Management - Admin:

// View Users: GET /admin/users
// router.get("/users", async (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// Edit User Details
// router.put("/users/:userId", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// Deactivate User
// router.patch("/deactivate/:userId", isAdmin, async (req, res) => {
//  try {
//   const { email } = req.body;
  //
//   res.status(202).json({
//    status: "ok",
//    message: `User account with ${email} deactivated`,
//   });
//  } catch (err) {
  // log.error(`Error deactivating user account with email ${email}`);
//   res.status(500).json({ error: err.message });
//  }
// });

// Reactivate User
// router.patch("/reactivate", async (req, res) => {
//  try {
//   const { email } = req.body;
  //
//   res.status(202).json({
//    status: "ok",
//    message: `User account with ${email} reactivated`,
//   });
//  } catch (err) {
  // log.error(`Error reactivating user account with email ${email}`);
//   res.status(500).json({ error: err.message });
//  }
// });

// Get user account status: decativated, banned, active, etc.s
// router.get("/status/:userId", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// Delete a user
// router.delete("/users/:userId", (req: Request, res: Response) => {
//  res.status(204).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });

// Search and Filter Users: GET /admin/users/search
// router.get("/users/search", (req: Request, res: Response) => {
//  res.status(200).json({
//   status: "OK",
//   path: req.baseUrl,
//   message: "working"
//  })
// });


// returns the number of users
// router.get("/users/total", async (req, res) => {
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


// returns a list of all users and their details
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

//  TODO: If result count < limit & page = 1, no prev
//  TODO: If result count > limit & page = pages, no next

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


// returns detailed information for a specific user
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

// TODO: If at beginning, no prev
// TODO: If at end, no next

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

// Assign Role: POST /users/roles/assign
// Revoke Role: DELETE /users/roles/revoke
// Assign/Revoke Role to/from User: PATCH /admin/roles/users/:userId
// View Permissions: GET /admin/roles/:roleId/permissions
// Edit Permissions: PUT /admin/roles/:roleId/permissions