import express from 'express';
import PedidoController from '../controllers/PedidoController';

const router = express.Router();

router.route('/pedido/:id_pedido')
    .get((req, res) => PedidoController.show(req, res))
    .put((req, res) => PedidoController.update(req, res))
    .delete((req, res) => PedidoController.destroy(req, res));

router.route('/pedidos')
    .get((req, res) => PedidoController.index(req, res))
    .post((req, res) => PedidoController.store(req, res));

export default router;