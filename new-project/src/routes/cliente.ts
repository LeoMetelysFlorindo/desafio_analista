import {Request, Response} from "express";
import {Router}  from "express";
import ClienteModel from "../models/Cliente";

const ClienteRouter = Router();

ClienteRouter.get("/", async (req: Request, res: Response) => {
    const cliente = await ClienteModel.find();

    res.send(cliente);
});

ClienteRouter.post("/", async (req: Request, res: Response) => {
    const body = req.body;

     const cliente = await ClienteModel.create(body)
     res.send(cliente);
    
});

ClienteRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    
    console.log("id",id);
    await ClienteModel.findByIdAndDelete(id)

    res.send("Cliente Deletado!");

});

ClienteRouter.patch("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    
    const cliente = await ClienteModel.findByIdAndUpdate(id, { $set: { ...body} },{ new: true}) 

    res.send(cliente);

});


export default ClienteRouter;