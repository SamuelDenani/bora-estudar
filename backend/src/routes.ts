import { Router } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import User from './models/User';

import UsersController from './controllers/UsersController';

const routes = Router();

routes.get('/users', UsersController.index)
routes.post('/users', UsersController.create)

routes.post('/login', async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const usersRepository = getRepository(User);
    let isPasswordCorrect = false;

    try {
        const { password: userPasswordHash } = await usersRepository.findOneOrFail({
            where: [
                {
                    email
                }
            ],
            select: ['password']
        })

        isPasswordCorrect = await bcrypt.compare(password, userPasswordHash);
    } catch (error) {
    }


    return res.json({ isPasswordCorrect })
});

export default routes;