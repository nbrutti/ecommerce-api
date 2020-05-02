import connection from "../database";
import ItensPedido from "../models/ItensPedido";
import Pedido from "../models/Pedido";
import Produto from "../models/Produto";

export default {
  async faturar(req, res) {
    const { id_pedido } = req.params;
    const produtos = req.body;
    let preco = 0;

    const pedido = await Pedido.findByPk(id_pedido);

    if (!pedido) {
      return res.status(400).json({ error: "Pedido não encontrado" });
    }

    try {
      await connection.transaction(async (t) => {
        for (let i = 0; i < produtos.length; i++) {
          console.log(produtos[i]);
          const p = await Produto.findByPk(produtos[i].id_produto);
          preco += produtos[i].quantidade * p.dataValues.preco;
          ItensPedido.create(
            {
              pedido_id: id_pedido,
              produto_id: produtos[i].id_produto,
              quantidade: produtos[i].quantidade,
            },
            { transaction: t }
          );
        }

        pedido.preco_total = preco;
        await pedido.save();

        return res.json(pedido);
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  },
};
