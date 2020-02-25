import express from 'express';
import produtosRoute from './produtos';
import pedidosRoute from './pedidos';

export default [
    produtosRoute,
    pedidosRoute
];