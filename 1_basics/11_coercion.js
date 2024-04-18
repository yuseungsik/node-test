/**
 * 타입변환 (Type conversin)
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
console.log('---------------');
let test = age + '';
console.log(typeof test, test);
console.log('---------------');

// 암묵적 (너무 어이없음..ㅋㅋ)
console.log('98'+2);
console.log('98'*2);
console.log('98'-2);

/**
 * 명시적 변환 몇가지 더 배우기
 */

// 숫자로 변환
// paresInt, paresFloat
console.log(typeof parseInt('0'), parseInt('0'));
console.log('------------------');

// Boolean 타입으로의 변환
console.log(!'x');
console.log(!!'x');
console.log('------------------');
console.log(!!'');
console.log(!!0);
console.log(!!'0');
console.log(!!undefined);
console.log(!!null);
console.log('------------------');

console.log(!!{});
console.log(!![]);
/** 정리
 * 1) 아무 글자도 없는 String 은 false
 * 2) 값이 없는 경우 false
 * 3) 숫자 0 은 false
 * 
 * 4) 딕셔너리, 어레이 모두 기본적으로 true
 */







