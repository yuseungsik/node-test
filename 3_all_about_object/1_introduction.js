/**
 *  All about objects
 * 
 * 객체 선언시 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class and OOP
 * 3) function을 사용해서 객체생성
 */

// 1번 방법 - object를 생성해서 객체 생성
const me = {
    name : 'YU',
    year : 1999,
};
console.log(me);
console.log('------------------');

// 2번 방법 - class를 인스턴스화해서 생성
class Human{
    name;
    year;

    constructor(name,year) {
        this.name = name;
        this.year = year;
    }
}

const me2 = new Human('YU',1999);
console.log(me2);
console.log('------------------');

// 3번 방법 - function을 사용해서 객체생성 --> 생성자함수
function HumanFunction(name,year){ // function 내에서 this 사용가능함.
    this.name = name;
    this.year = year;
}

const me3 = new HumanFunction('YU',1999);
console.log(me3);
console.log('------------------');