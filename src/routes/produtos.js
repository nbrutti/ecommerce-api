import express from 'express';

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
    .post((req, res) => {

        const produto = {
            nome: req.body.nome,
            preco: req.body.preco
        };

        res.status(201).send({
            mensagem: 'Você acessou a rota /produtos com o método POST',
            produtoCriado: produto
        });
    });

export default router;