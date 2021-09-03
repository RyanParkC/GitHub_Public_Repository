class Ninja {
    constructor(name, speed = 3, strength = 3) {
        this.name = name;
        this.health = 100;
        this.speed = speed;
        this.strength = strength
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    showStats() {
        console.log(`Ninja Stats --> Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10){
        super(name, 10, 10)
        this.wisdom = wisdom;
        this.health = 200;
    }
    speakWisdom() {
        this.drinkSake();
        console.log(
            "'There is only one thing that matters if you are a shinobi, and it isn't the number of jutsu you possess. All you need is the guts to never give up.'"
        );
    }
}
const ninja1 = new Ninja("Naruto");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const sensei1 = new Sensei('Master Jiraiya')
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();