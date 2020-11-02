import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';

import User from '../models/User';

export default {
    async index(req: Request, res: Response) {
        const usersRepository = getRepository(User);

        const users = usersRepository.find();

        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const {
            name,
            last_name,
            email,
            password
        } = req.body;

        const saltRounds = 10;

        const passwordHash = await bcrypt.hash(password, saltRounds);

        const data = {
            name,
            last_name,
            email,
            password: passwordHash
        };

        const usersRepository = getRepository(User);
        
        const user = usersRepository.create(data);

        await usersRepository.save(user);

        return res.status(201).json(user);
    }
};