import { Application } from 'express';
import { connectToDb } from './db';
import app from './app';

// Iniciar a Aplicação
const initApp = (app: Application) => {
    const port = 3000;
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`);
     })
}

const start = async () => {
    await connectToDb();
    initApp(app);
}

start()