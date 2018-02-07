// Assigment: Ninja Class III
// http://learn.codingdojo.com/m/4/4720/33710
// Part 1 - Recreate the base Ninja Class from scratch using ES6 classes
// Ninja 
// name , health - 100, speed - 3, strength - 3
// sayName(), showStats(), drinkSake()

// 
class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
        }
    showStats(){
        console.log("name: " + this.name + " health: " + this.health + " speed: " + this.speed + " strength: " + this.strength);
        return this
    }
    sayName(){
        console.log("My name is " + this.name);
        return this
    }
    drinkSake(){
        this.health +=10
        console.log(this.name + " health is now " + this.health);
        return this;
    }
    }
ninja1 = new Ninja("BushidoOne");
ninja1.showStats();
ninja1.sayName();
ninja1.drinkSake();

// Part II - Sensei Class 
// health - 200, speed - 10m strength - 10, wisdom - 10, speakWisdom()

class Sensei {
    constructor(name){
        this.name = name; 
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    showStats(){
        console.log("This is Sensei " + this.name + " with health: " + this.health + ", speed: " + this.speed + ", strength: " + this.strength);
        return this;
    }
    sayName(){
        console.log("My name is Sensei " + this.name);
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log('Health is now: ${this.health}');
        return this;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("Do or do not, there is no try. My health is now " + this.health);
    }
}
sensei1 = new Sensei("SenseiOne");
sensei1.showStats();
sensei1.sayName();
sensei1.drinkSake();
sensei1.speakWisdom();

// health: 100 speed: 3 strength: 3
// My name is BushidoOne
// BushidoOne health is now 110
// This is Sensei SenseiOne with health 200 speed 10 this.strength 10
// My name is Sensei SenseiOne
// Health is now: ${this.health}
// Health is now: ${this.health}
// Do or do not, there is no try. My health is now 220