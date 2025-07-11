db = db.getSiblingDB('teste-db'); // Cria ou acessa o banco "teste-db"

db.createCollection('atividades');
db.usuarios.insertOne({
  _id: "686ea876d2e6b5917242fed5",
  nome_atividade: "Curso de Word",
  descricao: "Curso básico de Word Módulo I",
  unidade_sesc: "Centro",
  id_responsavel: "686ea885d2e6b5917242fed7",
  data_criacao:"09/07/2025"
});
db.usuarios.insertOne({
  _id: "686fd5759e4e32fb276e5081",
  nome_atividade: "Curso de Excel",
  descricao: "Curso Básico de Excel | Módulo I",
  unidade_sesc: "Centro",
  id_responsavel: "686ea885d2e6b5917242fed7",
  data_criacao:"10/07/2025"
});

db.createCollection('avaliacaos');
db.produtos.insertOne([
  { _id: "68717b5830adc75698be4d16", nome_usuario: "Manoel Leonardo M Florindo", email: "leo.metelys@gmail.com", registro: "Ótima plataforma de registro de informações.", data_registro: "10/07/2025" }  
]);

