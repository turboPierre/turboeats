import mongoose, { mongo } from 'mongoose';

import * as dotenv from 'dotenv';
dotenv.config();

const uri: string = process.env.MONGO_URI as string;

export default () => {
    const  connect = () => {
        console.log('SQLServ WIP');
    };

    connect();

}