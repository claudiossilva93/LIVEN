import { Request, Response, NextFunction } from 'express';
import userApp from '../application/user';

class UserController{
    async store(req: Request, res: Response, next: NextFunction){
        try{
            const {email, nome, sobrenome, password} = req.body;
            const user = await userApp.createUser({email, nome, sobrenome, password})
            res.send(user)
        }catch(e) {
            next(e)
        }
    }

    async getById(req: Request, res: Response, next: NextFunction){
        try{
            const {id} = req.params;
            const user = await userApp.getById(id);
            res.send(user)
        }catch(e) {
            next(e)
        }
    }

    async deleteById(req: Request, res: Response, next: NextFunction) {
        try{
            const {id} = req.params;
            await userApp.deleteById(id);
            res.send(200)
        }catch(e) {
            next(e)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try{
            const {id} = req.params;
            const {email, nome, sobrenome, password} = req.body;
            await userApp.updateUser(id, {email, nome, sobrenome, password});
            res.sendStatus(200)
        }catch(e) {
            next(e)
        }
    }
}

export default new UserController();