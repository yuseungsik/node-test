/**
 * Getter and Setter
 */

class IdolModel {
    name;
    year;

    constructor(name,year) {
        this.name = name;
        this.year = year;
    }

    /** getter의 역할
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     * point는 getter은 함수가 아님. 인스턴스에서 그냥 key값처럼 사용하기 위함.
     * 
     */
    get nameAndYear() { // 꼭 return 필요!
        return `${this.name}-${this.year}`;
    }

    /** setter의 역할 - 값을 새로 저장할 때 (getter와 반대)
     * 
     */
    set name(name){ // setter은 무조건 parameter 1개를 받아야함
        this.name = name;
    }
}

const me = new IdolModel('YU',1999);
console.log(me);
console.log(me.nameAndYear);
console.log('--------------------');

me.name = 'CHANGE_NAME'; // setter 이용해서 이름변경
console.log(me);
console.log(me.nameAndYear);
console.log('--------------------');

// getter와 setter가 정말 필요할 때의 예시
class IdolModel2 {
    #name;
    year;

    constructor(name,year){
        this.#name = name;  // JS에서 '#'은 private 의미함.
        this.year = year;
    }

    get name(){ // 보통 get과 set의 이름은 똑같이 짓는 경우가 많음.
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const park = new IdolModel2('PARK',2003);
console.log(park);  // name property가 private이기 때문에 출력안됨.
console.log(park.name);
console.log('--------------------');

park.name = 'Changed_PARK';
console.log(park);
console.log(park.name);
console.log('--------------------');