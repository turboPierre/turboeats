import { DataTypes, Model }  from 'sequelize';

import {sequelize} from '../config/sqlserv.config';

export interface UserInterface {
    id: number;
    name: string;
}

export class User extends Model {
    public id!: number;
    public name!: string;
}

User.init({
    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Users'
});

User.sync({force: true}).then(() => console.log('Users table created'));

export default User;