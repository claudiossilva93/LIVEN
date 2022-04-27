import { AppDataSource } from "../../../../data-source";
import IUser from "../../Interfaces/IUser";
import User from "../../models/User";

export default {

    async createUser(IUser: IUser): Promise<User>{

        const repository = AppDataSource.getRepository(User)
        const userExists = await repository.findOne({ where:{ email: IUser.email } })
        if(userExists){
            throw 'Email já cadastrado na base de dados'
        }
        const user = repository.create({ ...IUser })

        await repository.save(user)

        return user;
    },

    async getByEmail(email: string): Promise<User|null>{
        const repository = AppDataSource.getRepository(User)
        return await repository.findOne({where:{ email } });
    },

    async getById(id: string): Promise<User|null>{
        const repository = AppDataSource.getRepository(User)
        return await repository.findOne({ where:{ id }, relations:{ address:true } });
    },

    async deleteById(id: string): Promise<void>{
        const repository = AppDataSource.getRepository(User)
        const user =  await repository.findOne({ where:{ id } });
        if(!user){
            throw "Usuário não encontrado."
        }
        await repository.delete(id)
    },

    async updateUser(id: string, IUser: IUser): Promise<User>{

        const repository = AppDataSource.getRepository(User)
        const user = await repository.findOne({ where:{ id } })
        if(!user){
            throw 'Usuário não encontrado'
        }

        user.email = IUser.email || user.email
        user.nome = IUser.nome || user.nome
        user.sobrenome = IUser.sobrenome || user.sobrenome
        user.password = IUser.password || user.password
        user.updated_at = new Date()

        await repository.save(user)        

        return user;
    }

}