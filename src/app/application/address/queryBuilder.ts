import QueryString from "qs";
import { FindOptionsWhere, Like } from "typeorm";
import Address from "../../models/Address";

export default (filter:QueryString.ParsedQs):FindOptionsWhere<Address> => {

    const optionsWhere:FindOptionsWhere<Address> = {};

    if(filter.pais){
        optionsWhere.pais = filter.pais as string;
    }

    if(filter.bairro){
        optionsWhere.bairro =  Like(`%${filter.bairro}%`);
    }

    if(filter.id){
        optionsWhere.id =  filter.id as string;
    }

    if(filter.municipio){
        optionsWhere.municipio = Like(`%${filter.municipio}%`);
    }

    if(filter.rua){
        optionsWhere.rua = Like(`%${filter.rua}%`);
    }

    if(filter.userId){
        optionsWhere.userId = filter.userId as string;
    }

    return optionsWhere;

}