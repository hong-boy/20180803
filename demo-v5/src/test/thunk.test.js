// thunk是一种思想，是“call by name”思想的一种实现方式。
// 特点：任何一个形如fn(...args, callback)的函数，都可以被包装为thunk函数（最后一个参数一定是回调函数）

function test(x, y, callback){
    callback(x, y);
}

function Thunk(fn){
    return function(...args){
        return function(callback){
            return callback.call(this, ...args, callback);
        };
    };
}

const thunk4Test = Thunk(test);
thunk4Test(1, 2)(console.log);

