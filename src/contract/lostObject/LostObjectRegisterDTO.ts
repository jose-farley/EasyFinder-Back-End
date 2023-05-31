interface data {
    name:string
    description:string
    location:string
    owner:string
}
export class LostObjectRegisterDTO {
    private data:data = {
        name: "",
        description: "",
        owner: "",
        location: ""
    }
    constructor(received:data){
        this.setName(received.name);
        this.setDescription(received.description)
        this.setOwner(received.owner)
        this.setLocation(received.location)
    }
    private setName(name:string){
        if(name == undefined || name.length < 2){
            throw new Error("Invalid object name")
        }
        this.data.name=name
    }
    private setLocation(location:string){
        this.data.location=location
    }
    private setDescription(description:string){
        if(description==undefined || description.length < 5){
            throw new Error("invalid description")
        }
        this.data.description = description
    }
    private setOwner(id:string){
        if(id == undefined || id.length < 8){
            throw new Error("Invalid owner id")
        }
        this.data.owner = id
    }
    getName():string{
        return this.data.name
    }
    getDescription():string{
        return this.data.description
    }
    getOwner():string {
        return this.data.owner
    }
    getLocation(){
        return this.data.location
    }
}