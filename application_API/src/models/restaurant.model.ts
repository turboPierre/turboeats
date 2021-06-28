import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';
import mongoose, {Schema, Document} from 'mongoose';

export interface RestaurantInterface extends Document {
    name: string,
    price: string,
    describe: string,
    picture: string,
    adress: string,
    lunch_hours: number,
    dinner_hours: number,
    open_days: string
}

export const restaurantSchema = new Schema({
    name: { type: String, required: true },
    _userId: {type: Number, required:true},
    describe: { type: String, required: false},
    picture : { type: String, required : false},
    adress : { type: String, required: true },
    lunch_hours : { type: Number, required:false},
    dinner_hours : { type: Number, required:false},
    open_days : { type: String, required: true }
});

const Restaurant = mongoose.model<RestaurantInterface>('Restaurant', restaurantSchema);

export default Restaurant;