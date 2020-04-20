import express from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
import ProdutoController from '../controllers/ProdutoController';
import AuthRequired from '../middleware/auth';

const router = express.Router();

router.route('/produto/:id_produto')
    .get(ProdutoController.show)
    .put(AuthRequired, ProdutoController.update)
    .delete(AuthRequired, ProdutoController.destroy);

router.route('/produtos')
    .get(ProdutoController.index)
    .post(
        AuthRequired,
        multer(multerConfig).single('file'),
        ProdutoController.store
    );

export default router;