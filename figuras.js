//Código del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

// console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " cm");

function areaCuadrado (lado) {
    return lado * lado;
}

// console.log("El área del cuadrado mide: " + areaCuadrado + " cm^2");

console.groupEnd();


//Código del triángulo

console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");

// console.log("La altura del triángulo mide: " + alturaTriangulo + " cm");


// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo mide: " + perimetroTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo mide: " + areaTriangulo + " cm^2");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


console.groupEnd();


//Código del círculo

console.group("Círculos");

// Radio

// const radioCirculo = 4;
// console.log("El rádio del círculo mide: " + radioCirculo + " cm");


// Diámetro

// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo mide: " + diametroCirculo + " cm");

function diametroCirculo(radio) {
    return radio * 2;
}

// PI

const PI = Math.PI;
// console.log("PI es: " + PI + " cm");


// Circunferencia

// const perimetroCirculo = diametroCirculo * PI;
// console.log("La circunferencia del círculo mide: " + perimetroCirculo + " cm");

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Área

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo mide: " + areaCirculo + " cm^2");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}



console.groupEnd();