import mongoose from "mongoose";

// conexão 
export const connectToDb = async () => {
    try { 
        // conectar banco de dados local Mongodb
        await mongoose.connect("mongodb://localhost:27017/teste-db");
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.log(error)
    }     
};