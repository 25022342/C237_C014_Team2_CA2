-- =========================================================
-- Demo credentials for testing all 3 roles.
-- Run this against your actual users table (c237_014_team0_userdb).
-- Matches app.js's existing SHA1(password) scheme.
-- =========================================================

INSERT INTO users (username, email, password, address, contact, role) VALUES
  ('Admin User', 'admin@team.com', SHA1('Admin@123'), '1 School Ave', '91234567', 'admin'),
  ('Teacher User', 'teacher@team.com', SHA1('Teacher@123'), '2 School Ave', '91234568', 'teacher'),
  ('Student User', 'student@team.com', SHA1('Student@123'), '3 School Ave', '91234569', 'student');
