
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
        "Elegi un producto: \n1- Campera argentina. \n2- Pantalon de boca. \n3- Visera lacoste. "
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
            let visera = 9500;
            alert("El precio de la visera es " + visera);
            plandePago(9500, " Visera lacoste ");
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

    
    if (confirm("Gracias por tu compra " + usuario + ". ¿Deseas ver nuestros proximos lanzamientos?")) {
        proximoLanzamiento();
    } else {
        
        alert("Gracias por tu compra. ¡Hasta pronto!");
    }
}



if (ingresar) {
    realizarCompra();
} else {
    alert("Cuenta suspendida por 5 dias.");
}
ingreso();


function proximoLanzamiento(){

    let mostrarCategoria = prompt("¿De de categoria te gustaria ver el proximo lanzamiento?");

const categorias = [
    {
        nombre:"Campera de river dama",
        categoria:"dama",
    },

    { 
        nombre:"Conjunto de racing",
        categoria:"deportivo",

    },

    {
        nombre:" Visera polo ralph",
        categoria:"vintage",
    },

    {
        nombre:"zapatillas adidas",
        categoria:"caballero",
    }

]   
    const categoriaFind = categorias.find ((el)=> el.categoria == mostrarCategoria.nombre);

    alert('Resultado del proximo lanzamiento es' + JSON.stringify(categoriaFind));

} 
proximoLanzamiento();















