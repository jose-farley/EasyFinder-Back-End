interface data {
    password:string
    email:string

}
export class UserLoginDTO {
    private data:data = {
        password: "",
        email: ""
    }
    constructor(data:data){
        this.setPassword(data.password)
        this.setEmail(data.email)
    }
    private setPassword(password:string){
        if(password.length >=8){
            this.data.password = password
        }else{
            throw new Error("Invalid Password");
        }
    }
    private setEmail(email:string){
        if(this.checkEmail(email)){
            this.data.email = email
        }else{
            throw new Error("Invalid E-mail");
        }
    }
    getPassword():string{
        return this.data.password;
    }
    getEmail():string{
        return this.data.email
    }
    checkPassword(password:string){
        if(password.length < 8){
            return false
        }else{
            return true
        }
    }
    checkEmail(email:string) {
        let emailPattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
         return emailPattern.test(email); 
    }
}