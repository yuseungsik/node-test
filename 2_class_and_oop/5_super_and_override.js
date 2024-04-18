/**
 * Super and Override
 */

class IdolModel {
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `Hi, I'm ${this.name} !!!`;
    }
}

class FemIdolModel extends IdolModel{
    part;   //ex. dance, 

    constructor(name,year,part) {
        // super class의 contructor를 받아옴.
        super(name,year); // this.name=name this.year=year 과 동일.
        this.part = part;
    }

    sayHello(){ // super.name 으로 쓰면 안됨! class내의 함수 내에서는 무조건 this 사용    
        //return `Hi, I'm ${this.name} and ${this.part} !!!`;
        return `${super.sayHello()} and ${this.part} !!!`;
    }
}

const f1 = new FemIdolModel('Yura',2003,'hiphop_dance');
console.log(f1);
console.log('-------------------------');

const f2 = new FemIdolModel('Lina',1998,'street_dance');
console.log(f2);
console.log(f2.sayHello());
console.log('-------------------------');