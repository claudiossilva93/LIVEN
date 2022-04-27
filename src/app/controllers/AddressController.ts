import { Request, Response, NextFunction } from 'express';
import addressApp from '../application/address';

class AddressController{
    async store(req: Request, res: Response, next: NextFunction){
        try{
            const {pais, rua, municipio, bairro, userId} = req.body;
            const address = await addressApp.createAddress({pais, rua, municipio, bairro, userId})
            res.send(address)
        }catch(e) {
            next(e)
        }
    }

    async getById(req: Request, res: Response, next: NextFunction){
        try{
            const {id} = req.params;
            const address = await addressApp.getById(id)
            res.send(address)
        }catch(e) {
            next(e)
        }
    }

    async get(req: Request, res: Response, next: NextFunction){
        try{
            const filter = req.query
            const address = await addressApp.getAddress(filter)
            res.send(address)
        }catch(e) {
            next(e)
        }
    }

    async updateAddress(req: Request, res: Response, next: NextFunction){
        try{
            const {id} = req.params
            const {bairro, municipio, pais, rua} = req.body
            const address = await addressApp.updateAddress(id, {bairro, municipio, pais, rua, userId: id})
            res.send(address)
        }catch(e) {
            next(e)
        }
    }

    async deleteById(req: Request, res: Response, next: NextFunction){
        try{
            const {id} = req.params
            const address = await addressApp.deleteById(id)
            res.send(address)
        }catch(e) {
            next(e)
        }
    }
}

export default new AddressController();