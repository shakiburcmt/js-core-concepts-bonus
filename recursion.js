let sum = 0;
for (let i = 5; i >= 1; i--) {
    sum = sum + i;

}
console.log(sum);


function summation(a) {
    if (a == 1) {
        return 1;
    }
    return a + summation(a - 1);
}
const vb = summation(10);
console.log(vb);


// factorial using recursive function
function factorial(number) {
    if (number == 1) {
        return 1;
    }
    return number * factorial(number - 1);
}
const num = factorial(5);
console.log(num);

function compare(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}
const result = compare(25, 25);
console.log(result);


// recursion again practice
function recursion(number) {
    if (number == 1) {
        return 1;
    }
    // recursion is here
    return number * recursion(number - 1);
}
console.log(recursion(4));