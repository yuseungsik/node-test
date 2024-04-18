/**
 * Immutable Object
 */

const me = {
    name : 'YU', // 이런거 하나하나가 property
    year : 1999,

    get age() {
        return  new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};

console.log(me);

/**
 * Extensible : 확장이 가능한지 여부를 우리가 설정할 수 있음.
 */
console.log('----------Extensible------------');
console.log(Object.isExtensible(me));   // true

Object.preventExtensions(me);
console.log('----------------------');
console.log(Object.isExtensible(me));   // false --> 데이터 추가 불가능
// 하지만 삭제(delete)는 가능함


/**
 * Seal - 봉인 : 값(데이터)을 추가 불가능, 삭제(delete) 또한 불가능
 */
const me2 = {
    name : 'YU', // 이런거 하나하나가 property
    year : 1999,

    get age() {
        return  new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};
console.log('-----------Sealed-----------');
console.log(Object.isSealed(me2));  // false
console.log('----------------------');
Object.seal(me2);
console.log(Object.isSealed(me2));  // true

/**
 * Freezed - 동결시킴 : 읽기 외 모든 기능을 불가능하게 만듦.
 */
const me3 = {
    name : 'YU', // 이런거 하나하나가 property
    year : 1999,

    get age() {
        return  new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};
console.log('-----------Freezed-----------');
console.log(Object.isFrozen(me3));  // false
console.log('----------------------');
Object.freeze(me2);
console.log(Object.isFrozen(me2));  // true
