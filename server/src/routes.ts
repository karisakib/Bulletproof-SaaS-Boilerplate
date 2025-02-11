// Import router, types, modules
import { Router } from 'express';
import api from './api/index';

const router: Router = Router();

/**
 * Path: /api/v1/*
 */
router.use('/api', api);

export default router;