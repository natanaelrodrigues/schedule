import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface UserInstance extends Model{
    id: number;
	name:string;
	email:string;
	password:string;
	admin:number;
    active:number;
    createdAt: Date,
    updatedAt: Date,
}

export const User = sequelize.define<UserInstance>('User',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    admin:{
        type: DataTypes.INTEGER
    },
    active:{
        type: DataTypes.INTEGER
    },
    createdAt: {
        field: 'createdAt',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updatedAt',
        type: DataTypes.DATE,
    }
},
{
    tableName: 'users',
    timestamps: true
});