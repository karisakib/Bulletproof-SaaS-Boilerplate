// This file contains the roles and permissions for the application
// TODO: Take this over to PRISMA

export const RBAC = {
 user: {
  permissions: [
   "create_record",
   "read_record",
   "update_record",
   "delete_record"
  ]
 },
 admin: {
  permissions: [
   "create_record",
   "read_record",
   "update_record",
   "delete_record"
  ]
 }
}