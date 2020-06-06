import jwt from 'jsonwebtoken';

export default {
  async validateToken(req, res) {
    try {
      const { token } = req.body;
      const decode = jwt.verify(token, process.env.JWT_KEY);
      return res.status(200).json({
        message: 'Token is valid'
      });
    } catch {
      return res.status(401).json({
        message: 'Token is invalid'
      });
    }
  }
}