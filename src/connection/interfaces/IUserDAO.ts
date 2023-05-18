
import { UserDTO } from "../../contract/user/UserDTO";
import { ResponseModel } from "../../util/ResponseModel";

export interface IUserDAO {
    save(user:UserDTO):Promise<ResponseModel>;
    remove();
    list():Promise<ResponseModel>;
    fetch();
    update();
    login();
}