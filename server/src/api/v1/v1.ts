// Import required modules and types
import { Router } from "express"
const v1Router: Router = Router();

// Import your API routes
import adminRoutes from "./admin/index" // TODO: Convert admin sub-routes
import authRoutes from "./auth/index" // TODO: Convert auth sub-routes
import usersRoutes from "./users/index" // TODO: Convert users sub-routes
// import applicationsRoutes from "./applications/index" // TODO: Convert applications sub-routes
import sseRoutes from "./events/index" // TODO: Convert events sub-routes


// Current path: /v1/*
v1Router.use('/admin', adminRoutes);
v1Router.use('/auth', authRoutes);
v1Router.use('/users', usersRoutes);
// v1Router.use('/applications', applicationsRoutes);
// v1Router.use('/events', sseRoutes);


module.exports = v1Router;
