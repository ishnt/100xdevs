function callbacker(a,b,callback){
    console.log(callback)
    return callback(a,b);
}

console.log(callbacker(4,5,function (a,b){
    return a+b;
}));