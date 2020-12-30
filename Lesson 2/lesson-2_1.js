var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2, т.к с=(а=1+1)
d = b++; alert(d);           // 1, т.к d=b=1
c = (2 + ++a); alert(c);      // 5 т.к с=2+(а=2+1)
d = (2 + b++); alert(d);      // 4 т.к d=2+(b=2)
alert(a);                    // 3 a=2+1
alert(b);                    // 3 b=2+1
