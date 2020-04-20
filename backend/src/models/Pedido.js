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

    static associate(models) {
        this.belongsToMany(models.Produto, {
            onDelete: 'CASCADE',
            foreignKey: 'pedido_id',
            through: 'itens_pedidos',
            as: 'itens'
        });
    }
}

export default Pedido;