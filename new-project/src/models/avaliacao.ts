import {Schema, model}  from "mongoose";

const avaliacaoSchema = new Schema({
  nome_usuario: {
    type: String,
    required: true,
 },
  email: {
   type: Date,
   required: true,
 },
 registro: {
    type: String,
    required: true,
 },
 data_registro: {
   type: String,
   required: true,
 }
});


const AvaliacaoModel = model('avaliacao',avaliacaoSchema);

export default AvaliacaoModel;