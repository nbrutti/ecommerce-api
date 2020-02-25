import { Model, DataTypes } from 'sequelize';

class Produto extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.DECIMAL(10, 2)
        }, {
            sequelize
        });
    }
}

export default Produto;