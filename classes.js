class animal{
    constructor(name,leg_count,tail){
        this.name=name;
        this.leg_count=leg_count;
        this.tail=tail;
    }
    static mytype(){
        console.log("hey static class here");
    }
    tails(){
        console.log("i have just "+this.tail+" tail.");
    } 
}

let dog=new animal("ink",4,10);
//dog.tails();#right
//dog.mytype();#wrong
//animal.mytype();#right
//animal.tails();#wrong
const date=new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());


