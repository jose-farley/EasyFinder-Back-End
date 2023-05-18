import { UserDTO } from "../../DTO/user/UserDTO";
import { ResponseModel } from "../../util/ResponseModel";

export interface IUserDAO {
    save(user:UserDTO):Promise<ResponseModel>;
    remove();
    fetch();
    update();
    login();
}