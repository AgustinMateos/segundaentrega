

export default class cartRepository{
    constructor(dao){
        this.dao=dao;
    }
    async postCartServ(){
       const cart = await this.dao.addElements()
        return cart }  


    async getProductsCartServ(){
        const produCart= await this.dao.getProductsCart()
        return produCart
    }
    async addProductCartServ(){
        const product = await this.dao.addProductCart(id, id_prod, cant)
        return product
    }
    async updateProductCart(){
        const productUpdate = await this.dao.updateElement(id, { title: title, description: description, code: code, price: price, status: status, stock: stock, category: category, thumbnails: thumbnails })
        return productUpdate

    }
    async deleteElement(id){
        const elementDelete = await this.dao.deleteProductsCart(id)
        return elementDelete
    }
    }