import React, { useEffect, useState } from "react";
import PedidoService from "../../../services/pedido-service";
import "./styles.css";


function PedidoGetAll() {
  const pedidoService = new PedidoService();
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    pedidoService.get().then(response => {
      setPedidos(response.data);
    }).catch(err => console.log(`Falha ao consultar a API. Erro: ${err}`));
  }, []);

  return (
    <ul>
      <h1>Pedidos:</h1>
      {pedidos.map((pedido) => (
        <li key={pedido.id}>{pedido.preco_total} ({pedido.pagamento})</li>
      ))}
    </ul>
  );
}

export default PedidoGetAll;