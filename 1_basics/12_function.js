/**
 * Function --> very important
 */

// 2라는 숫자에 *10/ 2%3 스트링으로 변환후 반환
console.log((2*10/2%3).toString());
console.log('------------');

/**
 * DRY 를 지켜라!!
 * Don't Repeat Yourself
 * 코드 반복시키지 마라
 */

function calculate(number) {
    console.log((number*10/2%3).toString());
}

calculate(3);
console.log('------------');

/**
 * 함수에서 입력받는 값에 대한 정의는 parameter라고 한다
 * 실제 입력하는 값은 argument라고 한다
 */

// 함수에 dafault 값 넣기도 가능
function mult(x,y=10) {
    console.log(x*y);
}

mult(3,4);
mult(3);
console.log('------------');

// return 받기

function add(x,y) {
    return x+y;
}
const result1 = add(2,4);
console.log(result1);
console.log('------------');

// Arrow 함수
const mult2 = (x,y) => {
    return x*y;
}

console.log(mult2(3,4));
console.log('------------');

const mult3 = (x,y) => x*y;
console.log(mult3(7,4));
console.log('------------');

const mult4 = x=>y=>z=> `x:${x} y:${y} z:${z}`;
console.log(mult4(2)(5)(7));
console.log('------------');

function mult5(x) {
    return function(y) {
        return function(z) {
            return `x:${x} y:${y} z:${z}`;
        }
    }
}
console.log(mult5(2)(5)(7));
console.log('------------');

const multAll = function(...arguments) {
    return Object.values(arguments).reduce((a,b)=>a*b,1);

}
console.log(multAll(3,4,5,6));
console.log('------------');

// 즉시실행함수 immediately invoked function
(function(x,y) {
    console.log(x*y);
}) (4,5)
console.log('------------');

console.log(multAll instanceof Object);
// 함수는 Object다!
console.log('------------');

