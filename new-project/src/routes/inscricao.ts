import {Request, Response} from "express";
import {Router}  from "express";
import InscricaoModel from "../models/inscricoes";

const InscricaoRouter = Router();

InscricaoRouter.get("/", async (req: Request, res: Response) => {
    const inscricao = await InscricaoModel.find();

    res.send(inscricao);
});

InscricaoRouter.post("/", async (req: Request, res: Response) => {
    const body = req.body;

     const inscricao = await InscricaoModel.create(body)
     res.send(inscricao);
    
});

InscricaoRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    
    console.log("id",id);
    await InscricaoModel.findByIdAndDelete(id)

    res.send("Inscrição Deletada!");

});

InscricaoRouter.patch("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    
    const inscricao = await InscricaoModel.findByIdAndUpdate(id, { $set: { ...body} },{ new: true}) 

    res.send(inscricao);

});


export default InscricaoRouter;