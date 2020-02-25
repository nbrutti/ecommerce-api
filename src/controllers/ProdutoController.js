import Produto from '../models/Produto';

export default {
    async store(req, res) {
        const { nome, preco } = req.body;
        const produto = await Produto.create({ nome, preco });
        return res.json(produto);
    }
}