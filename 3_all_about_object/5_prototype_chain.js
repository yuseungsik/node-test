/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 가으이에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);
console.log('------------------');

function IdolModel(name,year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);   // {} -->
console.log('------------------');
console.dir(IdolModel.prototype, {  // 숨겨져 있는 값 확인
    showHidden: true,
});
