import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

export default {
    async index(req: Request, res: Response) {
        return res.json({ message: 'OK' })
    },

    async create(req: Request, res: Response) {
        const {
            name,
            last_name,
            email,
            password
        } = req.body;

        const data = {
            name,
            last_name,
            email,
            password
        };

        const usersRepository = getRepository(User);
        
        const user = usersRepository.create(data);

        await usersRepository.save(user);

        return res.status(201).json(user);
    }
};