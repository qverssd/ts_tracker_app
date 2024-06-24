import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser =async (req: Request, res: Response) => {
    const { email, password } = req.body;
    

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword,
        });

    } catch (error) {
        
    }
}