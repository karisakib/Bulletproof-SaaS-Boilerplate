import { Router } from "express";
import applicationRoutes from "./route"

const applications: Router = Router();
applications.use(applicationRoutes);

module.exports = applications;
