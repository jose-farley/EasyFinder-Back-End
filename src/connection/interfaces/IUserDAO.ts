
import { UserLoginDTO } from "../../contract/user/UserLoginDTO";
import { UserDTO } from "../../contract/user/UserRegisterDTO";
import { ResponseModel } from "../../util/ResponseModel";

export interface IUserDAO {
    save(user:UserDTO):Promise<ResponseModel>;
    remove();
    list():Promise<ResponseModel>;
    fetch();
    update();
    login(data:UserLoginDTO):Promise<ResponseModel>
}