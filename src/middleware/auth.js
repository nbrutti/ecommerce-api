import jwt from 'jsonwebtoken';

const AuthRequired = (req, res, next) => {
    try {
        const decode = jwt.verify(req.body.token, 'ch4v3-s3cr3t4');
        req.usuario = decode;
        next();
    } catch (err) {
        return res.status(401).json({ mensagem: 'Falha na autenticação' });
    }
};

export default AuthRequired;