// Import router, types, modules
import { Router, Request, Response } from 'express';
import v1Routes from "./v1/v1";

const apiRouter: Router = Router();

// Current path: /
apiRouter.use('/v1', v1Routes);

apiRouter.get("/v1", async (req: Request, res: Response) => {
 res.status(200).json({ "status": "OK", "message": "Working" })
})

module.exports = apiRouter; // TODO: Delete CJS import