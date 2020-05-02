import Sequelize from "sequelize";
import dbConfig from "../config/database";
import ItensPedido from "../models/ItensPedido";
import Pedido from "../models/Pedido";
import Produto from "../models/Produto";
import Usuario from "../models/Usuario";


const connection = new Sequelize(dbConfig);

// Entities
Produto.init(connection);
Pedido.init(connection);
ItensPedido.init(connection);
Usuario.init(connection);

// Relationships
Produto.associate(connection.models);
Pedido.associate(connection.models);

export default connection;
