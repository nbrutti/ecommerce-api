import { Model, DataTypes } from 'sequelize';

class Produto extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.FLOAT,
            imagem: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsToMany(models.Pedido, {
            onDelete: 'CASCADE',
            foreignKey: 'produto_id',
            through: 'itens_pedidos',
            as: 'pedidos'
        });
    }
}

export default Produto;