import {Schema, model}  from "mongoose";

const clienteSchema = new Schema({
  nome_cliente: {
    type: String,
    required: true,
 },
  data_nascimento: {
   type: Date,
   required: true,
 },
 logradouro: {
    type: String,
    required: true,
 },
 número: {
   type: String,
   required: true,
 },
 bairro: {
   type: String,
   required: true,
 },
 cidade: {
   type: String,
   required: true,
 },
 estado: {
   type: String,
   required: true,
 },
 cep: {
   type: String,
   required: true,
 },
 data_criacao: {
 type: String,
   required: true, 
 }
});


const ClienteModel = model('cliente',clienteSchema);

export default ClienteModel;