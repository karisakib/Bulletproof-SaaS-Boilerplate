import { Router, Request, Response } from "express";
const authRouter: Router = Router();


// Import your API routes
import usersRoutes from './users/route';
import otpRoutes from './otp/route';
import apikeyRoutes from './apikey/route';


// Prefix routes with /v1
authRouter.use('/users', usersRoutes);
authRouter.use('/otp', otpRoutes);
authRouter.use('/apikey', apikeyRoutes);

// WORKING
authRouter.get("/", (req: Request, res: Response) => {
 res.json({ status: "OK", message: "working" });
});

module.exports = authRouter;
