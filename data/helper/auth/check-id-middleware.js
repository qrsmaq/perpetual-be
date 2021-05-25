function checkId(id) {
  return function (req, res, next) {
    console.log(req.decodedJwt.subject);
    if (req.decodedJwt.subject && req.decodedJwt.subject === id) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden path for this user" });
    }
  };
}

module.exports = checkId;
