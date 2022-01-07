import { Request, Response } from 'express';

import { User } from '../models/User';

import {encript} from '../helpers/crypt';

import { Sequelize } from 'sequelize';

export const create = async (req: Request, res: Response) => {

    let { name, email, password, admin } = req.body;

    password = encript(password);
    
    
    let newUser = await  User.create({
        name, email, password, admin    
    });

    res.status(201)
       .json({id: newUser.id, name, email, password, admin });
}

export const list = async (req: Request, res: Response) => {

    
    
    let list = await  User.findAll();

    res.status(200)
       .json({list });
}

export const get = async (req: Request, res: Response) => {

    let { id } = req.params;
    
    let item = await  User.findByPk(id);
    if ( item ){
        res.status(200)
           .json({item });
    } else {
        res.status(204)
           .json({error: "Item não encontrado." });
    }
}

export const update = async (req: Request, res: Response) => {

    let { id } = req.params;
    let { name, email, password, admin, active } = req.body;
    
    let item = await  User.findByPk(id);
    password = encript(password);
    if ( item ){

        item.name = name;
        item.password = password;
        item.email = email;
        item.admin = admin;
        item.active = active; 
       
        await item.save();

        res.status(200)
           .json({item });
    } else {
        res.status(204)
           .json({error: "Item não encontrado." });
    }
}

export const deleteItem = async (req: Request, res: Response) => {

    let { id } = req.params;
    
     await  User.destroy({
         where: {
             id
         }
     });

    res.status(200)
        .json({ });
    
}


export const userRandom = async (req: Request, res: Response) => {

    let item = await  User.findOne({
         order: [
             Sequelize.fn('RANDOM')
            ]    
     });

    if(item) {
        res.status(200)
            .json({ item });
    } else {
        res.status(204)
            .json({  });
    }
    
}

