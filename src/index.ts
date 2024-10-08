import  express,{Request, Response}  from 'express';
import {envs} from './config/envs';
import { dbConnection } from './db/init';
import { User } from './db/models/user.model';
import { comparePassword, hashPassword } from './utils/utils';

const app = express();


app.use(express.json());
dbConnection();

app.get("/", async (req:Request, res:Response) =>{
    try{
        const users = await User.findAll();
        res.json(users);
    }catch(error){

    }
});

app.listen(3000, ()=>{
    console.log("Aplicacion corriendo en el puerto 3000")
})

app.post("/",async (req:Request, res:Response) =>{
    try{
        const {name,password,email} = req.body;
        const hashedPassword = hashPassword(password);
        const newUser = await User.create({
            name: name,
            password: hashedPassword,
            email: email
        });
        res.json(newUser)
        return res.json({message:"Body Leido"})
    }catch(error){

    }
    
})

app.post("/login", async (req:Request, res:Response)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({
            where:{
                email: email
            }
        });

        if (user == null){
            return res.status(404).json({message:"Usuario no encontrado"});
        }

        const isLogged = comparePassword(password, user.password);
        if (isLogged){
            return res.status(200).json({message:"Usuario logeado", userId : user.id});
        }else{
            return res.status(400).json({message:"Email or password are invalid"})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Error en el servidor"});
    }
})