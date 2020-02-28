import Pedido from '../models/Pedido';

export default {
    async index(req, res) {
        const pedidos = await Pedido.findAll();
        return res.json(pedidos);
    },

    async store(req, res) {
        const { preco_total, pagamento } = req.body;
        const pedido = await Pedido.create({ preco_total, pagamento });
        return res.json(pedido);
    },

    async show(req, res) {
        const { id_pedido } = req.params;
        const pedido = await Pedido.findByPk(id_pedido);
        return res.json(pedido);
    },

    async update(req, res) {
        const { id_pedido } = req.params;
        await Pedido.update(req.body, {
            where: { id: id_pedido }
        });
        const updated = await Pedido.findByPk(id_pedido);
        return res.json(updated);
    },

    async destroy(req, res) {
        const { id_pedido } = req.params;
        await Pedido.destroy({
            where: { id:  id_pedido }
        });
        return res.json({
            mensagem: 'Pedido excluído com êxito'
        });
    }
}