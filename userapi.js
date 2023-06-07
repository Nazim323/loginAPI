const express = require("express");
const app = express();

// User database object
const users = {};

// Middleware to parse JSON in request body
app.use(express.json());

// Register a new user
app.post("/user/register", (req, res) => {
  const { username, password, email } = req.body;

  if (users.hasOwnProperty(username)) {
    return res.status(400).json({ success: false, message: "Username already exists" });
  }

  users[username] = {
    password: password,
    email: email,
  };

  return res.json({ success: true, message: "User registered successfully" });
});

// Login with username and password
app.post("/user/login", (req, res) => {
  const { username, password } = req.body;

  if (!users.hasOwnProperty(username)) {
    return res.status(400).json({ success: false, message: "Username not found" });
  }

  if (users[username].password !== password) {
    return res.status(401).json({ success: false, message: "Incorrect password" });
  }

  return res.json({ success: true, message: "User logged in successfully" });
});

// Get user profile
app.get("/user/profile/:username", (req, res) => {
  const { username } = req.params;

  if (!users.hasOwnProperty(username)) {
    return res.status(400).json({ success: false, message: "Username not found" });
  }

  const { password, ...profile } = users[username];
  return res.json({ success: true, profile });
});

// Update user details
app.put("/user/update/:username", (req, res) => {
  const { username } = req.params;
  const { newPassword, newEmail } = req.body;

  if (!users.hasOwnProperty(username)) {
    return res.status(400).json({ success: false, message: "Username not found" });
  }

  users[username].password = newPassword || users[username].password;
  users[username].email = newEmail || users[username].email;

  return res.json({ success: true, message: "User details updated successfully" });
});

// Delete user
app.delete("/user/delete/:username", (req, res) => {
  const { username } = req.params;

  if (!users.hasOwnProperty(username)) {
    return res.status(400).json({ success: false, message: "Username not found" });
  }

  delete users[username];
  return res.json({ success: true, message: "User deleted successfully" });
});

// Start the server
const port = 3000; // Specify the port number you want to use
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
