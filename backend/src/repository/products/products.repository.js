import productDto from "../../dto/productDto.js";

export default class productsRepository{
    constructor(dao){
        this.dao=dao;
    }
    async postProductServ(){
        const product = await this.dao.addElements([{ title, description, code, price, status, stock, category }])
        const productoDto= new productDto(result);
        return productoDto }  

    async getProductsServ(){
        const products = await this.dao.getElements()
        const productDTO = products.map( product => new productDto( product ))
        console.log(productDTO);
        return productDTO
    }

    async getProductByIdServ( id ){
        const result = await this.dao.getElementById( id )
        const resultDTO=new productDto(result)
        return resultDTO;
        
    }
     async updateElementService(id, ...info) {
       const result= await this.dao.updateElement(id, ...info)
       const resultDto=new productDto(result)
       return resultDto;
        }

        async deleteElementProService(id) {
         
        const result=await this.dao.deleteElement(id)
        const resultDto=new productDto(result)
        return resultDto;
    }
}
