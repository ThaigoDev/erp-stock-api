import  express from "express";
import  router  from './routes';
import {prisma} from './database/prisma'
import dotenv from 'dotenv/config'
const app = express();
app.use(express.json());
app.use(router)
app.use(express.urlencoded({extended:true}));

const main  = async ():Promise<void> =>{
  try {
      await prisma.$connect();
      app.emit("Connected");
      console.log('✅ Conectado ao banco de dados com sucesso!');
  }catch(e) {
    console.error('❌ Erro ao conectar no banco:', e)
  }
}

  app.listen(process.env.PORT,()=>{
    console.log("Conectado em : http://localhost:3000/")
  })


main();

