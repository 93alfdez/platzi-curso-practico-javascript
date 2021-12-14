function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;

    // Método 1
    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    // Método 2
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );


const promedioLista = sumaLista / lista.length;
return promedioLista;
}