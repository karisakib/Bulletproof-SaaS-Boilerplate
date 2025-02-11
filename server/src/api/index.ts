// Import router, types, modules
import { Router, Request, Response } from 'express';

import auth from "./auth/index"
import users from "./users/index"
import payments from "./payments/index"
import content from "./content/index"
import reports from "./reports/index"
import settings from "./settings/index"
import support from "./support/index"

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

router.use("*", (req: Request, res: Response) => {
 res.status(404).json({
   error: "Not Found",
   message: `The requested resource '${req.originalUrl}' was not found.`})});

export default router;