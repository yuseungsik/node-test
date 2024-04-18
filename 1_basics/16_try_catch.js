/**
 * try...catch : error를 '잡는데' 사용
 * 1) error 발생시킬때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */

function runner() {
    try{
        console.log('page1');
        //Error 일부로 유발, 그 아래로는 실행안됨.
        throw new Error('Page Not Found error 404!!!');
        console.log('page2');

    }catch(e){
        console.log('---inner catch---');
        console.log(e);

    } finally { // optional, 사용한다면 무조건 거쳐감
        console.log('---inner finally---');
    }
};

runner();