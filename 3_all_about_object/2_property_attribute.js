/**
 * Property Attribute --> 어려움 다시 공부 필수
 * 
 * property --> 2가지 종류로 나뉨
 * 1) 데이터 property - 키와 값으로 형성된 실질적 값을 갖고있음
 * 2) 엑세서 property - 자체적으로 값을 갖고있지 않지만 다른값을 가져오거나
 *                     설정할때 호출되는 함수로 구성된 프로퍼티
 *                     예를 들면 getter, setter
 */

const me = {
    name : 'YU', // 이런거 하나하나가 property
    year : 1999,
};

console.log(Object.getOwnPropertyDescriptor(me,'name'));
console.log(Object.getOwnPropertyDescriptor(me,'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을
 *               수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면
 *                 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false 일 경우 프로퍼티 삭제나 어트리뷰트
 *                   변경이 금지된다. 단, writable이 true인 경우
 *                   값 변경과 writable을 변경하는건 가능하다.
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
console.log('----------------------');
console.log(me2.age);

me2.age = 25;
console.log('----------------------');
console.log(me2.age);
console.log(me2.year);

// property attribute를 내가 수동으로 설정하고 싶을 때 방법.
Object.defineProperty(me2,'height',{
    value : 170,
    writable : true,
    enumerable : true,
    configurable : true,
});
console.log('----------------------');
console.log(me2);
console.log(Object.getOwnPropertyDescriptor(me2,'height'));



