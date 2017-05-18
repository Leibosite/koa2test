"use strict"
/**
 * Copyright Tagtic
 * Created by leibosite
 * CreateTime: 17/5/17
 * desp: 字符串的压缩 yymmyyxxx --> 2y2m2y3x
 */

function zipString(str){
    var count = 1;
    var s = str[0];
    var newStr = '';
    for(let i = 1;i<str.length;i++){

        if(s === str[i]) count++;
        else {
            if(count > 1) newStr += count+s;
            s = str[i];
            count = 1;
        }
    }
    if(count > 1) newStr += count+s;
    return newStr;
}

console.log(zipString('yymmyyxxx'));