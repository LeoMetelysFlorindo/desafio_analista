
import express, {Request, Response} from "express";

import atividadeRouter from "./routes/atividade";
import ClienteRouter from "./routes/cliente";
import ResponsavelRouter from "./routes/responsavel";
import InscricaoRouter from "./routes/inscricao";
import avaliacaoRouter from "./routes/avaliacao";

const app = express();

// Para ler o corpo da Requisição no Postman
app.use(express.json());


app.use('/atividade', atividadeRouter);
app.use('/cliente', ClienteRouter);
app.use('/responsavel', ResponsavelRouter);
app.use('/inscricao', InscricaoRouter);
app.use('/avaliacao', avaliacaoRouter);

export default app;

