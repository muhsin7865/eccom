import mongoose from "mongoose";

export function mongooseConnect() {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }
    else {
        return mongoose.connect("mongodb+srv://muhsinummer40:Thekke123@cluster0.0stguru.mongodb.net/?retryWrites=true&w=majority")
    }
}