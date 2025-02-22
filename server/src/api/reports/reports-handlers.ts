import { Request, Response } from "express";

export class FinancialHandlers {

 static async getFinancialSummary(req: Request, res: Response) {
  try {
   res.status(200).json({
    success: true,
    message: "GET /api/v1/financial/summary endpoint",
    function: "Fetches financial summary from the database; transactions table",
    results: [],
   });
  } catch (error: any) {
   res.status(500).json({ message: error.message })
  }
 }
}