
export class Product {
    constructor({name, category, image, price, id}) {
        this.name = name;
        this.image = image;
        this.category = category;
        this.price = price;
        this.id = id;
        this.quantity = 0;
        this.isActive = this.quantity > 0;
        this.subtotal = this.quantity * this.price;
    }

    increment () {
        this.quantity += 1;
    }

    decrement () {
        if (this.quantity > 0) this.quantity -= 1;
    }

    empty() {
        this.quantity = 0;
    }

    update() {
        this.isActive = this.quantity > 0;
        this.subtotal = this.quantity * this.price;
    }
    
}