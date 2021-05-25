const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const DB = require("../db-model");
const secrets = require("./config/secrets");

// REGISTER
router.post("/register", async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;

  try {
    const saved = await DB.add(user, "users");
    res.status(201).json({ message: `User ${user.username} created`, saved });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  DB.findByUsername(username).then((user) => {
    if (user[0] && bcrypt.compareSync(password, user[0].password)) {
      const token = generateToken(user[0]);

      res.status(200).json({
        message: `Welcome ${user[0].username}! Here's your token.`,
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

// LOGOUT
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.send("Could not destroy the session...");
      } else {
        res.send("Goodbye!");
      }
    });
  } else {
    res.end();
  }
});

module.exports = router;
