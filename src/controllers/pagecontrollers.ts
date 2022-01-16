import { Request,Response } from "express";
import { request } from "http";

 export const home = (rep: Request, res:Response) =>{
     res.send('home no controller');

    //res.render('pages/pages')
}

export const dogs = (rep: Request, res:Response) =>{

    //res.render('pages/pages')
}

export const cats = (rep: Request, res:Response) =>{

    //res.render('pages/pages')
}

export const fishes = (rep: Request, res:Response) =>{

    //res.render('pages/pages')
}

