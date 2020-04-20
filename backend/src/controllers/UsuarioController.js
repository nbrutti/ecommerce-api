import Usuario from '../models/Usuario';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default {
    async cadastrar(req, res) {
        try {
            const senha = await bcrypt.hash(req.body.senha, 10);
            const email = req.body.email;

            Usuario.findOrCreate({
                where: { email: email },
                defaults: { email, senha }
            }).then(result => {
                let usuario = result[0], created = result[1];

                if (!created) {
                    return res.status(409).json({
                        error: 'Já existe um usuário cadastrado com este email'
                    });
                }

                return res.status(201).json(usuario);
            });

        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },
    async autenticar(req, res) {
        try {     
            const usuario = await Usuario.findOne({
                where: {
                    email: req.body.email
                }
            });
            
            if (!usuario) {
                return res.status(401).json({ mensagem: 'Falha na autenticação' });
            }

            bcrypt.compare(req.body.senha, usuario.senha, (err, result) => {
                if (err) {
                    return res.status(401).json({ mensagem: 'Falha na autenticação' });
                }

                if (result) {
                    const token = jwt.sign({
                        id_usuario: usuario.id,
                        email: usuario.email
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn: process.env.JWT_TIME_TO_LIVE
                    });
                    return res.status(200).json({
                        mensagem: 'Autenticado com sucesso',
                        token: token,
                        usuario: usuario
                    });
                }

                return res.status(401).json({ mensagem: 'Falha na autenticação' });
            });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}