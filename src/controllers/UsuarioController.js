import Usuario from '../models/Usuario';
import bcrypt from 'bcrypt';

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

    }
}