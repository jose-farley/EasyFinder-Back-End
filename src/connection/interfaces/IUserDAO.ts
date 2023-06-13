
import { UserLoginDTO } from "../../model/user/UserLoginDTO";
import { UserDTO } from "../../model/user/UserRegisterDTO";
import { UserUpdateDTO } from "../../model/user/UserUpdateDTO";
import { ResponseModel } from "../../util/ResponseModel";

export interface IUserDAO {
    save(user:UserDTO):Promise<ResponseModel>;
    remove(id:string):Promise<ResponseModel>;
    list():Promise<ResponseModel>;
    fetch(id:string):Promise<ResponseModel>;
    update(data:UserUpdateDTO):Promise<ResponseModel>;
    login(data:UserLoginDTO):Promise<ResponseModel>
}