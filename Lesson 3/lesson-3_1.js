let a = 2;
while (a <= 100) {
    let flag = 0;
    for (let i = 0; i <= a; i++) {
        if (a % i == 0) {
            flag++;
        }
    }
    if (flag < 3) {
        console.log(a);
    }
    a++;
}