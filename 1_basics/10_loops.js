/**
 * Loops
 * 1) for
 * 2) while
 */

for(let i=0; i<10; i++) {
    console.log(i);
}

for(let i=0; i<3; i++) {
    for(j=3; j>0; j--) {
        console.log(i,j);
    }
}
console.log('-----------------');
// *을 이용해서 6x6 정사각형 출력
let square = '';
let side = 6;
for(let i=0; i<side; i++) {
    for(let j=0; j<side; j++) {
        square += '*';
    }
    square +='\n';
}

console.log(square);
console.log('--------------');

let pyramid ='';
let stairs = 5;
for(let i=0; i<stairs; i++) {
    for(let j=0; j<=i; j++) {
        pyramid +='*';
    }
    pyramid += '\n';
}
console.log(pyramid);
console.log('--------------');

/**
 * for...in loop --> key가 나옴
 * for...of loop --> value가 나옴
 */

// whie loop
let number = 0;
while(number < 10) {
    number++;
}

/**
 * break --> loop을 아예 탈출
 * continue --> 현재진행중인 loop만 생략
 */

