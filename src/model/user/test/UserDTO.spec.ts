import {describe, it, expect} from 'vitest';
import { genericUser } from './data';
import { UserDTO } from '../UserRegisterDTO';

describe("Passando um email de usuário inválido", ()=>{
    it("Espara-se que retorne um erro", ()=>{  
        genericUser.email = "invalidEmail"
        expect(()=> new UserDTO(genericUser)).toThrow(new Error("Invalid E-mail"))
    })
})
describe("Passando um email de usuário válido", ()=>{
    it("Espara-se que não retorne nenhum erro", ()=>{  
        genericUser.email = "joao123@gmail.com"
        expect(()=> new UserDTO(genericUser)).not.toThrow(new Error("Invalid E-mail"))
    })
})
describe("Passando uma senha de usuário com menos de 8 caracteres", ()=>{
    it("Espara-se que retorne um erro", ()=>{  
        genericUser.password = "123"
        expect(()=> new UserDTO(genericUser)).toThrow(new Error("Invalid Password"))
    })
})
describe("Passando uma senha de usuário que não contém números", ()=>{
    it("Espara-se que retorne um erro", ()=>{  
        genericUser.password = "senhaSemNumero"
        expect(()=> new UserDTO(genericUser)).toThrow(new Error("Invalid Password"))
    })
})
describe("Passando uma senha de usuário valida", ()=>{
    it("Espara-se que retorne um erro", ()=>{  
        genericUser.password = "SenhaForte123"
        expect(()=> new UserDTO(genericUser)).not.toThrow(new Error("Invalid Password"))
    })
})
describe("Passando um número de telefone inválido", ()=>{
    it("Espara-se que retorne um erro", ()=>{  
        genericUser.phoneNumber = "88888888888888"
        expect(()=> new UserDTO(genericUser)).toThrow(new Error("Invalid Phone Number"))
    })
})
describe("Passando um número de telefone inválido", ()=>{
    it("Espara-se que retorne um erro", ()=>{  
        genericUser.phoneNumber = "(88) 98989-2898"
        expect(()=> new UserDTO(genericUser)).not.toThrow(new Error("Invalid Phone Number"))
    })
})