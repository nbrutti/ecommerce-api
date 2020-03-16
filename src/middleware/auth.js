import jwt from 'jsonwebtoken';

const AuthRequired = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, 'ch4v3-s3cr3t4');
        req.usuario = decode;
        next();
    } catch (err) {
        return res.status(401).json({ mensagem: 'Falha na autenticação' });
    }
};

export default AuthRequired;