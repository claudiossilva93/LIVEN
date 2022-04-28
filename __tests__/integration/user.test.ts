import { AppDataSource } from '../../data-source';
import userApp  from '../../src/app/application/user';
import { faker } from '@faker-js/faker';

beforeAll(async ()=>{
    await AppDataSource.initialize()
    .then(() =>console.log("connected with database for tests"))
    .catch((error) => console.log(error))
});

it('should create user', async ()=>{

    const password:string = faker.random.alpha();
    const nome:string = faker.name.firstName();
    const sobrenome:string = faker.name.lastName();
    const email:string = faker.internet.email();

    const mockUser = {
        nome,
        sobrenome,
        email,
        password
    }

    const user = await userApp.createUser({ ...mockUser })
    expect( mockUser.email ).toBe(user.email)

})

it('should return user by id', async ()=>{

    const user = await userApp.getById("5bb785aa-ea5d-4760-b307-e7fcda1de9d9")
    expect( user.email ).toBe("claudiossilva93@gmail.com")

})

