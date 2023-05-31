import { LostObjectRegisterDTO } from "../../contract/lostObject/LostObjectRegisterDTO";
import { ResponseModel } from "../../util/ResponseModel";

export interface ILostObjectDAO {
    save(data:LostObjectRegisterDTO):Promise<ResponseModel>;
}