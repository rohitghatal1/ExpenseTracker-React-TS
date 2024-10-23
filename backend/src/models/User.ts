import mongoose, {Document, Schema} from "mongoose";

interface IUser extends Document{
    name: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    name: {type: String, required: true},
    emial: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

export const User = mongoose.model<IUser>('User', UserSchema);