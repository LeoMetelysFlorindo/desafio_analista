import {Schema, model}  from "mongoose";

const inscricaoSchema = new Schema({
  id_cliente: {
    type: String,
    required: true,
 },
  id_atividade: {
   type: Date,
   required: true,
 },
 matricula: {
    type: String,
    required: true,
 },
 data_inscricao: {
   type: String,
   required: true,
 } 
});


const InscricaoModel = model('inscricao', inscricaoSchema);

export default InscricaoModel;