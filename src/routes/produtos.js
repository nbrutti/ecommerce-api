import express from 'express';
import ProdutoController from '../controllers/ProdutoController';

const router = express.Router();

router.route('/produto/:id_produto')
    .get((req, res) => {
        const id = req.params.id_produto
        res.status(200).send({
            mensagem: 'Você acessou a rota /produto/id com o método GET',
            id: id
        });
    })
    .put((req, res) => {
        res.status(200).send({
            mensagem: 'Você acessou a rota /produto/id com o método PUT'
        });
    })
    .delete((req, res) => {
        res.status(204).send({
            mensagem: 'Você acessou a rota /produto/id com o método DELETE'
        });
    });

router.route('/produtos')
    .get((req, res) => {
        res.status(200).send({
            mensagem: 'Você acessou a rota /produtos com o método GET'
        });
    })
    .post((req, res) => ProdutoController.store(req, res));

export default router;