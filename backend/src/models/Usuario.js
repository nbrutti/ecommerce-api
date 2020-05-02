import { DataTypes, Model } from "sequelize";

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Usuario;
