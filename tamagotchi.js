console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi{
    constructor(name, creatureType){
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
  
    cry(){
        this.foodInTummy--;
        console.log(this.name);
        console.log('current food in tummy: ' + this.foodInTummy);
        console.log("WAHH!!!");
    };
};

//create new Tamagotchis
var tamagotchi001 = new Tamagotchi();
var tamagotchi002 = new Tamagotchi();

var tamagotchi003 = new Tamagotchi('Franci','babybat');
var tamagotchi004 = new Tamagotchi('Donku', 'sylphi');
//test out your Tamagotchies below via console.logs
console.log(tamagotchi001);
console.log(tamagotchi002);

tamagotchi001.cry();
tamagotchi002.cry();

tamagotchi003.cry();
tamagotchi004.cry();