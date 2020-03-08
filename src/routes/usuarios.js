import express from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = express.Router();

router.route('/usuarios/cadastrar')
    .post(UsuarioController.cadastrar);

export default router;