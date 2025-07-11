import {Request, Response} from "express";
import {Router}  from "express";
import AvaliacaoModel from "../models/avaliacao";

const avaliacaoRouter = Router();

avaliacaoRouter.get("/", async (req: Request, res: Response) => {
    const avaliacao = await AvaliacaoModel.find();

    res.send(avaliacao);
});

avaliacaoRouter.post("/", async (req: Request, res: Response) => {
    const body = req.body;

     const avaliacao = await AvaliacaoModel.create(body)
     res.send(avaliacao);
    
});

avaliacaoRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    
    console.log("id",id);
    await AvaliacaoModel.findByIdAndDelete(id)

    res.send("Avaliação Deletada!");

});

avaliacaoRouter.patch("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    
    const avaliacao = await AvaliacaoModel.findByIdAndUpdate(id, { $set: { ...body} },{ new: true}) 

    res.send(avaliacao);

});

export default avaliacaoRouter;