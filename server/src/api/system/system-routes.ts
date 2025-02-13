import os from "os";
import { exec } from "child_process";
import { Router, Request, Response } from "express";
const router: Router = Router();


router.get('/health', async (req: Request, res: Response) => {
 // Gather system information
 const uptime = os.uptime(); // system uptime in seconds
 const freeMemory = os.freemem(); // free memory in bytes
 const totalMemory = os.totalmem(); // total memory in bytes
 const cpuLoad = os.loadavg(); // 1, 5, 15 min average CPU load
 const platform = os.platform(); // OS platform

 exec('df -h', (error, stdout, stderr) => {
  if (error) {
   return res.status(500).json({ error: 'Failed to retrieve disk space' });
  }

  res.json({
   uptime: `${Math.floor(uptime / 60)} minutes`,
   memory: {
    free: `${Math.floor(freeMemory / 1024 / 1024)} MB`,
    total: `${Math.floor(totalMemory / 1024 / 1024)} MB`,
   },
   cpuLoad,
   platform,
   diskSpace: stdout.trim(),
  });
 });
});

router.use("*", async (req: Request, res: Response) => {
 res.status(404).json({
   error: "Not Found",
   message: `The requested resource '${req.originalUrl}' was not found.`})});

export default router;