import mongoose from 'mongoose';

export async function connect() {
    try {
        const client = await mongoose.connect('mongodb://localhost:27017/angular-db', {
            useNewUrlParser: true
        });
        console.log('DB is Connected');
        return client;
    } catch {
        console.log(e);
    }
}