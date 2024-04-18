/**
 * Class keyword
 * class : 빵틀,  instance : 빵
 */

class IdolModel {
    name;   // class 내에 입력되어있는 함수와 변수를 property(속성) 이라함.
    year;

    constructor(a,b){ // 생성자(constructor)
        this.name = a;
        this.year = b;

    }

    sayName() { // method 정의하는법 : class 내에서 함수를 정의하는 것
        return `How are you? I'm ${this.name}.`;
    }
}



const no1 = new IdolModel('YU',1999);
console.log(no1);
console.log('------------------');

const no2 = new IdolModel('LEE',2001);
console.log(no2);
console.log('------------------');

const no3 = new IdolModel('PARK',2003);
console.log(no3);
console.log('------------------');

console.log(no2.sayName());
console.log('------------------');

console.log(typeof IdolModel);  // class 는 function 이다.
console.log(typeof no1); // class로 생성한 instance는 object 이다.

