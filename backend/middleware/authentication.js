const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    console.log(req.body);
    if (!req.headers.authorization) {
      return res.status(403).json({
        success: false,
        message: `Forbidden`,
      });
    }
    const token = req.headers.authorization.split(" ").pop();
    
    jwt.verify(token, process.env.SECRET, (err, result) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: `The token is invalid or expired`,
        });
      } else {
        req.token = result;
        next();
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: `Server Error from auth`,
      err: err.message,
    });
  }
};
module.exports = authentication;
