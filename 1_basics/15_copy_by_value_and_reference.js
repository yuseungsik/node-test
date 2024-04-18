/**
 * copy by value : 값에 의한 전달
 * copy by reference : 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference
 */

// Copy by value
let original = 'Hi';
let clone = original;

console.log(original);
console.log(clone);
console.log('------------------------');

clone += ' + Hello';
console.log(original);
console.log(clone);
console.log('------------------------');

// Copy by reference
let originalObj = {
    name : 'YU',
    age : 25
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);
console.log('------------------------');

originalObj['age'] = 1000;   // originalObj 에서 값 변경
console.log(originalObj);
console.log(cloneObj);

console.log('------------------------');
console.log(originalObj === cloneObj);
console.log(original === clone);

console.log('------------------------');

/**
 * Spread operator --> copy by value임
 * 따라서 spread operator 을 사용하면 값만 복사하고 memory영역을 다르게 사용가능!!
 * 
 */

const originalObj2 = {
    ...originalObj,
};
console.log(originalObj2);
console.log(originalObj === originalObj2);