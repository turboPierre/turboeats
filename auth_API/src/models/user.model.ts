import { DataTypes, Model }  from 'sequelize';

export class User extends Model {}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User'
});

export default User;