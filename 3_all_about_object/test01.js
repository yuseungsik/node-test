function solution(X, Y) {
    let listX =[];
    let listY =[];
    let intersection=[];
    var answer = '';
    while(X>0) {
        listX.unshift(X%10);
        X = Math.floor(X/10);
    }

    while(Y>0) {
        listY.unshift(Y%10);
        Y = Math.floor(Y/10);
    }


    for(let i=0; i<listX.length; i++) {
        if(listY.includes(listX[i])===true ) {
            
            intersection.push(listX[i]);
            listY.splice(listY.indexOf(listX[i]),1);

        }
    }

    if(intersection.length===0) {
        return '-1';
    }

    intersection.sort(function(a, b)  { //내림차순 정력
        return b - a;
      });

    if(intersection[0]===0) {
        return '0';
    }

    for(let i=0; i<intersection.length; i++) {
        answer+= intersection[i];
    }

    return answer;
}

console.log(solution(100,123450));