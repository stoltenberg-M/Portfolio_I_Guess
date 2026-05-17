let x = 5
//der bliver sagt at x er det samme som 5
let y = 7
//der bliver sagt at y er det samme som 7
let resultat
//der bliver laver en ukendt variabel
resultat=--x;
//variablen bliver defineret som 5-1
console.log(resultat)
//der bliver sagt vis variablen som er 4
resultat=x++;
//variablen bliver defineret som 5+1
console.log(resultat)
//der bliver sagt vis variablen som er 6
resultat=y*(x++);
//variablen bliver defineret som 7*6
console.log(resultat)
//der bliver sagt vis variablen som er 42
resultat=x**((y--)-4)
//variablen bliver defineret som 5^(7-1)-4
console.log(resultat)
//der bliver sagt vis variablen som er 25
resultat+=(resultat%(x**2))
//variablen bliver defineret som x = x + 5^2
console.log(resultat)
//der bliver sagt vis variablen som er 0
