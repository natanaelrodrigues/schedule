import { Request, Response } from 'express';

import { User } from '../models/User';

import {encript} from '../helpers/crypt';

export const create = async (req: Request, res: Response) => {

    let { name, email, password, admin } = req.body;

    password = encript(password);
    
    
    let newUser = await  User.create({
        name, email, password, admin    
    });

    res.json({id: newUser.id, name, email, password, admin });
}

