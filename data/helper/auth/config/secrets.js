if (!process.env.JWT_SECRET) {
  console.log("NO JWT_SECRET");
}

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
};
