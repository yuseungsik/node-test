/**
 * Data Types
 * 6개의 Primitive Type과
 * 1개의 오브젝트 타입
 * 
 * Number
 * String
 * Boolean
 * undefined
 * null
 * Symbol
 * 
 * Object (객체)
 *  - Function
 *  - Array
 *  - Object
 */
const age = 26;
console.log(typeof age);
console.log('--------------');

const str = 'anywords?';
console.log(typeof str);
console.log('--------------');

/**
 * Template Literal
 * 1) new line -> \n
 * 2) tab -> \t
 * 3) 백슬래시 입력하고 싶다면 두번입력하면 됨
 */

const a = `이거는
내가 여기 치는 그대로 \\ 나온다
ㅋㅋㅋ`
console.log(a); 

console.log(`${str} haaaaa`);

const isTrue = true;
console.log(typeof isTrue);
console.log('--------------');

// Undefinde --> 사용자가 직접 값을 초기화하지 않았을때
let noInit;
console.log(noInit); 
console.log(typeof noInit);
console.log('--------------');

// null --> 개발자가 직접 입력
let init = null;
console.log(init); 
console.log(typeof init);
console.log('--------------');
// null 타입은 object 타입으로 인지됨.

//symbol 타입
// 유일무이한 값을 생성할때 사용
const test1 = '1';
const test2 = '2';
console.log(test1 === test2);
console.log('--------------');

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);

// Object 타입
// Map --> key:value pair
const dictionary = {
    red : '빨',
    orange : '주',
    yellow : '노'
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(typeof dictionary)
console.log('--------------');

// Array 타입
const array = [
    'a1','a2','a3'
]
console.log(array);

// Array 안에는 index 개념이 있다.
console.log(array[0]);
console.log(typeof array);
console.log('--------------');

// static typing --> 변수선언시 어떤 타입의 변수를 선언할 지 명시함
// dynamic typing --> 변수타입을 명시적 선언x 타입을 추론함
// JS 는 dynamic typing 이다.












