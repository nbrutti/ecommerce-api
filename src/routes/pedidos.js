import express from 'express';
import PedidoController from '../controllers/PedidoController';
import ItensPedidoController from '../controllers/ItensPedidoController';

const router = express.Router();

router.route('/pedido/:id_pedido/submeter')
    .get(ItensPedidoController.faturar)
    .post(ItensPedidoController.faturar);

router.route('/pedido/:id_pedido')
    .get(PedidoController.show)
    .put(PedidoController.update)
    .delete(PedidoController.destroy);

router.route('/pedidos')
    .get(PedidoController.index)
    .post(PedidoController.store);

export default router;