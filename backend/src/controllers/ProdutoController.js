import Produto from "../models/Produto";

export default {
  async index(req, res) {
    const produtos = await Produto.findAll();
    return res.json(produtos);
  },

  async store(req, res) {
    const imagem = req.file ? req.file.path : null;
    const { nome, preco } = req.body;
    const produto = await Produto.create({ nome, preco, imagem });
    return res.json(produto);
  },

  async show(req, res) {
    const { id_produto } = req.params;
    const produto = await Produto.findByPk(id_produto);
    return res.json(produto);
  },

  async update(req, res) {
    const { id_produto } = req.params;
    await Produto.update(req.body, {
      where: { id: id_produto },
    });
    const updated = await Produto.findByPk(id_produto);
    return res.json(updated);
  },

  async destroy(req, res) {
    const { id_produto } = req.params;
    await Produto.destroy({
      where: { id: id_produto },
    });
    return res.json({
      mensagem: "Produto excluído com êxito",
    });
  },
};
