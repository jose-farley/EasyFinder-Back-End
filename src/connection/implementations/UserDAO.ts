
import { UserLoginDTO } from "../../contract/user/UserLoginDTO";
import { UserDTO } from "../../contract/user/UserRegisterDTO";
import { UserUpdateDTO } from "../../contract/user/UserUpdateDTO";
import { prisma } from "../../database";
import { ResponseModel } from "../../util/ResponseModel";
import { IUserDAO } from "../interfaces/IUserDAO";

export class UserDAO implements IUserDAO {
    async save(user:UserDTO) {
       try {
            await prisma.user.create({
                data:{
                  name:user.getName(),
                  email: user.getEmail(),
                  homeNumber: user.getHomeNumber(),
                  password: user.getPassword(),
                  phoneNumber:user.getPhoneNumber(),
                  state: user.getState(),
                  street:user.getStreet(),
                }
            })
            return new ResponseModel("successfully registered user", false)
       } catch (error) {
            return new ResponseModel("something went wrong while registering the user", true)
       }
    }
    async remove(id:string) {
       try {
            await prisma.user.delete({where:{
                id:id
            }})
            return new ResponseModel("user removed successfully", false)
       }catch (error) {
            return new ResponseModel("invalid user id", true)
       }
    }
    async fetch() {
        throw new Error("Method not implemented.");
    }
    async list(): Promise<ResponseModel> {
        try {
            let result = await prisma.user.findMany({
                select:{
                    email:true,
                    name:true,
                    phoneNumber:true,
                    homeNumber:true,
                    id:true,
                    street:true,
                    state:true
                }
            });
            return new ResponseModel(result, false);
       } catch (error) {
            return new ResponseModel("something went wrong while listing users", true);
       }  
    }
    async update(data:UserUpdateDTO) {
        try {
            await prisma.user.update({where:{
                id:data.getId()
            }, data:{
                email:data.getEmail(),
                name:data.getName(),
                homeNumber:data.getHomeNumber(),
                password:data.getPassword(),
                phoneNumber:data.getPhoneNumber(),
                state:data.getState(),
                street:data.getStreet()
            }})
            return new ResponseModel("user updated successfully", false)
        } catch (error) {
            return new ResponseModel("something went wrong while updating user", true);
 
        }
    }
    async login(data:UserLoginDTO):Promise<ResponseModel> {
        try {
            let user = await prisma.user.findUnique({where:{
                email:data.getEmail()
            }})
            if(!user) throw new Error("User not found");
            return new ResponseModel(user, false)
        } catch (error) {
            return new ResponseModel(error.message, true)
        }
    }
    
}