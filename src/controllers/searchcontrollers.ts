import { Request, Response } from "express";
import { pet } from "../models/pet";
import { creatMenuObject } from "../helpers/creatMenuObject";

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if(!query){
        res.redirect('/');
        return;
    }


    let list = pet.getFroName(query);

    res.render('pages/page',{
        menu: creatMenuObject(''),
        list,
        query
    });
}
