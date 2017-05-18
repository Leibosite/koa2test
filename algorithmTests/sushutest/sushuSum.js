
function prime(num) {
    
    var i , j, arr = [];
    for(i = 2;i < num;i++){
        for(j = 2; j < i;j++){
            if(i % j === 0) break;
        }
        if(i === j) arr.push(i);
    }

    return arr.filter(function (key) {
        return key>=6;
    });
}

function main(num) {
    var arr = {};
    var primeArr = prime(num);
    console.log(primeArr);
    for(let i=0;i<primeArr.length-1;i++){
        for(let j = i + 1;j<primeArr.length;j++){
            var sum = primeArr[i]+primeArr[j];
            if(sum % 2 === 0) arr[sum] = 1;
        }
    }

    return arr;
}

var arr = main(20);
console.log(arr);