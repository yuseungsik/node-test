// Object 객체

// key : value pair
let yu = {
    name : 'YU',
    age : 25,
    play : function() {
        return `i am ${this.age} years old, i play soccer`; // 25라는 값이 중복됨
    }
};

console.log(yu);
console.log('-------------------');
console.log(yu.age);
console.log('-------------------');

const key = 'name';
console.log(yu[key]);

console.log('-------------------');
console.log(yu.play());

console.log('-------------------');

const nameKey = 'name';
const nameValue = 'YU';

const groupKey = 'group';
const groupValue = 'IVE';

const yu2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    play : function() {
        return `i am ${this.age} years old, i play soccer`; // 25라는 값이 중복됨
    }
};

// 존재하지 않는 key 넣으면 새로 생성됨
yu['height'] = '170cm';
console.log(yu);

/**
 * Object 특징 정리
 * 1) const로 선언할 경우 객체 자체를 변경할수는 없다.
 * 2) 객체 안의 property나 method는 변경가능함.
 */

// 모든 key 다 가져오기
console.log('-------------------');
console.log(Object.keys(yu));

// 모든 value 다 가져오기
console.log('-------------------');
console.log(Object.values(yu));

