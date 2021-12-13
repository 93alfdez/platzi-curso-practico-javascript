// const precioOriginal = 100;
// const descuento = 15;

// const porcentajePrecioConDescuento = 100 - descuento;

// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

function CalcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
   
    return precioConDescuento;

}

function ButtonPrecioConDescuento() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = CalcularPrecioConDescuento(priceValue,discountValue);

    const ResultP = document.getElementById("ResultP");

    ResultP.innerText = "El precio con descuento son: " + precioConDescuento + " €";
}
// (precio * (100 - descuento)) / 100



function CalcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickPrecioDescuento() {
    const cupones = ["CODE10","CODE20","CODE30"];

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    let descuento;

    switch (cuponValue) {
        case "CODE10":
            descuento = 10;
            break;
        case "CODE20":
            descuento = 20;
            break;
        case "CODE30":
                descuento = 30;
                break;
        default:
            descuento = 0;
            break;
    }

    const precioConDescuento = CalcularPrecioConDescuento(priceValue,descuento);

    const ResultP = document.getElementById("ResultP");

    ResultP.innerText = "El precio con descuento son: " + precioConDescuento + " €";
}

