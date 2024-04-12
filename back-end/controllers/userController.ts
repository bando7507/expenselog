import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const JWT_SECRET =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTcxMjE0NDI5OSwiZXhwIjoxNzEyMTQ3ODk5fQ.Uu1Kw5V8jt8sGbHJ1j1z-AS2VIaf6epAtS4YOmx3QLg";

export const createUser = async (req: Request, res: Response) => {
  const { lastname, firtsname, email, password, username } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      lastname,
      email,
      firtsname,
      password: hashedPassword,
      username,
    },
  });

  try {
    res.json({ message: "success" });
  } catch (err) {
    res.status(500).json({ error: "Erreur" });
  }
};

export const connectUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    const token = jwt.sign({ user }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      message: "Connexion réussie",
      id: user.id,
      username: user.username,
      token,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erreur lors de la connexion de l'utilisateur" });
  }
};
