import express from "express";
import ItensPedidoController from "../controllers/ItensPedidoController";
import PedidoController from "../controllers/PedidoController";
import AuthRequired from "../middleware/auth";

const router = express.Router();

router
  .route("/pedido/:id_pedido/submeter")
  .post(AuthRequired, ItensPedidoController.faturar);

router
  .route("/pedido/:id_pedido")
  .get(AuthRequired, PedidoController.show)
  .put(AuthRequired, PedidoController.update)
  .delete(AuthRequired, PedidoController.destroy);

router
  .route("/pedidos")
  .get(AuthRequired, PedidoController.index)
  .post(AuthRequired, PedidoController.store);

export default router;
