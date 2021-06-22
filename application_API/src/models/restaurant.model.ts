import mongoose, {Schema, Document} from 'mongoose';

export interface RestaurantInterface extends Document {
    name: string,
    price: string
}

export const restaurantSchema = new Schema({
    name: { type: String, required: true },
    _userId: {type: Schema.Types.ObjectId, ref: 'User', required:true}
});

const Restaurant = mongoose.model<RestaurantInterface>('Restaurant', restaurantSchema);

export default Restaurant;