import { Model, DataTypes } from 'sequelize';

class Produto extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.FLOAT
        }, {
            sequelize
        });
    }
}

export default Produto;