import { Sequelize } from "sequelize-typescript";
import { User } from "./models/user.model";
import { envs } from "../config/envs";

const db = new Sequelize({
    database:envs.MYSQL_DB,
    username:envs.MYSQL_USER,
    password:envs.MYSQL_PASSWORD,
    host:envs.MYSQL_HOST,
    dialect:"mysql",
    models:[User]
});

export const dbConnection = async() =>{
    try{
        await db.sync({force: false});
        console.log("Database connected")
    }catch(error){
        console.error(`Error connecting to Database ${error}`)
    }
}