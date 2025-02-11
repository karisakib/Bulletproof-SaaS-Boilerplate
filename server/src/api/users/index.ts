import { Router, Request, Response } from "express";
const usersRouter: Router = Router();

// import router from "./users-routes"

// usersRouter.use("/users", router)
usersRouter.get("/test", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });

})

module.exports = usersRouter;



/**
/users/profile: Handles all operations related to a user's profile.
View Profile: GET /users/profile
Update Profile: PUT /users/profile
Upload Avatar: POST /users/profile/avatar
Delete Profile: DELETE /users/profile
 */

// GET api/v1/users/profile: Retrieve user profile.
// PUT api/v1/users/profile: Update user profile.

// PUT /api/v1/users/contact-info: Update email or phone number.
