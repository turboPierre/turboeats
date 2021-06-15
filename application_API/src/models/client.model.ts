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
    id: { type: String, required: true },
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    address: { type: String, required: true },
    city: {type : String, required : true},
    mail: { type: String, required: true },
    phone:{ type: Number, required: true}
});

const User = mongoose.model<UserInterafce>('Client', clientSchema);

export default User;