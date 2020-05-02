import { DataTypes, Model } from "sequelize";

class ItensPedido extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        pedido_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        produto_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        quantidade: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {}
}

export default ItensPedido;
