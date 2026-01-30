const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    console.log('result', result)
    if(!result){
        return res.status(400).json({
            message: 'Validation Failed',
            errors: result.error.errors.map((e) => e.message)
        })
    }
    req.body = result.data;
    next();
};


const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access token required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // attach payload
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired access token" });
  }
};
module.exports = {validate, authenticate};

