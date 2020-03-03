console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi{
    constructor(){
      this.foodInTummy = 10;
      this.restedness = 10;
      this.health = 10;
    }
  
    cry(){
      this.foodInTummy--;
      console.log('current food in tummy: ' + this.foodInTummy);
      console.log("WAHH!!!");
    };
  };

//create new Tamagotchis


//test out your Tamagotchies below via console.logs
