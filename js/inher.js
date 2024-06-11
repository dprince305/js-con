class vehicle{

    constructor(name,speed,type){

        this.name = name;
        this.speed = speed;
        this.type = type;
    }
    
    vehicleDetail() {

        console.log(`${this.name} is speed ${this.speed}`)
    }
}

class Bike extends vehicle {

    constructor(name ,speed , type , price){
        super(name , speed , type);

        this.price = price;


    }

    priceDetail() {

        console.log(`${this.name} is price with tax ${this.price + 500}`);


    }

    vehicleDetail() {

        console.log(`${this.name} is speed ${this.speed}`)
    }   
}

let b1 = new Bike ("java" , 110 , "normal" , 1100000);

b1.vehicleDetail();
b1.priceDetail();



