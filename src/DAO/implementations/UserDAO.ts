import { UserDTO } from "../../DTO/user/UserDTO";
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
    remove() {
        throw new Error("Method not implemented.");
    }
    fetch() {
        throw new Error("Method not implemented.");
    }
    update() {
        throw new Error("Method not implemented.");
    }
    login() {
        throw new Error("Method not implemented.");
    }
    
}