const errorMiddleware = (err, req, res, next) => {
 try {
  error.message = err.message || "Something went wrong.";

  console.log(err);

  // Mongoose bad ObjectId
  if (err.name === "CaseError") {
   const message = "Resource not found.";
   error = new Error(message);
   error.statusCode = 404;
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
   const message = "Duplicate field value entered.";
   error = new Error(message);
   error.statusCode = 400;
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
   const message = Object.values(err.errors).map((val) => val.message);
   error = new Error(message);
   error.statusCode = 400;
  }



 } catch (error) {
  next(error)
 }


}