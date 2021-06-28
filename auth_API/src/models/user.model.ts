import { DataTypes, Model }  from 'sequelize';

import {sequelize} from '../config/sqlserv.config';

export interface UserInterface {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    address: string;
    role: string;
    active: boolean;
}

export class User extends Model {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public phone!: string;
    public password!: string;
    public address!: string;
    public role!: string;
    public active!: boolean;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Users'
});

User.sync().then(() => console.log('Users table sync'));
/*
User.sync({
    force: true
});*/

export default User;