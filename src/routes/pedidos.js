import express from 'express';

const router = express.Router();

router.route('/pedido/:id_pedido')
    .get((req, res) => {
        const id = req.params.id_pedido
        res.status(200).send({
            mensagem: 'Você acessou a rota /pedido/id com o método GET',
            id: id
        });
    })
    .put((req, res) => {
        res.status(200).send({
            mensagem: 'Você acessou a rota /pedido/id com o método PUT'
        });
    })
    .delete((req, res) => {
        res.status(204).send({
            mensagem: 'Você acessou a rota /pedido/id com o método DELETE'
        });
    });

router.route('/pedidos')
    .get((req, res) => {
        res.status(200).send({
            mensagem: 'Você acessou a rota /pedidos com o método GET'
        });
    })
    .post((req, res) => {
        res.status(201).send({
            mensagem: 'Você acessou a rota /pedidos com o método POST'
        });
    });

export default router;