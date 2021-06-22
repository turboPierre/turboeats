import mongoose, {Schema, Document} from 'mongoose';

export interface DelivererInterface extends Document {
    id: string,
    name: string,
    nickname: string,
    address: string,
    city: string,
    mail: string,
    phone: string
}

export const delivererSchema = new Schema({
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    address: { type: String, required: true },
    city: {type : String, required : true},
    mail: { type: String, required: true },
    phone:{ type: String, required: true}
});

const Deliverer = mongoose.model<DelivererInterface>('Deliverer', delivererSchema);

export default Deliverer;