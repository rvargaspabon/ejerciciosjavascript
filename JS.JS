var num1 = 10
var num2 = 2

dividir = num1/num2

if (num1 != 0 && num2 != 0){
    console.log(dividir)
} else {
    console.log("No se puede realizar la división")
}


var num = 2
div = num % 2 

if (div == 0){
    console.log("Es par")  
} else {
    console.log("Es impar")
}

var edad = 19
var tributaria = 2500000

if (edad >= 19 && tributaria >= 2500000){
    console.log("Si debe pagar los impuestos")
} else {
    console.log("No debe pagar los impuestos")
}

var renta = 65420

if (renta < 10000){
    console.log("Debe pagar un impositivo de 5%")
} else if ( renta > 10001 && renta < 20001){
    console.log("Debe pagar un impositivo de 15%")
} else if( renta > 20001 && renta < 35001){
    console.log("Debe pagar un impositivo de 20%")
} else if( renta > 35001 && renta < 60001){
    console.log("Debe pagar un impositivo de 30%")
} else {
    console.log("Debe pagar un impositivo de 45%")
}

var peso = 80
var altura = 1.65

imc = peso / (altura)**2

if (imc<18.5){
    console.log("Su IMC es bajo de peso o delgadez")
} else if ( imc > 18.5 && imc < 24.9){
    console.log("Su IMC es saludable o normal")
} else if ( imc > 25.0 && imc < 29.9){
    console.log("Su IMC es Sobrepeso")
} else {
    console.log("SU IMC es Obesidad")
}

var num = 21
function mayor (num){
    if ( num > 9){
    console.log("Su variable es mayor o igual a 10")
    } else {
    console.log("Su variable es menor que 10")
    }

}

mayor(21)

var num = -52

if (num < 0){
    console.log("El numero es negativo")
} else if (num > 0){
    console.log("El numero es positivo")
} else {
    console.log("El numero es cero")
}

var num = 7

if (num == 1){
    console.log("El dia de la semana es el lunes")
} else if ( num == 2){
    console.log("El dia de la semana es el martes")
} else if (num == 3){
    console.log("El dia de la semana es el miercoles")
} else if (num == 4){
    console.log("El dia de la semana es el jueves")
} else if (num == 5){
    console.log("El dia de la semana es el viernes")
} else if (num == 6){
    console.log("El dia de la semana es el sabado")
} else if (num == 7){
    console.log("El dia de la semana es el domingo")
} else {
    console.log("No existe ese dia en la semana")
}

console.log("ana")