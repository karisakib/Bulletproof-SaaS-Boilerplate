import { Router } from 'express';


import content from "./content/route"
import financial from "./financial/route";
import notifications from "./notifications/route"
import reports from "./reports/route"
import roles from "./roles/route"
import settings from "./settings/route"
import support from "./support/route"
import users from "./users/route"


const adminRouter: Router = Router();

// Current path: /api/v1/admin/*
adminRouter.use('/content', content);
adminRouter.use('/financial', financial);
adminRouter.use('/notifications', notifications);
adminRouter.use('/reports', reports);
adminRouter.use('/roles', roles);
adminRouter.use('/settings', settings);
adminRouter.use('/support', support);
adminRouter.use('/users', users);

module.exports = adminRouter;
