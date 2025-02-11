// Import router, types, modules
import { Router, Request, Response } from 'express';

import authRoutes from "./auth/index" // TODO: Convert auth sub-routes
import usersRoutes from "./users/index" // TODO: Convert users sub-routes

const apiRouter: Router = Router();

// Current path: /api/v1/* 
apiRouter.use('/api/v1/auth', authRoutes);
apiRouter.use('/api/v1/users', usersRoutes);


export default apiRouter;