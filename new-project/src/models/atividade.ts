import {Schema, model}  from "mongoose";

const atividadeSchema = new Schema({ 
 nome_atividade: {
    type: String,
    required: true,
 },
 descricao: {
    type: String,
    required: true,
 },
 unidade_sesc: {
   type: String,
   required: true,
 },
 id_responsavel: {
   type: String,
   required: true,
 },
 data_criacao: {
   type: Date,
   required: true,
 }
});

const AtividadeModel = model('atividade',atividadeSchema);

export default AtividadeModel;