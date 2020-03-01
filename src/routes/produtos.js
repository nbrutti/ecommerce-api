import express from 'express';
import ProdutoController from '../controllers/ProdutoController';

const router = express.Router();

router.route('/produto/:id_produto')
    .get(ProdutoController.show)
    .put(ProdutoController.update)
    .delete(ProdutoController.destroy);

router.route('/produtos')
    .get(ProdutoController.index)
    .post(ProdutoController.store);

export default router;