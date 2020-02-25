import express from 'express';
import ProdutoController from '../controllers/ProdutoController';

const router = express.Router();

router.route('/produto/:id_produto')
    .get((req, res) => ProdutoController.show(req, res))
    .put((req, res) => ProdutoController.update(req, res))
    .delete((req, res) => ProdutoController.destroy(req, res));

router.route('/produtos')
    .get((req, res) => ProdutoController.index(req, res))
    .post((req, res) => ProdutoController.store(req, res));

export default router;