//Task leetcode: to be or not to be
var expect = function (val) {
    return {
        toBe: function (expected) {
            if (val !== expected) {
                throw new Error('Not Equal');
            }
            return true;
        },
        notToBe: function (expected) {
            if (val === expected) {
                throw new Error('Equal');
            }
            return true;
        },
    };
};


 expect(5).toBe(5); // true
 expect(5).notToBe(5); // throws "Equal"
 
var createCounter = function(init) {
    let a = init;
    return {
        "increment": function () {
            return ++a;
        },
        "decrement": function () {
            return --a;
        },
        reset: function () {
            a = init
            return a
        }
}
};

const counter = createCounter(5)
console.log(counter.increment()); //6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

//Task leetcode: 2635. Apply Transform Over Each Element in Array
var map = function(arr, fn) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i))
    }
    return newArr
};