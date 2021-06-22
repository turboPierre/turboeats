import mongoose, {Schema, Document} from 'mongoose';

export interface UserInterface extends Document {
    id: string,
    name: string,
    nickname: string,
    address: string,
    city: string,
    mail: string,
    phone: string
}

export const userSchema = new Schema({
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    address: { type: String, required: true },
    city: {type : String, required : true},
    mail: { type: String, required: true },
    phone:{ type: String, required: true}
});

const User = mongoose.model<UserInterface>('User', userSchema);

export default User;