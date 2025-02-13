// Import router, types, modules
import { Router, Request, Response } from 'express';

import auth from "./auth/auth-routes"
import users from "./users/users-routes"
import payments from "./payments/payments-routes"
import content from "./content/content-routes"
import reports from "./reports/reports-routes"
import settings from "./settings/settings-routes"
import support from "./support/support-routes"
import system from "./system/system-routes"


const router: Router = Router();

/**
 * Path: /api/*
 */
router.use('/auth', auth);
router.use('/users', users);
router.use('/payments', payments);
router.use('/content', content);
router.use('/reports', reports);
router.use('/settings', settings);
router.use('/support', support);
router.use('/system', system);

router.use("*", async (req: Request, res: Response) => {
 res.status(404).json({
   error: "Not Found",
   message: `The requested resource '${req.originalUrl}' was not found.`})});

export default router;