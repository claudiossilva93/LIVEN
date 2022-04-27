import QueryString from "qs";
import { AppDataSource } from "../../../../data-source";
import IAddress from "../../Interfaces/IAddress";
import Address from "../../models/Address";
import queryBuilder from "./queryBuilder";

export default {

    async createAddress(IAddress: IAddress): Promise<Address>{
        const repository = AppDataSource.getRepository(Address)
        const address = repository.create({ ...IAddress })
        await repository.save(address)
        return address;
    },

    async getById(id:string): Promise<Address>{
        const repository = AppDataSource.getRepository(Address)
        const address = repository.findOne({ where: {id}, relations:{ user:true } })
        return address;
    },

    async getAddress(filter:QueryString.ParsedQs): Promise<Address[]>{
        const repository = AppDataSource.getRepository(Address)
        const address = repository.find({ where: queryBuilder(filter), relations:{ user:true } })
        return address
    },

    async updateAddress(id:string, IAddress: IAddress): Promise<Address>{
        const repository = AppDataSource.getRepository(Address)
        const address = await repository.findOne({ where: {id} })
        if(!address){
            throw "Endereço não encontrado."
        }

        address.bairro      = IAddress.bairro || address.bairro
        address.municipio   = IAddress.municipio || address.municipio
        address.pais        = IAddress.pais || address.pais
        address.rua         = IAddress.rua || address.rua

        await repository.save(address)        

        return address;
    },

    async deleteById(id: string): Promise<void> {
        const repository = AppDataSource.getRepository(Address)
        const address = await repository.findOne({ where: {id}})
        if(!address){
            throw "Endereço não encontrado."
        }
        await repository.delete(id)
    }

}