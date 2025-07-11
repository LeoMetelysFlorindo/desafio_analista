import {Schema, model}  from "mongoose";

const responsavelSchema = new Schema({ 
 nome_responsavel: {
    type: String,
    required: true,
 },
 matricula: {
    type: String,
    required: true,
 },
 data_criacao: {
   type: Date,
   required: true,
 }
});

const ResponsavelModel = model('responsavel',responsavelSchema);

export default ResponsavelModel;