const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-campus-bite-2024';

const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ')
        ? authHeader.substring(7)
        : authHeader;

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            } else {
                req.userId = decodedToken.userId;
                req.userRole = decodedToken.role;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'No token provided' });
    }
};

module.exports = requireAuth;