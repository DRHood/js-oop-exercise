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
    puke(){
        this.foodInTummy--;
        console.log(this.name + ' current food in tummy: ' + this.foodInTummy);
        console.log("WAHH!!!");
    };
    yawn(){
        this.restedness--;
        console.log(this.name + ' has current restedness of: ' + this.restedness);
    };
    start(){
        console.log(this.name);
        setInterval(cry, 6000);
        setInterval(yawn, 10000);
        setInterval(puke, 20000);
    };
    stop(){
        clearInterval(setInterval(cry, 6000));
        clearInterval(setInterval(yawn, 10000));
        clearInterval(setInterval(puke, 20000));
    };
};

//create new Tamagotchis
var tamagotchi001 = new Tamagotchi();
var tamagotchi002 = new Tamagotchi();

var tamagotchi003 = new Tamagotchi('Franci','babybat');
var tamagotchi004 = new Tamagotchi('Donku', 'sylphi');

var tamagotchi005 = new Tamagotchi('Frankie','cacodemon');
var tamagotchi006 = new Tamagotchi('Izzy', 'imp');

var tamagotchi007 = new Tamagotchi('Igor', 'imp');

//test out your Tamagotchies below via console.logs
console.log(tamagotchi001);
console.log(tamagotchi002);

tamagotchi001.cry();
tamagotchi002.cry();

tamagotchi003.cry();
tamagotchi004.cry();

tamagotchi005.puke();
tamagotchi006.yawn();
