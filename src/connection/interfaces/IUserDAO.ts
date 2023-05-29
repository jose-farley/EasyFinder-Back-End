
import { UserLoginDTO } from "../../contract/user/UserLoginDTO";
import { UserDTO } from "../../contract/user/UserRegisterDTO";
import { UserUpdateDTO } from "../../contract/user/UserUpdateDTO";
import { ResponseModel } from "../../util/ResponseModel";

export interface IUserDAO {
    save(user:UserDTO):Promise<ResponseModel>;
    remove(id:string):Promise<ResponseModel>;
    list():Promise<ResponseModel>;
    fetch();
    update(data:UserUpdateDTO):Promise<ResponseModel>;
    login(data:UserLoginDTO):Promise<ResponseModel>
}