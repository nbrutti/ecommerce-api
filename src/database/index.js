import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Produto from '../models/Produto';
import Pedido from '../models/Pedido';
import ItensPedido from '../models/ItensPedido';

const connection = new Sequelize(dbConfig);

Produto.init(connection);
Pedido.init(connection);
ItensPedido.init(connection);

// Relationships
Produto.associate(connection.models);
Pedido.associate(connection.models);

export default connection;