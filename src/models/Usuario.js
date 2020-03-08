import { Model, DataTypes } from 'sequelize';

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            id_usuario: DataTypes.INTEGER,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            sequelize
        });
    }
}

export default Usuario;