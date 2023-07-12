const jwt = require('jsonwebtoken');

function refreshauth(req, res, next) {
  const token = req.cookies.refreshToken
  if (!token) return res.status(501).send('Access denied. No token provided.');
  try {
    const decoded = jwt.verify(token, 'jwtRefreshSecret');
    req.user = decoded;
    next();
  } catch (ex) {
    res.cookie('refreshToken', '', { expires: new Date(0), httpOnly: true, sameSite: 'None', secure: true });
    res.status(503).send('리프레시 토큰이 만료되었습니다.');
  }
}

module.exports = refreshauth;
