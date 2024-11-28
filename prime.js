function checkPrime(num) {
    let i, flag = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        document.write(num + " is prime");
    else
        document.write(num + " is not prime");
}
var n=parseInt(prompt("enter number:"));
checkPrime(n);

