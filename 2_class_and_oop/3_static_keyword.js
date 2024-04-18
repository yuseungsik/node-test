/**
 * Static Keyword
 * static은 class에 직접 귀속된다. = new 키워드 쓸필요가 없다.
 */

class IdolModel {
    name;
    year;
    static home = 'Seocheon';

    constructor(name,year) {
        this.name = name;
        this.year = year;
    }
}

const me = new IdolModel('YU',1999);
console.log(me);
console.log(IdolModel.home);

/**
 * Factory constructor - 좀더 학습 필요
 */

class Idol{
    name;
    year;

    constructor(name,year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) {
        return new Idol(
            object.name,
            object.year,
        );
    }
}

const yu = Idol.fromObject({
    name : 'YU',
    year : 1999
});
console.log('----------------');
console.log(yu);