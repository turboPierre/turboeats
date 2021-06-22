import mongoose, {Schema, Document} from 'mongoose';

export interface RestaurantInterface extends Document {
    name: string,
    surname: string,
    address: string,
    city: string,
    mail: string,
    phone: string
}

export const restaurantSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    address: { type: String, required: true },
    city: {type : String, required : true},
    mail: { type: String, required: true },
    phone:{ type: String, required: true}
});

const Restaurant = mongoose.model<RestaurantInterface>('Restaurant', restaurantSchema);

export default Restaurant;