import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Produto from '../models/Produto';

const connection = new Sequelize(dbConfig);

Produto.init(connection);

export default connection;