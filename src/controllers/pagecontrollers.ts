import { Request, Response } from "express";

export const home = (rep: Request, res: Response) => {
  res.render("pages/page", {
    banner: {
      title: "Todos os animais",
      backaground: "allanimals.jpg",
    },
  });
};

export const dogs = (rep: Request, res: Response) => {
  res.send("dogs");
};

export const cats = (rep: Request, res: Response) => {
  res.send("cats");
  //res.render('pages/pages')
};

export const fishes = (rep: Request, res: Response) => {
  res.send("fishes");
  //res.render('pages/pages')
};
