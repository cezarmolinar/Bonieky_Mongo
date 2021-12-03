import { Schema, model, connection } from 'mongoose';

type UserType = {
    name: {
        firstName: string,
        lastName: string
    },
    age: number,
    interests: [string],
    email: string
}

const schema = new Schema<UserType>({
    name: {
        firstName: { type: String, requerid: true },
        lastName: { type: String, requerid: true }
    },
    age: { type: Number, requerid: true },
    interests: [String],
    email: { type: String, requerid: true }
}, { collection: 'users' });

const modelName: string = 'user';

export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<UserType>(modelName, schema)
    ;