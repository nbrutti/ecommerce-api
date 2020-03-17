import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import './database';

const app = express();

dotenv.config();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

export default app;