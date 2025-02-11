const getFinancialSummary = async (req, res) => {
 try {
  res.status(200).json({
   status: "ok",
   message: "GET /api/v1/financial/summary endpoint",
   function: "Fetches financial summary from the database; transactions table",
   results: [],
  });
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
}

module.exports = {getFinancialSummary}