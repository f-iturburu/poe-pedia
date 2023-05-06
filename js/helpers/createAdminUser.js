import { User } from "../classes/userClass.js";

export function createAdminUser() {
  const users = JSON.parse(localStorage.getItem("users"));
  if (!users || users.length == 0) {
    const adminUser = new User("admin", "admin@admin", "admin", "admin");
    localStorage.setItem("users", JSON.stringify(adminUser));
  }
}
