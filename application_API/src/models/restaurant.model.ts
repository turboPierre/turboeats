import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';
import mongoose, {Schema, Document} from 'mongoose';

export interface RestaurantInterface extends Document {
    name: string,
    describe: string,
    picture: string,
    address: string,
    open_hour: number,
    close_hour: number,
    open_days: string
}

export const restaurantSchema = new Schema({
    name: { type: String, required: true },
    _userId: {type: Number, required:true},
    describe: { type: String, required: false},
    picture : { type: String, required : false},
    address : { type: String, required: true },
    open_hour : { type: Number, required:false},
    close_hour : { type: Number, required:false},
    open_days : { type: String, required: true }
});

const Restaurant = mongoose.model<RestaurantInterface>('Restaurant', restaurantSchema);

export default Restaurant;