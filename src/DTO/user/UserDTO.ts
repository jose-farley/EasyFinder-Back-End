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
    setName(name:string){
        if(name.length >= 4){
            this.data.name = name;
        }else{
            throw new Error("Invalid Name");
        }
        
    }
    setPassword(password:string){
        if(password.length>= 8){
            this.data.password = password;
        }else{
            throw new Error("Invalid Password");
        }
    }
    setEmail(email:string){
        if(this.validarEmail(email)){
            this.data.email = email;
        }else{
            throw new Error("Invalid E-mail")
        }
    }
    setState(state:string){
        if(state.length>= 2){
            this.data.state = state;
        }else{
            throw new Error("Invalid State");
        }
    }
    setStreet(street:string){
        if(street.length>= 5){
            this.data.street = street;
        }else{
            throw new Error("Invalid Street");
        }
    }
    setHomeNumber(homeNumber:number){
        if(homeNumber>0){
            this.data.homeNumber = homeNumber;
        }else{
            throw new Error("Invalid Home Number");
        }
    }
    setPhoneNumber(phoneNumber:string){
        if(phoneNumber.length > 8){
            this.data.phoneNumber = phoneNumber;
        }else{
            throw new Error("Invalid Phone Number");
        }
    }
    validarEmail(email:string) {
        let emailPattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
         return emailPattern.test(email); 
    }
}