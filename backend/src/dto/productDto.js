export default class productDto{
    constructor(product){
        this.title=product.title,
        this.description=product.description,
        this.code=product.code,
        this.price=product.price,
        this.category=product.category,
        this.thumbnails=product.thumbnails
    }
}
