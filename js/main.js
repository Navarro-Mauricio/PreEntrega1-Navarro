
let precio4 = 150;
let precio6 = 170;
let precio8 = 190;
let precio = 0;
let precioSinDesc = 0;
let nuevoPrecio = 0;
let descuento = 0;
let total = 0;
let siNo = "si";
let promo = 0;
let nombre = prompt("Bienvenido a Sebs Calcos, ingrese su nombre para continuar.");


function calcPrecioDesc(cantidadStickers) {
    precioSinDesc = precio * cantidadStickers
    nuevoPrecio = (precioSinDesc - (precioSinDesc * descuento));
}

function calcPrecioSinDesc(cantidadStickers) {
    nuevoPrecio = cantidadStickers * precio;
}

function calcTotal() {
    total = total + nuevoPrecio;
}
function alSinDesc() {
    alert(`Lo agregado sería $${nuevoPrecio} y no cuenta con ningún descuento`);
}

function alDesc(tamano) {
    alert(`El precio de lo agregado es $${nuevoPrecio}, y se le aplicó un descuento del ${descuento * 100}% ($${precioSinDesc - nuevoPrecio}) por llevar ${promo} o mas Stickers de ${tamano}cm.`);
}


function agregar() {
    siNo = prompt(`Desea agregar mas productos? (Escriba si o no)`).toLowerCase();

    while (siNo !== "si" && siNo !== "no") {
        alert("Escriba si o no por favor.")
        siNo = prompt(`Desea agregar mas productos? (Escriba si o no)`).toLowerCase();
    }

    while (siNo == "si") {
        Prinicipal();
    }
    if (siNo == "no") {
        alert(`Tiene que abonar $${total}. Gracias por su compra`)
    }
}

function cantPromo(tamano) {
    if (descuento == 0.1) {
        if (tamano == 4) {
            promo = 100;
        }
        else if (tamano == 6) {
            promo = 60;
        }
        else if (tamano == 8) {
            promo = 40;
        }
    }

    else if (descuento == 0.4) {
        if (tamano == 4) {
            promo = 200;
        }
        else if (tamano == 6) {
            promo = 120;
        }
        else if (tamano == 8) {
            promo = 80;
        }
    }

}


function Prinicipal() {

    let cantidadStickers = Number(prompt(`Hola ${nombre}, ingresá la cantidad de Stickers que quieras comprar.`));
    while (cantidadStickers <= 0) {
        alert("ingrese un número mayor a 0 por favor")
        cantidadStickers = Number(prompt(`Hola ${nombre}, ingresá la cantidad de Stickers que quieras comprar.`));
    }
    let tamano = Number(prompt("De que tamaño los quiere? Ingrese solo el número (4cm, 6cm u 8cm)."));
    while (tamano != 4 && tamano != 6 && tamano != 8) {
        alert("ingrese 4, 6 u 8")
        tamano = prompt("De que tamaño los quiere? Ingrese solo el número (4cm, 8cm o 6cm).");
    }

    if (tamano == 4) {
        precio = precio4
    }

    else if (tamano == 6) {
        precio = precio6
    }
    else {
        precio = precio8
    }

    if ((1 <= cantidadStickers && cantidadStickers < 100 && tamano == 4) ||
        (1 <= cantidadStickers && cantidadStickers < 60 && tamano == 6) ||
        (1 <= cantidadStickers && cantidadStickers < 40 && tamano == 8)) {

        calcPrecioSinDesc(cantidadStickers);
        calcTotal();
        alSinDesc();
        agregar();


    }

    else if ((100 <= cantidadStickers && cantidadStickers < 200 && tamano == 4) ||
        (60 <= cantidadStickers && cantidadStickers < 120 && tamano == 6) ||
        (40 <= cantidadStickers && cantidadStickers < 80 && tamano == 8)) {
        descuento = 0.1;
        calcPrecioDesc(cantidadStickers);
        calcTotal();
        cantPromo(tamano);
        alDesc(tamano);
        agregar();
        
    }


    else if ((cantidadStickers >= 200 && tamano == 4) ||
        (cantidadStickers >= 120 && tamano == 6) ||
        (cantidadStickers >= 80 && tamano == 8)) {
        descuento = 0.4;
        calcPrecioDesc(cantidadStickers);
        calcTotal();
        cantPromo(tamano);
        alDesc(tamano);
        agregar();
        
    }

}


Prinicipal();

