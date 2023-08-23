/*
let usuario = "carla1";
let pin = "12345";
let ingresar = false;

function ingreso() {
    for (let i = 2; i >= 0; i--) {
        let ingresoUSER = prompt("Ingresa tu usuario");
        let ingresoPIN = prompt("Ingresa tu PIN");

        if (ingresoUSER == usuario && ingresoPIN == pin) {
            alert("Bienvenida " + usuario);
            ingresar = true;
            break;
        } else {
            alert("Error este usuario no existe");
        }
    }
}

function realizarCompra() {
    let productos = prompt(
        "Elegi un producto: \n1- Campera argentina. \n2- Pantalon de boca. \n3- Zapatillas nike. "
    );

    switch (productos) {
        case "1":
            let campera = 7500;
            alert("El precio de campera argentina es " + campera);
            plandePago(7500, " Campera argentina ");
            break;

        case "2":
            let pantalon = 5000;
            alert("El precio del pantalon de boca es " + pantalon);
            plandePago(5000, " Pantalon de boca ");
            break;

        case "3":
            let zapatilla = 9500;
            alert("El precio de las zapatillas es " + zapatilla);
            plandePago(9500, " Zapatillas nike ");
            break;

        default:
            alert("Opcion invalida");
            break;
    }
}

function plandePago(precio, producto) {
    let total;
    const formadePago = prompt(
        "Como quiere pagar: \nEfectivo \nTransferencia \nDebito \nCredito "
    );

    switch (formadePago) {
        case "efectivo":
            total = precio;
            alert(`El total de ${producto}, en efectivo es de $${total}`);
            break;

        case "transferencia":
            total = precio - 200;
            alert(`El total de ${producto}, por transferencia es de $${total}`);
            break;

        case "debito":
            total = precio * 1.10;
            alert(`El total de ${producto}, por debito es de $${total}`);
            break;

        case "credito":
            const cuotas = parseInt(prompt("En cuantas cuotas: \n6 \n12 "));

            if (cuotas == 6) {
                total = precio / 6 + 2500;
                alert(`El total de ${producto}, en 6 cuotas es de $${total}`);
            } else {
                total = precio / 12 + 3500;
                alert(`El total de ${producto}, en 12 cuotas es de $${total}`);
            }
            break;
    }

    
    if (confirm("Gracias por tu compra " + usuario + ". ¿Deseas realizar otra compra?")) {
        realizarCompra();
    } else {
        
        alert("Gracias por tu compra. ¡Hasta pronto!");
    }
}

ingreso();

if (ingresar) {
    realizarCompra();
} else {
    alert("Cuenta suspendida por 5 dias.");
}
*/



let usuario = "carla1";
let pin = "12345";
let ingresar = false;

function ingreso() {
    for (let i = 2; i >= 0; i--) {
        let ingresoUSER = prompt("Ingresa tu usuario");
        let ingresoPIN = prompt("Ingresa tu PIN");

        if (ingresoUSER == usuario && ingresoPIN == pin) {
            alert("Bienvenida " + usuario);
            ingresar = true;
            break;
        } else {
            alert("Error este usuario no existe");
        }
    }
}


const productos = [
    {
        id: 1,
        nombre: "Campera de boca",
        talle: "M",
        estado: "Usado/como nuevo",
        medidas: "75cm ancho , 50cm largo",
        precio: 7500,
        categoria: "Club",
    },

    {
        id: 2,
        nombre: "Pantalon brasil",
        talle: "L",
        estado: "Nuevo",
        medidas: "54cm ancho , 70cm largo",
        precio: 12000,
        categoria: "Club",

    },

    {
        id: 3,
        nombre: "Visera polo ralph",
        estado: "Usado",
        detalles: "Los abrojos se desgastaron",
        precio: 6500,
        categoria: "Vintage",
    },

    {
        id: 4,
        nombre: "Chaleco nike",
        talle: "S",
        estado: "Usado/como nuevo",
        medidas: "50cm ancho , 60cm largo",
        precio: 1500,
        categoria: "Deportivo",
    }

]


let encontrado = parseInt(prompt('Ingrese el id del producto'))

const productoFiltrado= productos.find((el)=> el.id == encontrado)

alert('Resultado de tu busqueda' + JSON.stringify(productoFiltrado))


ingreso();




















