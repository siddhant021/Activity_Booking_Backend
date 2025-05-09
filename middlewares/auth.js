import jwt from 'jsonwebtoken'

const auth = function (req, res, next) {
  const token = req.cookies["token"];
  if (!token) return res.status(401).json({ message: 'Please login' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid Token' });
  }
};


export default auth