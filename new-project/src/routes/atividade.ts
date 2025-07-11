import {Request, Response} from "express";
import {Router}  from "express";
import AtividadeModel from "../models/atividade";

const atividadeRouter = Router();

atividadeRouter.get("/", async (req: Request, res: Response) => {
    const atividade = await AtividadeModel.find();

    res.send(atividade);
});

atividadeRouter.post("/", async (req: Request, res: Response) => {
    const body = req.body;

     const atividade = await AtividadeModel.create(body)
     res.send(atividade);
    
});

atividadeRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    
    console.log("id",id);
    await AtividadeModel.findByIdAndDelete(id)

    res.send("Atividade Deletada!");

});

atividadeRouter.patch("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    
    const atividade = await AtividadeModel.findByIdAndUpdate(id, { $set: { ...body} },{ new: true}) 

    res.send(atividade);

});

export default atividadeRouter;