import { Request, Response } from 'express';


export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const random = (req: Request, res: Response) => {
    let rand: number = Math.floor( Math.random() * 1000);
    res.json({value: rand});
}