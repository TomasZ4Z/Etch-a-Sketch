//Crea una página web con una cuadrícula de 16x16 de divs cuadrados.

//Crea los divs con JavaScript. ¡No intentes crearlos manualmente copiándolos
//  y pegándolos en tu archivo HTML!

//Lo mejor es colocar los cuadrados de la cuadrícula dentro de un div contenedor. Este div se puede escribir en el archivo HTML.

//Usa Flexbox para que los divs aparezcan como una cuadrícula 
//(en lugar de uno solo en cada línea). A pesar del nombre, no te sientas 
//tentado a investigar ni a usar CSS Grid, ya que lo enseñaremos en una lección
 //posterior, después de la ruta de fundamentos. ¡Este proyecto es una oportunidad
  //específica para practicar Flexbox!

function removerDiv(){
eliminar = document.querySelector("#screen")
cuadrado = eliminar.querySelectorAll("div")

cuadrado.forEach(div => { 
div.remove()
});
}

function myNewDiv() {
  screen = document.querySelector("#screen") 
for (i=0;i<value;i++){
let chart1 = document.createElement("div")

for (a=0;a<value;a++){
let chart = document.createElement("div")
chart.classList.add("square")
chart.textContent = ""
chart1.appendChild(chart)
}
screen.appendChild(chart1)
}

}








let value = 16
const ok = document.querySelector("#pressMe")
ok.addEventListener( "click", () => {




 value = prompt("me gusta el chori")

value = Number(value)



if (isNaN(value)) {
alert ("usa solo numeros")
}
else if (value > 100) {
alert ("no uses numeros por encima de 100 ")
value = 0
}

removerDiv()
myNewDiv()

})


/* Configura un efecto de desplazamiento para que los divs de la cuadrícula cambien de color al pasar el ratón sobre ellos, dejando un rastro (pixelado)
 en la cuadrícula como si fuera un bolígrafo.
Consejo: El desplazamiento ocurre cuando el ratón entra en un div y termina cuando lo abandona. Puedes configurar detectores de eventos para 
cualquiera de estos eventos como punto de partida.
Hay varias maneras de cambiar el color de los divs, incluyendo:
Añadir una nueva clase al div.
Cambiar el color de fondo del div usando JavaScript.Configura un efecto de desplazamiento para que los divs de la cuadrícula cambien de color
 al pasar el ratón sobre ellos, dejando un rastro (pixelado) en la cuadrícula como si fuera un bolígrafo.
Añadir una nueva clase al div.
 Cambiar el color de fondo del div usando JavaScript.*/


 const mouse = document.querySelectorAll(".square")
mouse.forEach(square => {
 square.addEventListener("mouseover", () => {
 square.style.backgroundColor = "red"
 });

 })

// crear un boton que haga la funcion de generar cuadrados y que a su vez se puede alterar la cantidad de cuadrados que recibe en base al numero del usuario


