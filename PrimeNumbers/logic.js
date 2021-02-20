// whether a num is prime number
function isPrime(num) {
    if (num < 2) return false;
    var flag = true;
    for (var probe = 2; probe <= (num / 2); probe++) {
        if (num % probe == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
// generate all numbers
function genAll() {
    for (var i = 1; i <= 100; i++) {
        if (isPrime(i)) {
            document.write(`<div class=\"yes\" id=\"${i}\">${i}</div>`);
        } else {
            document.write(`<div class=\"no\" id=\"${i}\">${i}</div>`);
        }
    }
}
genAll();