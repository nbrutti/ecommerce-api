import express from 'express';

const router = express.Router();

router.route('/produto/:id_produto')
    .get((req, res) => {
        res.status(200).send({
            mensagem: 'Você acessou a rota /produto/id com o método GET'
        });
    })
    .put((req, res) => {
        res.status(200).send({
            mensagem: 'Você acessou a rota /produto/id com o método PUT'
        });
    })
    .delete((req, res) => {
        res.status(200).send({
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
        res.status(200).send({
            mensagem: 'Você acessou a rota /produtos com o método POST'
        });
    });

export default router;