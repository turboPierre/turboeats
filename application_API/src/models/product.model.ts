import mongoose, {Schema, Document} from 'mongoose';

export interface ClientInterface extends Document {
    id: string,
    name: string,
    nickname: string,
    address: string,
    city: string,
    mail: string,
    phone: string
}

export const clientSchema = new Schema({
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    address: { type: String, required: true },
    city: {type : String, required : true},
    mail: { type: String, required: true },
    phone:{ type: String, required: true}
});

const Client = mongoose.model<ClientInterface>('Product', clientSchema);

export default Client;