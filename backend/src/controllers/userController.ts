import { SHA512 } from 'crypto-js';
import { Request, Response } from 'express';

import { User } from '../models/User';

export const create = async (req: Request, res: Response) =>{

    let { name, email, password, admin } = req.body;

    password = SHA512(password).toString() ;
    // Decrypt
    //var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    //var originalText = bytes.toString(CryptoJS.enc.Utf8);
    
    let newUser = await  User.create({
        name, email, password, admin    
    });

    res.json({id: newUser.id, name, email, password, admin });
}

