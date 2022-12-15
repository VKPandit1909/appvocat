const express = require("express");
const { connection } = require("../../db/config");
const Insert = require("../../db/crud/insert");
const dformat = require("../../db/timestamp");
let app = express.Router();


app.post("/", async (req, res) => {
  console.log(req.body, dformat);
  const { userId } = req.body;
  try {
    const user_data = {
      user_id: userId,
      seenby_admin: 0,
    };
    connection.query(
      "SELECT * FROM users WHERE ?",
      { user_id: userId },
      function (err, result) {
        if (err) return res.json({ status: "error", error: err.code });
        if (result.length > 0) {
          return res.json({ status: "error", error: "User exists" });
        } else {
          Insert(connection, "users", user_data);
          return res.json({
            status: "ok",
            message: "User Created Successfully.",
          });
        }
      }
    );
  } catch (errors) {
    console.log(errors);
    if (errors) return { status: "error", error: errors };
  }
});

module.exports = app;
