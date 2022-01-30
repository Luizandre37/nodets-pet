import { Request, Response } from "express";
import { pet } from "../models/pet";
import { creatMenuObject } from "../helpers/creatMenuObject";

export const home = (rep: Request, res: Response) => {
  let list = pet.getAll();

  res.render("pages/page", {
    menu: creatMenuObject("all"),
    banner: {
      title: "Todos os animais",
      backaground: "allanimals.jpg",
    },
    list,
  });
};

export const dogs = (rep: Request, res: Response) => {
  let list = pet.getFromType("dog");
  res.render("pages/page", {
    menu: creatMenuObject("dog"),

    banner: {
      title: "cachorros",
      backaground: "banner_dog.jpg",
    },
    list,
  });
};

export const cats = (rep: Request, res: Response) => {
  let list = pet.getFromType("cat");
  res.render("pages/page", {
    menu: creatMenuObject("cat"),

    banner: {
      title: "Gatos",
      backaground: "banner_cat.jpg",
    },
    list,
  });
};

export const fishes = (rep: Request, res: Response) => {
  let list = pet.getFromType("fish");
  res.render("pages/page", {
    menu: creatMenuObject("fish"),

    banner: {
      title: "Peixes",
      backaground: "banner_fish.jpg",
    },
    list,
  });
};
