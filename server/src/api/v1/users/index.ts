import { Router, Request, Response } from "express";
const usersRouter: Router = Router();

import router from "./users-routes"

usersRouter.use("/users", router)
usersRouter.get("/test", async (req: Request, res: Response) => {
 res
  .status(200)
  .json({ status: "OK", message: "working" });

})

module.exports = usersRouter;