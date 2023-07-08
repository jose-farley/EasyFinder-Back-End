
import { UserLoginDTO } from "../../model/user/UserLoginDTO";
import { UserDTO } from "../../model/user/UserRegisterDTO";
import { UserUpdateDTO } from "../../model/user/UserUpdateDTO";
import { prisma } from "../../database";
import { ResponseModel } from "../../util/ResponseModel";
import { IUserDAO } from "../interfaces/IUserDAO";

interface UserObject {
    name: string;
    email: string;
    state: string;
    street: string;
    perfilImage: string;
    homeNumber: string;
    phoneNumber: string;
    id: string;
  }

export class UserDAO implements IUserDAO {
    async save(user:UserDTO) {
       try {
            await prisma.user.create({
                data:{
                  name:user.getName(),
                  email: user.getEmail(),
                  homeNumber: parseInt(user.getHomeNumber()),
                  password: user.getPassword(),
                  phoneNumber:user.getPhoneNumber(),
                  state: user.getState(),
                  perfilImage:user.getPerfilImage(),
                  street:user.getStreet(),
                }
            })
            return new ResponseModel("successfully registered user", false)
       } catch (error) {
            return new ResponseModel("something went wrong while registering the user", true, error.message)
       }
    }
    async remove(id:string) {
       try {
        console.log(id)
            await prisma.user.delete({where:{
                id:id
            }})
            return new ResponseModel("user removed successfully", false)
       }catch (error) {
            return new ResponseModel("invalid user id", true, error.message)
       }
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
                    state:true,
                    perfilImage:true,
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
                homeNumber: parseInt(data.getHomeNumber()),
                password:data.getPassword(),
                phoneNumber:data.getPhoneNumber(),
                perfilImage:data.getPerfilImage(),
                state:data.getState(),
                street:data.getStreet()
            }})
            return new ResponseModel("user updated successfully", false)
        } catch (error) {
            return new ResponseModel(error.message, true);
 
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
    
    async fetch(id:string){
        try {
            let user =  await prisma.user.findUnique({where:{id:id}})
            if(!user) throw new Error("User not found");
            const userObject: UserObject = {
                name: user.name,
                email: user.email,
                state: user.state,
                street: user.street,
                perfilImage: user.perfilImage,
                homeNumber: user.homeNumber.toString(),
                phoneNumber: user.phoneNumber,
                id: user.id
            };
            return new ResponseModel(userObject, false)
        } catch (error) {
            return new ResponseModel(error.message, true)
        }
    }
    
    async fetchByEmail(email:string){
        try {
            let user =  await prisma.user.findUnique({where:{email:email}})
            if(!user) throw new Error("User not found");
            const userObject: UserObject = {
                name: user.name,
                email: user.email,
                state: user.state,
                street: user.street,
                perfilImage: user.perfilImage,
                homeNumber: user.homeNumber.toString(),
                phoneNumber: user.phoneNumber,
                id:user.id,
            };
            return new ResponseModel(userObject, false)
        } catch (error) {
            return new ResponseModel(error.message, true)
        }
    }
}