import { LostObjectRegisterDTO } from "../../model/lostObject/LostObjectRegisterDTO";
import { ResponseModel } from "../../util/ResponseModel";

export interface ILostObjectDAO {
    save(data:LostObjectRegisterDTO):Promise<ResponseModel>;
    list(req:Request):Promise<ResponseModel>;
    remove(id:string):Promise<ResponseModel>;
    fetch(id:string):Promise<ResponseModel>;
}