import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'user'
})
export class User extends Model {
    @Column({
        type:DataType.STRING, 
        allowNull: true
    }) 
    name!: string;
    
    @Column({
        type:DataType.STRING, 
        allowNull: true
    }) 
    email!:string;

    @Column({
        type:DataType.STRING, 
        allowNull: true
    }) 
     password!:string;
}