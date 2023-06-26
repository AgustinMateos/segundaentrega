import userDto from "../../dto/userDto.js";

export default class usersRepository{
    constructor(dao){
        this.dao=dao;
    }

    async getAllUsersServ(){
        const users = await this.dao.getElements()
        const usersDTO = users.map( user => new userDto( user ))
        console.log(usersDTO);
        return usersDTO
    }

    async getUserByIdServ( id ){
        const result = await this.dao.getElementById( id )
        const resultDTO=new userDto(result)
        return resultDTO;
    }

    async getUserByEmailServ(email){
        const user = await this.dao.getElementByEmail(email);
        return user
    }

    async postElementsUser(elements){
        //Agrego 1 o varios elementos
           const elementsUser= await this.dao.addElements(elements)
           const elementUserDto=new userDto(elementsUser)
           return elementUserDto
    }
        
    }
