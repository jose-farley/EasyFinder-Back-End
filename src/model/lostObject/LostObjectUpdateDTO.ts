interface data {
    id:string
    name:string
    isLosted:boolean
    description:string
    location:string
    owner:string
    objectImage:string
}
interface file {
    filename:string
}
export class LostObjectUpdateDTO {
    private data:data = {
        id:"",
        name: "",
        description: "",
        owner: "",
        location: "",
        objectImage: "",
        isLosted: true
    }
    constructor(received:data, file:string){
        this.setId(received.id)
        this.setName(received.name)
        this.setDescription(received.description)
        this.setOwner(received.owner)
        this.setLocation(received.location)
        this.setIsLosted(received.isLosted)
        this.setObjectImage(file)
    }
    private setId(id:string){
        if(id.length>8){
            this.data.id=id
        }else{
            throw new Error("Invalid object id");
        }
    }
    private setName(name:string){
        if(name == undefined || name.length < 2){
            throw new Error("Invalid object name")
        }
        this.data.name=name
    }
    private setObjectImage(objectImage: string) {
        if(objectImage == undefined){
            this.data.objectImage = "defaultObject.png";
        }else{
            this.data.objectImage = objectImage;
        }
    }
    private setLocation(location:string){
        if(location == undefined) {
            throw new Error("Invalid location")            
        }
        this.data.location=location
    }
    private setDescription(description:string){
        if(description==undefined || description.length < 5){
            throw new Error("Invalid description")
        }
        this.data.description = description
    }
    private setIsLosted(isLosted:boolean){
        if(isLosted == undefined){
            throw new Error("Invalid lost status")
        } else {
            this.data.isLosted = isLosted
        }
    }
    private setOwner(id:string){
        if(id == undefined || id.length < 8){
            throw new Error("Invalid owner id")
        }
        this.data.owner = id
    }
    getId(){
        return this.data.id
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
    getIsLosted():boolean{
        return this.data.isLosted
    }
    getLocation(){
        return this.data.location
    }
    getObjectImage(){
        return this.data.objectImage
    }
}