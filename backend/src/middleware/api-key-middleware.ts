import { Request, Response, NextFunction } from "express";


export async function isApiKey(req: Request, res: Response, next: NextFunction) {
 // If API Key is missing, throw a 401 -> Missing API Key. 
 if (!req.header("X-API-KEY")) {
  res.status(400).json({ error: "400 Bad Request. Missing API KEY Header." });
 }
 next();

 // If API Key provided but user email missing, throw a 401 -> Missing user email.
 if (req.header("X-API-KEY") && !req.body.email) {
  res.status(401).json({
   message: "400 Bad Request. Missing user email.",
  });
 }

 // If API Key does not match with user, throw a 401 -> API Key Invalid.
 if (req.header("X-API-KEY") && req.body.email) {
  // Check DB for match: email & apiKey fields
  // 1. Parse user email and trim
  const { email } = req.body;
  // 2. Check DB if user has an apiKey
  const existingUser = await UserModel.findOne({ email });
  // If user does not exist, throw 404 -> user with email `email` not found.

  // If user email and apiKey matches, throw 302 redirect -> next()

  res.status(401).json({
   message: "401 Unauthorized. Are you missing an API Key in your request?",
  });
 } else {
  res.status(200).json({ message: "Authenticated"});
 }
}