import {Request, Response} from "express";
import {Router}  from "express";
import ResponsavelModel from "../models/responsavel";

const ResponsavelRouter = Router();

ResponsavelRouter.get("/", async (req: Request, res: Response) => {
    const responsavel = await ResponsavelModel.find();

    res.send(responsavel);
});

ResponsavelRouter.post("/", async (req: Request, res: Response) => {
    const body = req.body;

     const responsavel = await ResponsavelModel.create(body)
     res.send(responsavel);
    
});

ResponsavelRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    
    console.log("id",id);
    await ResponsavelModel.findByIdAndDelete(id)

    res.send("Responsável Deletado!");

});

ResponsavelRouter.patch("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    
    const responsavel = await ResponsavelModel.findByIdAndUpdate(id, { $set: { ...body} },{ new: true}) 

    res.send(responsavel);

});


export default ResponsavelRouter;