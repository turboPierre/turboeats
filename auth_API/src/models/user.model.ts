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
    mail: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model<UserInterface>('User', userSchema);

export default User;