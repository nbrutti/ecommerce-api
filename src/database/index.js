import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Produto from '../models/Produto';
import Pedido from '../models/Pedido';

const connection = new Sequelize(dbConfig);

Produto.init(connection);
Pedido.init(connection);

export default connection;