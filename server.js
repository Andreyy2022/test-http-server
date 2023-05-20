export default {
    '/handler/': function({get}) {
    console.log(get);

    let sum = 0;
    sum += +num1 + +num2 + +num3;
    return sum;
    }
}