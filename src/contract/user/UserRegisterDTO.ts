import bcrypt from 'bcrypt'
interface data {
     name:string
     password:string
     email:string
     state:string
     street:string
     homeNumber:number
     phoneNumber:string
}
export class UserDTO {
    private data:data  = {
        name: "",
        password: "",
        email: "",
        state: "",
        street: "",
        homeNumber: 0,
        phoneNumber: ""
    }

    constructor(received:data){
        this.setName(received.name);
        this.setEmail(received.email);
        this.setPassword(received.password);
        this.setState(received.state);
        this.setStreet(received.street);
        this.setHomeNumber(received.homeNumber);
        this.setPhoneNumber(received.phoneNumber);
    }
    getName():string{
        return this.data.name
    }
    getPassword():string{
        return this.data.password
    }
    getEmail():string{
        return this.data.email
    }
    getHomeNumber():number{
        return this.data.homeNumber
    }
    getStreet():string{
        return this.data.street
    }
    getState():string{
        return this.data.state
    }
    getPhoneNumber():string{
        return this.data.phoneNumber
    }
    private setName(name:string){
        if(name.length >= 4){
            this.data.name = name;
        }else{
            throw new Error("Invalid Name");
        }
        
    }
    private setPassword(password:string){
        if(password.length > 8){
            this.data.password = bcrypt.hashSync(password, 12);
        }else{
            throw new Error("Invalid Password");
        }
    }
    private setEmail(email:string){
        if(this.checkEmail(email)){
            this.data.email = email;
        }else{
            throw new Error("Invalid E-mail")
        }
    }
    private setState(state:string){
        if(state.length>= 2){
            this.data.state = state;
        }else{
            throw new Error("Invalid State");
        }
    }
    private setStreet(street:string){
        if(street.length>= 5){
            this.data.street = street;
        }else{
            throw new Error("Invalid Street");
        }
    }
    private setHomeNumber(homeNumber:number){
        if(homeNumber>0){
            this.data.homeNumber = homeNumber;
        }else{
            throw new Error("Invalid Home Number");
        }
    }
    private setPhoneNumber(phoneNumber:string){
        if(this.checkPhoneNumber(phoneNumber)){
            this.data.phoneNumber = phoneNumber;
        }else{
            throw new Error("Invalid Phone Number");
        }
    }
    private checkPassword(password:string){
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return passwordPattern.test(password);
    }
    private checkEmail(email:string) {
        let emailPattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
         return emailPattern.test(email); 
    }
    private checkPhoneNumber(phoneNumber:string){
        let phoneNumberPattern = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/
        return phoneNumberPattern.test(phoneNumber);
    }
}