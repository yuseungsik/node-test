/**
 * Array Functions
 */

let member = [
    'a',
    'b',
    'c',
    'd',
    'e'
]

console.log(member);
console.log('-----------------------');

// push() --> 마지막에 value 추가 후 array 길이 반환
member.push('ff');
console.log(member);
console.log('-----------------------');

// pop() --> 마지막 value 삭제 후 array 길이 반환

// shift() --> array의 첫번째값을 삭제 후 array 길이 반환
//unshift('값') --> array의 값을 첫번째에 추가 후 array 길이 반환

// splice(x,y) index x 부터 y만큼 삭제 후 반환 후
// 삭제된 원래 array를 반환

let members = [
    'a',
    'b',
    'c',
    'd',
    'e'
]

// concat()
console.log(members.concat('new'));
console.log(members); // concat 사용시 원래 array 변경x 
console.log('-----------------------');

// slice()
console.log(members.slice(0,3));
console.log(members); // slice 사용시 원래 array 변경x
console.log('-----------------------');

// spread operater (...) 하위 리스트를 벗겨내고 상위리스트에 넣음
let spr = [
    ...members,
];
console.log(spr);
console.log('-----------------------');

// join() --> comma 기준으로 모든 리스트 값을 합쳐 string 으로 반환
console.log(member.join('/'));

// sort() --> 오름차순 정렬
// reverse() -->

let numbers = [
    1,9,7,5,3
];
// sort() details : 
/**
 * when compare a and b,
 * 1) a 나중에 정렬(뒤에정렬하고 싶을때) --> 양수 반환
 * 2) a 먼저 정렬(앞에정렬하고 싶을때) --> 음수반환
 * 3) 원래 순서 그대로 두려면 0 반환 
 */
numbers.sort((a,b)=>{
    return a>b ? 1:-1;
});
console.log(numbers);
console.log('-----------------------');

numbers.sort((a,b)=> a>b ? -1:1);
console.log(numbers);
console.log('-----------------------');

// map() --> 모든 값을 순회, 조건에 맞춰 return
console.log(member.map((x)=>`spell: ${x}`));
console.log('-----------------------');

// filter() --> element 찾는기능 --> 조건이 true면 return
num = [1,8,7,6,3];
console.log(num.filter((x)=>true));
console.log('-----------------------');

console.log(num.filter((x)=>x%2===0));
console.log('-----------------------');

// find() --> element 찾는기능 --> 조건이 true면 return 중 딱 1개만 반환됨.
console.log(num.find((x)=>x%2===0));
console.log('-----------------------');

// findIndex() --> find()와 똑같은데 그 값 하나의 index를 반환

// reduce()
console.log(num.reduce((p,n)=>p+n,0));

