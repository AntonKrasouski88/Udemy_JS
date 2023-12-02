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
 