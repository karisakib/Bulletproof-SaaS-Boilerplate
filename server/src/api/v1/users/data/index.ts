/**
 * /users/data: Handles operations related to user data, especially in compliance with data privacy laws (e.g., GDPR).
 * Request Data Export: POST /users/data/export
 * Request Data Deletion: DELETE /users/data/delete
 * Data Access Logs: GET /users/data/logs
 */


// GET api/v1/users/export: Export user data.

// GET /users/data/logs
// User will see all the data we have compiled on them
// This is a large asynchronous operation much like a SSE that will send an email with an attachment
// Alternative;y, send expiry link via email to download the data when ready.

// POST /users/data/export
// User will be able to export data based on the form selections on the front-end.
// This is also a large asynchronous operation, but front-end will wait for the data.

// DELETE /users/data/delete
// User will be able to request their data to be deleted.
// Do we really want this option?
// Alternatively we can allow users to delete their accounts.
// If deleted, they'll be marked as 'terminated', but data is kept for analytics.
// This is known as a soft delete.