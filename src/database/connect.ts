import { AppDataSource } from "../../data-source";

AppDataSource.initialize()
.then(() =>console.log("connected with database"))
.catch((error) => console.log(error))