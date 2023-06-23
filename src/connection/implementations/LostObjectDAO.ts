import { LostObjectRegisterDTO } from "../../model/lostObject/LostObjectRegisterDTO";
import { LostObjectUpdateDTO } from "../../model/lostObject/LostObjectUpdateDTO";
import { prisma } from "../../database";
import { ResponseModel } from "../../util/ResponseModel";
import { ILostObjectDAO } from "../interfaces/ILostObjectDAO";


export class LostObjectDAO implements ILostObjectDAO {
    async remove(id: string): Promise<ResponseModel> {
       try {
            await prisma.lostObject.delete({where:{id:id}})
            return new ResponseModel("Objeto removido", false)
       } catch (error) {
            return new ResponseModel(error.message, true)
       }
    }
    async fetch(id: string): Promise<ResponseModel> {
        try {
            let result = await prisma.lostObject.findUnique({where: {id:id}})
            return new ResponseModel(result, false)
        } catch (error) {
            return new ResponseModel(error.message, true)
        }
    }
    async filter(filter: string, found: boolean): Promise<ResponseModel> {
        try {
            let result = await prisma.lostObject.findMany({
                where: {
                    OR: [
                      {
                        name: {
                          contains: filter,
                        },
                      },
                      {
                        description: {
                          contains: filter,
                        },
                      },
                      {
                        owner: {
                          contains: filter,
                        },
                      },
                    //TODO Filtro para produto encontrado ou não encontrado
                    //   {
                    //     isLosted: {
                    //       equals: found,
                    //     },
                    //   },
                    ],
                }
              })
            return new ResponseModel(result, false)
        } catch (error) {
            return new ResponseModel(error.message, true)
        }
    }
    async list(): Promise<ResponseModel> {
        try {
            let lostObjects = await prisma.lostObject.findMany()  
            return new ResponseModel(lostObjects, false)
        } catch (error) {
            return new ResponseModel(error.message, true)
        }
    }
    async update(data:LostObjectUpdateDTO) {
        try {
            await prisma.lostObject.update({where:{
                id:data.getId()
            }, data:{
                description:data.getDescription(),
                isLosted:data.getIsLosted(),
                location:data.getLocation(),
                objectImage:data.getObjectImage(),
                owner:data.getOwner(),
                name:data.getName()
            }})
            return new ResponseModel("user updated successfully", false)
        } catch (error) {
            return new ResponseModel("something went wrong while updating user", true);
 
        }
    }
    async save(data:LostObjectRegisterDTO){
        try {
            await prisma.lostObject.create({data:{
                name:data.getName(),
                description:data.getDescription(),
                location:data.getLocation(),
                owner:data.getOwner(),
                objectImage:data.getObjectImage(),
                isLosted: data.getIsLosted()
            }}) 
            return new ResponseModel("successfully registered lost object", false)
        } catch (error) {
            return error
            // return new ResponseModel("something went wrong while saving the lost object", true)
        }
    }
}