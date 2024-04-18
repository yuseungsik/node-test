/**
 * Inheritance (상속) - 공통되는 데이터 정리
 */

class IdolModel{    // super class
    name;
    year;

    constructor(name,year) {
        this.name = name;
        this.year = year;
    }
}

class FemIdolModel extends IdolModel {  // child class
    dance(){
        return `${this.name} is a female dancer.`;
    }
}

class MalIdolModel extends IdolModel {  // child class
    sing() {
        return `${this.name} is a male singer.`;
    }
}

const f1 = new FemIdolModel('Yura',2003);
console.log(f1);
console.log('-----------------------');

const m1 = new MalIdolModel('Jimin',1995);
console.log(m1);
console.log('-----------------------');

console.log(f1.dance());
console.log(f1.name);
console.log('-----------------------');

console.log(m1.sing());
console.log(m1.name);
console.log('-----------------------');

console.log(f1 instanceof IdolModel);


