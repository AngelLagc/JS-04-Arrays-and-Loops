// Ejercicio #1
// Part 1
let fila = ["Sofia", "David", "Juan"];
console.log(fila);

// Part 2
fila.push("Sara", "Agustin");
fila.shift();
console.log(fila);


// Part 3
fila.splice(1, 0, "Renata");
fila.push("Elena");
console.log(fila);

// Ejercicio #2
    for (let i = 0; i < 5; i++) {
      let signo = '';
      for (let a = 0; a < i + 1; a++) {
        signo = signo + '*';
      }
      console.log(signo)
    }

// Ejercicio #3
// Part 1 
let x = parseInt(prompt("Ingresa valor x"));

while(x > 0.5){
    if (x == isNaN){
        alert ("Ingresa un número positivo");
        let x = parseInt(prompt("Ingresa valor x"));
    }else if(x <= 0){
        alert ("Ingresa un número positivo");
        let x = parseInt(prompt("Ingresa valor x"));
    }else{
        let res = x - 0.5;
        console.log(res);
        x = res 
    }
}
while(x > 0.5){
    let res = x - 0.5;
        console.log(res);
        x = res 
}

// Part 2
let i = 0
while (i < 100){
    i ++
    if (i%2 == 0){
    }else{
        console.log(i);
    }
}

// Part 3
let n = 6;
let a = 0;
while (a < n){
    a++
    console.log(`[${a}]`)
}

// Part 4
let z = 4;
let y = 0;
let sum = 0;
        while(y < z){
            y++
            sum = y + sum
        }
        console.log(sum)
