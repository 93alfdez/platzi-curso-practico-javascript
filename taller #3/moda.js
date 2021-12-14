// const lista1 = [
//     1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1,
// ];

// const lista1Count = {};

// lista1.map(
//     function (elemento) {
//         if (lista1Count[elemento]){
//             lista1Count[elemento] += 1;
//         } else {
//             lista1Count[elemento] = 1;
//         }
//     }
// );

// const lista1Array = Object.entries(lista1Count).sort(
//     function (elementoA, elementoB) {
//         return elementoA[1] - elementoB[1];
//   }
// );

// const moda = lista1Array[lista1Array.length - 1];


function calcularModa(lista) {
    
    // const lista = [];

    const listaCont = {};

    const listaMapeo = lista.map(
            function (elemento) {
                if (listaCont[elemento]){
                    listaCont[elemento] += 1;
                } else {
                    listaCont[elemento] = 1;
                }
            }
        );
    
    const listaArr = Object.entries(listaCont).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
      }
    );

    const moda = listaArr[listaArr.length - 1];
}