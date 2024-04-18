/**
 * Using function to create objects
 * 원래 원시적인 객체생성방법
 */

function IdolModel(name,year) { //생성자 함수

    if(!new.target) {   // 객체생성시 new 안붙였을때 자동으로 new 붙여줌.
        return new IdolModel(name,year);
    }
    this.name = name;
    this.year = year;

    //함수 추가
    this.dance = function() {
        return `${this.name} is ${this.year} year's old.`;
    }
}

const me = new IdolModel('YU',1999);    // 생성자함수 호출시 new 필수
console.log(me);
console.log('-------------------');
//console.log(me.dance());
const me2 = IdolModel('PARK',2003); // 생성자 함수로 설정 안됨
console.log(me2);
console.log('-------------------');

//console.log(global.name);

// using arrow to create initiate model

// const IdolModelArrow = (name,year)=>{
//     this.name = name;
//     this.year = year;
// };

// const me3 = new IdolModelArrow('LEE',2000);
// console.log(me3);

