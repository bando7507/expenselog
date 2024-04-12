import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const allTag = async (req: Request, res: Response) => {
  const tags = await prisma.category.findMany();
  if (tags) {
    res.json(tags);
  } else {
    res.status(500).json({ error: "erreur lors de la recuperation" });
  }
};

export const createTag = async (req: Request, res: Response) => {
  const { name, sticker } = req.body;

  const newTag = await prisma.category.create({
    data: {
      name,
      sticker,
    },
  });

  try {
    res.json({ message: "success" });
  } catch (err) {
    res.status(500).json({ error: "Erreur" });
  }
};
