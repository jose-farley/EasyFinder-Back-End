import {describe, it, expect} from 'vitest';
import { genericUser } from './data';
import { UserDTO } from '../UserDTO';

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