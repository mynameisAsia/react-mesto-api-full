const jwt = require('jsonwebtoken');
const AuthError = require('../errors/Auth');

const { JWT = 'some-secret-key' } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthError('Необходима авторизация');
  }

  // извлечём токен
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    // попытаемся верифицировать токен
    payload = jwt.verify(token, JWT);
  } catch (err) {
    // отправим ошибку, если не получилось
    return next(new AuthError('Необходима авторизация'));
  }
  req.user = payload; // записываем пейлоуд в объект запроса

  return next();
};
