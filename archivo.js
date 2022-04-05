
const arrayCervezas = [];
//CREAMOS CLASS PARA CREAR OBJETOS 
class EstilosCerveza {
    constructor(estilo, graduacionAlcoholica, color, sabor, precio ){
      this.estilo = estilo;
      this.graduacionAlcoholica = graduacionAlcoholica;
      this.color = color;
      this.sabor = sabor;
      this.precio = precio;
    }
} 

const estilo = new EstilosCerveza  ("IPA","6%", "Rubia", "Citrica/Amarga" , 650); 
arrayCervezas.push(estilo);
const estilo1 = new EstilosCerveza ( "PORTER", "5%", "Negra", "Malta-Tostada", 450);
arrayCervezas.push(estilo1);
const estilo2 = new EstilosCerveza ( "IRISH", "5%", "Roja", "Leve-Dulzor", 500);
arrayCervezas.push(estilo2);
const estilo3 = new EstilosCerveza ( "DUVEL", "8.5%", "Dorada", "Amargor-Sutil", 600);
arrayCervezas.push(estilo3);

console.log("Estilos de Cerveza que tenemos");
for (let varios of arrayCervezas) {
    console.log(varios.estilo);
} 
let malEntrada = false;
let seleccion = prompt("¿Que estilo quiere elegir?");
for (let varios of arrayCervezas) {
    if(seleccion.toUpperCase() == varios.estilo){
        malEntrada = true;
        alert("El precio es de: $" + varios.precio);
        alert("Y el sabor es "+ varios.sabor);
        alert("Te voy a dar una opcion de que agregues otro estilo")
        const estilo4 = new EstilosCerveza (prompt("Ingrese un estilo que a usted le guste"));
        arrayCervezas.push(estilo4);
        
        console.log(arrayCervezas);
    } }
if (malEntrada != true){
    alert("Ese estilo no esta en nuestro catalogo");
    const estilo4 = new EstilosCerveza (prompt("Ingrese otro estilo que no este en nuestro catalogo"));
arrayCervezas.push(estilo4);
console.log(arrayCervezas);
}
