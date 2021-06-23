import {Sequelize} from 'sequelize';

import * as dotenv from 'dotenv';
dotenv.config();

const ip: string = process.env.MSSQL_IP as string;

export default () => {
    const  connect = async () => {
        const sequelize = new Sequelize('TurboDB', 'SA', '123Password', {
            host: ip,
            dialect: 'mssql'
        });
        try {
            await sequelize.authenticate();
            console.log('Connection with MSSQL database ' + ip +' has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    };
    connect();
}