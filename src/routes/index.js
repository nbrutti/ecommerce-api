import express from 'express';
import produtosRoute from './produtos';
import pedidosRoute from './pedidos';
import usuariosRoute from './usuarios';

export default [
    produtosRoute,
    pedidosRoute,
    usuariosRoute
];