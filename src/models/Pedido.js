import { Model, DataTypes } from 'sequelize';

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            preco_total: DataTypes.FLOAT,
            pagamento: DataTypes.ENUM({
                values: ['CRÉDITO', 'DÉBITO']
            })
        }, {
            sequelize
        });
    }
}

export default Pedido;