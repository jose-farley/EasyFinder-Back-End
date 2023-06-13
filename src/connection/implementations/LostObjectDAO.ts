import { LostObjectRegisterDTO } from "../../contract/lostObject/LostObjectRegisterDTO";
import { prisma } from "../../database";
import { ResponseModel } from "../../util/ResponseModel";
import { ILostObjectDAO } from "../interfaces/ILostObjectDAO";


export class LostObjectDAO implements ILostObjectDAO {
    async save(data:LostObjectRegisterDTO){
        try {
            await prisma.lostObject.create({data:{
                name:data.getName(),
                description:data.getDescription(),
                location:data.getLocation(),
                owner:data.getOwner(),
                isLosted: data.getIsLosted()
            }}) 
            return new ResponseModel("successfully registered lost object", false)
        } catch (error) {
            return new ResponseModel("something went wrong while saving the lost object", true)
        }
    }
}