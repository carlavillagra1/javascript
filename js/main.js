/*Mi idea es hacer un carrito de compras
1- que ingrese con el usuario  y pin. que permita 3 veces intentar.
2- que muestre producto con su precio y poder elegir uno.
que elijas la forma de pago 
    - Efectivo el  precio el es  mismo sin ningun recargo
    - Debito / transferencia   5% de recargo 
    - Credito 10% de recargo 
    mostrar "Gracias por su compra + usuario . El total es de + total" */

let usuario = "carla1";
let pin = "12345";
let ingresar = false;

function ingreso() {
    for (let i = 2; i >= 0; i--) {
        let ingresoUSER = prompt("Ingresa tu usuario");
        let ingresoPIN = prompt("Ingresa tu PIN");

        if (ingresoUSER == usuario && ingresoPIN == pin) {

            alert(" Bienvenida " + usuario);
            ingresar = true;
            break;
        } else {
            alert("Error este usuario no existe")
            
        }
    }

}
ingreso()

if (ingresar) {
    let productos = prompt("Elegi un producto: \n1- Campera argentina. \n2- Pantalon de boca. \n3- Zapatillas nike. ");

        switch (productos) {

            case "1":
                let campera = 7500;
                alert("El precio de campera argentina es " + campera);
                plandePago( 7500, " Campera argentina ");

                break;

            case "2":
                let pantalon = 5000;
                alert("El precio del pantalon de boca es " + pantalon);
                plandePago( 5000, " Pantalon de boca ");

                break;

            case "3":
                let zapatilla = 9500;
                alert("El precio de las zapatillas es " + zapatilla);
                plandePago( 9500, " Zapatillas nike ")

                break;

            default:
                alert("Opcion invalida");
                break;

        }
        productos = prompt(
            "Elegí un producto: \n1-Campera argentina.  \n2 - Pantalon de boca. \n3 - Zapatillas nike. ");
    
    
    

function plandePago(precio, producto) {
    let total;
    const formadePago = prompt("Como quiere pagar: \nEfectivo \nTranferencia \nDebito \nCredito ");

    switch (formadePago) {

        case "efectivo":
            total = precio;
            alert(`El total de ${producto}, en efectivo es de $${total}`);
            break;

        case "transferencia":
            total = precio - 200;
            alert(`El total de ${producto}, por tranferencia es de $${total}`);
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

            }
            else {
                total = precio / 12 + 3500;
                alert(`El total de ${producto}, en 12 cuotas es de $${total}`);
            }

            break;


    }
    
}
alert(" Gracias por tu compra " + usuario);
}
else{
    alert("Cuenta suspendida por 5 dias.");
    
}





























