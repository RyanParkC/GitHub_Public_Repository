class Ninja {
    constructor(name, speed = 3, strength = 3) {
        this.name = name;
        this.health = 100;
        this.speed = speed;
        this.strength = strength
    }
    sayName(){
        console.log(`My name is ${this.name}`);
    }
    showStats(){
        console.log(`Ninja Stats --> Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Naruto");
ninja1.sayName();
ninja1.showStats();