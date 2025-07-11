# desafio_analista
Aplicativo Teste - Javascript, Node.js e REACT

11/07/2025 17:16h


Foi utizado nesta criação o banco de dados MONGODB pela facildiade de criação das tabelas e pela ótima integração com o Typescript. 

A porta de trabalho da aplicação foi definida como a 3000;

Na pasta interna "new-project" abra o VS CODE e digite o comando "npm run dev" para executar a aplicação;

Na criação das tabelas algumas peculiaridades foram mantidas em relação ao MONGODB; o campo id_nome_da_tabela foi deixado somente como _id em todas as tabelas pela facilidade de integração; também por isso cada nome de tabela tem um "s" ao final para que a orientação do Typescript com as tabelas possa acontecer corretamente; se você alterar o nome da tabela retirado o "s" a funcionalidade criada não terá o comportamento esperado e indicamos que isto seja deixado assim em seus testes;

Todas as tabelas estão operacionalizado com chamadas via POSTMAN:

1. Abra o POSTMAN e defina a chamada:

http://localhost:3000/atividade
http://localhost:3000/inscricao
http://localhost:3000/avaliacao
http://localhost:3000/responsavel
http://localhost:3000/cliente

Essas são as chamadas GET de cada uma das tabelas criadas;

2. Há um conjunto de instruções que vc pode testar em routes para cada uma das tabelas:

PATCH:
http://localhost:3000/atividade/686fd5759e4e32fb276e5081

DELETE:
http://localhost:3000/atividade/686fd5759e4e32fb276e5081

Pode-se testar cada uma delas e deu-se prioridade na criação de cada uma destas funcionalidades para cada tabela;


Foi criado um pequeno DockerFile interno dentro da pasta mongo-init com duas  tabelas como modelo para criação. O json de cada uma das tabelas está inserido nesta pasta para se dar uma ideia do que deve ser feito.


Por Manoel Leonardo Metelis Florindo
