import { Request, Response } from 'express';
import userApp from '../application/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

class AuthController{
    async authenticate(req: Request, res: Response){
        const {email, password} = req.body;
        const user = await userApp.getByEmail(email)
        if(!user){
            res.send(401)
        }
        const isValidPassword = await bcrypt.compare(password, user.password)

        if(!isValidPassword){
            res.send(401)
        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h'})

        delete user.password

        return res.json({
            user,
            token,
        })
    }
}

export default new AuthController();