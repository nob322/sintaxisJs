/*        var miObjeto1 = {};
var miObjeto2 = {
    tipoString: "Esto es un texto maestro",
    tipoNumero: 2,
    tipoBooleano: true
};
var miObjetoConMetodo = {
    saludar: function saludar(){
        console.log("Hola loco!");
    }
};
var miObjetoConPropiedadMetodo = {
    metodo2: function vamosQpaasaa(){
    console.log("esto es el método 2 loco, y va re de primera")},
    propiedadDeAlgo: "esto es algo maestrooo",
    borrame: "Quiero ser borrado loco, dame caaaañaa"
};

console.log(miObjetoConPropiedadMetodo.borrame);
delete miObjetoConPropiedadMetodo.borrame;
console.log(miObjetoConPropiedadMetodo.borrame);

var objetoNuevoLoco = {
    diceAlgo: "Y bueno loco fue el Tolosa",
    funcionOne: function algoHara(){
        var mostralo1 = 10 + 91;
        console.log(mostralo1);
    }
}
var noseQpasa = {
    estoEsAlgo: "piriri",
    estoesOtraCosa: 121,
    estoEsFuncion: function oneDos(){
        console.log("muestro el console maestro y qué?")
    }
}
    
objetoNuevoLoco.funcionOne()
noseQpasa.estoEsFuncion()
console.log(noseQpasa.estoesOtraCosa)

var vamos = {
    auto: "Fiat",
    seMueve: function seMueveMucho(){
        console.log("el Fiat la rompe loco")
    }
}
console.log(vamos.auto)
vamos.seMueve()

var ySi = {
    preguntaUno: "sisi, tiene la guita el porra",
    preguntaDos: "No sabe naadaa el Tolosa loco",
    funcionUno: function funcionPrimera(){
        console.log("vamos a romperla porque es la que va")
    },
    funcionDos: function funcionSegunda(){
        console.log("No queda otra maestro")
    }
}
ySi.funcionUno()
ySi.funcionDos()
console.log(ySi.preguntaUno)
console.log(ySi.preguntaDos)

var objetoFinal = {
    miTexto: "y si loco, vamos a sumarle otro",
    miTexto2: " siiii, caañaa",
    mitexto3: "nooo",
    miNumber: 123456789,
    miFuncionalidad: function miFuncione(){
        let uno = 1;
        let dos = 2;
        console.log(uno + dos)
    }
}
console.log(objetoFinal.miTexto + objetoFinal.miTexto2)
objetoFinal.miFuncionalidad()

var estoEsAlgoGrande = {
    casita1: "roja",
    casita2: "verde",
    casita3: "amarilla",
    sePinta: function pintar(){
        console.log(estoEsAlgoGrande.casita1 + " " + estoEsAlgoGrande.casita2 +  " " + estoEsAlgoGrande.casita3 + " ");
    }
}
estoEsAlgoGrande.sePinta()

var mause = {
    boton1: "derecho",
    boton2: function botone2(){
        console.log("izquierdo")
    }
   
}
console.log(mause.boton1)
mause.boton2() */



/*    var objeto191 = {
   propiedad1: "Este es un texto maestro",
   propiedad2: "Este es un texto 2 maestro",
   propiedad3: "Este es un texto 3 master, maquiinola!",
   propiedad4: function propiedadFour(){
       console.log("lleva un texto y algo más ésta funcionalidad")
   }
}
objeto191.propiedad1 = "Este texto fue cambiado loco, y buueno"
console.log(objeto191.propiedad1)
objeto191.propiedad4()
delete objeto191.propiedad3;
console.log(objeto191.propiedad3)

function primerPaso(callback){
   console.log("Este es el primer paso loco")
   callback();
}
function segundoPaso(){
   console.log("Este es el segundo paso loco")
}
primerPaso(segundoPaso)
var estoEsObjeto = { 
   propiedadUno: "Propiedad Uno",
   propiedadDos: "propiedad Dos",
   propiedadTres: function propiedadTercera(){
       console.log("Esto es la propiedad tres y funciona")
   }
}
estoEsObjeto.propiedadUno = "Se cambio, y bueno es Js"
console.log(estoEsObjeto.propiedadUno)
delete estoEsObjeto.propiedadDos;
console.log(estoEsObjeto.propiedadDos)
estoEsObjeto.propiedadDos = 120 + " chorizos"
console.log(estoEsObjeto.propiedadDos) */


//     function estoEsWay(callback){
//         console.log("tiene flow loco")
//         callback()
//     }
//     function laLLevo(){
//         let uno = 1;
//         let dos = 2;
//         let suma = uno + dos;
//         console.log("Y bueno si loco, se puede " + suma )
//     }
//    estoEsWay(laLLevo)




//  funciones asincronicas 

/*     function traigoDatos(callback){
  //asincrona
  setTimeout( function(){
      console.log("bueno loco traigo los datos a los 5 segundos porque soy asincrónica")
  },5000 )
  callback();
}
function pintoDatos(){
  //no asincrona
  console.log("Muestro este mensaje ya que soy una función no asincrónica")
}
traigoDatos(pintoDatos); 
*/



//   arrays

var arreglo = [];
var arreglo1 = [1, "rrolinga loco", true, 120, 191, "pelao"]
console.log("Esto es " + arreglo1[3])
arreglo1[3] = "la he cambiado"
console.log(arreglo1[3])

var arregloNuevo = [12, 34, 345, 55, 345, 34, 55, 99, 91, 90]
arregloNuevo[9] = 999
console.log(arregloNuevo[9])

var nocheNo = [34, 345, false, 23, "más actividades", true, "fuerza"]
console.log(nocheNo[2])

var erraronJaja = ["polic", "Fafa", 321, 950, 789, true]
erraronJaja[0] = "faptoc"
console.log(erraronJaja[0])

var algoPorSacar = ["y bueno maestro", "sisi, fue el porra"]
algoPorSacar[0] = "y bueno maestro hay que darle pa deeelante"
console.log(algoPorSacar[0])

var objetoPotente = {
miPote1: "esto tiene flow",
miFunciona: function functione() {
    console.log("esta función tiene alta potencia loco")
},
miPote2: "sisi es del flower"
}
console.log(objetoPotente.miPote1)
objetoPotente.miPote1 = "esto está cambiado y es otra cosita"
console.log(objetoPotente.miPote1)

var estoEsUnArrayFlor = ["Yiyo", "Tolosa", "Porra", "Nopes"]
console.log(estoEsUnArrayFlor[0])
delete estoEsUnArrayFlor[0]
console.log(estoEsUnArrayFlor[0])

var otroArrayMas = [234, 546, 22, 11, 100]
var otroArrayMas2 = [55, 68, 90]
var otroMas = ["jepe", "tupac", "Nolo"]
var yBuenoLoco = [true, false]
console.log(otroArrayMas[3])
delete otroArrayMas[3]
console.log(otroArrayMas.length)
console.log(otroArrayMas[3])

var cadaDia = [291, 79, 21, 70, 7, 41, 71]
console.log(cadaDia.length)
for (var i = 0; i < cadaDia.length; i++) {
console.log(cadaDia[i] *= 10)
}
var mateo = {
matu: "esto es un maquinoolaa",
mate: function matuli() {
    console.log("vamos vamos go go")
}
}
console.log(Array.isArray(cadaDia))
console.log(Array.isArray(mateo))
console.log(cadaDia.sort())
cadaDia.reverse()
console.log(cadaDia)
var datosJuntosOseaCadena = cadaDia.join()
console.log(datosJuntosOseaCadena)
var multipleArray = [1, 20, 12]
var multipleArray2 = [99, 80, 41]
var multipleArray3 = [100, 200, 300]
var juntemosArrays = multipleArray.concat(multipleArray2, multipleArray3)
console.log(cadaDia.concat(otroMas))
console.log(juntemosArrays)
console.log(multipleArray.indexOf())
multipleArray.unshift("Default", "Venga", "vaamoos")
multipleArray.push("Nuevo elemento agregado loco")
multipleArray.pop()
multipleArray.shift()
multipleArray.splice(1, 2)
var rescatoDatosEliminados = multipleArray.splice(1, 2)
console.log(multipleArray)
var arrayOne = [1, 2, 3, 4, 5]
var arrayTwo = [6, 7, 8, 9, 10]
var arrayJuntos = [arrayOne, arrayTwo]
console.log(arrayJuntos[0][2])
var array1_1 = [1, 2, 3, 4, 5]
var array2_2 = [6, 7, 8, 9, 10]
var losJunto_ = [array1_1, array2_2]
console.log(losJunto_[0][3])
var arranoOne = ["a", "as", "das", "fire"]
var arranoTwo = ["sd", "rt", "pol", "up"]
var arranoThree = ["cha", "tolosa", "lale", "yulo"]
var arranoFour = ["lalo", "lolu", "dos", "nico"]
var lasFusiono = [arranoOne, arranoTwo, arranoThree, arranoFour]
console.log(lasFusiono[3][1])
var vamosConElNuevoArrayOne = ["ok no", "peque", "granula"]
var vamosConElNuevoArrayTwo = ["nolo", "Fb", "force"]
var vamosConElNuevoArrayThree = ["fale", "Tiago", "they"]
var vamosAdarleJuntar = [vamosConElNuevoArrayOne, vamosConElNuevoArrayTwo, vamosConElNuevoArrayThree]
console.log(vamosAdarleJuntar[2][0])
var estoEsOtroArray1 = ["meta", "gaucha", "eeepaa", "compadre"]
var estoEsOtroArray2 = ["goal", "efes", "etnac", "planeta"]
var juntoArrays = [estoEsOtroArray1, estoEsOtroArray2]
console.log(juntoArrays[0][2])
var seriaAbsuelto = [23, 11, 22, 140, 160]
var seriaLoco = [171, 220, 340, 3]
var fusionoTodo = [seriaAbsuelto, seriaLoco]
console.log(fusionoTodo[0][3])
var tolosaUno = [12, 32, 12, 44, 654, 54, 3, 23, 22, 21]
var tolosaDos = [100, 120, 25, 70, 61, 28, 34, 80, 90, 56]
var tolosaTres = [44, 500, 55, 487, 896, 874, 562, 145, 546, 87]
var tolosaCuatro = [545, 345, 233, 111, 1021, 487, 423, 112, 341, 900]
var losJuntoAtodos = [tolosaUno, tolosaDos, tolosaTres, tolosaCuatro]
console.log(losJuntoAtodos[3][9])
tolosaCuatro[9] = 999
console.log(losJuntoAtodos[3][9])
delete tolosaCuatro[9]
console.log(losJuntoAtodos[3][9])
console.log(tolosaCuatro.length)
tolosaCuatro[4] = undefined
var loGuarde = Array.isArray(tolosaCuatro)
console.log(loGuarde)
var loGuarde2 = tolosaCuatro.sort()
console.log(loGuarde2)
var reverse = tolosaCuatro.reverse()
console.log(reverse)
//bucles
var vuelta = 0;
while (vuelta <= 10) {
console.log(vuelta)
vuelta++ // vuelta = vuelta +1
}
var estoEsBucleolo = 0
while (estoEsBucleolo <= 5) {
console.log("Esto es algo sisi " + estoEsBucleolo)
estoEsBucleolo = estoEsBucleolo + 1
}

//otravezObjetos
let otroObjetoNuevo = {
color: "rojo",
color2: "verde",
color3: "amarillo",
pinta: function pintar() {
    console.log("esta función pinta de " + otroObjetoNuevo.color2)
}
}
otroObjetoNuevo.pinta()
console.log(otroObjetoNuevo.color3)
let otroMass = {
altura: 1.65,
altura2: 1.70,
altura3: 1.62,
altura4: 1.72,
altura5: 1.59,
medicion: function medidaOne() {
    let cerito = 0
    while (cerito <= 6) {
        console.log("Ésta vuelta del While vale: " + cerito)
        cerito = cerito + 1
    }
}
}
otroMass.altura2 = 1.71
console.log(otroMass.altura)
otroMass.medicion()
const lindoObjeto = {
propiedad1: "esto es el porra",
propiedad2: "esto es el tolosa",
propiedad3: "esto es el burgio",
propiedad4: "esto es el lirico",
propiedad5: "esto es el fernandez (tremendo chorro)",
declaracion: "el dictador Fernandez es un choro",
declaracion2: "la jefa de la banda es tremenda ladrona!",
accion1: function accioneOne() {
    console.log("vamos a saltar")
},
accion2: function accioneTwo() {
    console.log("vamos a bailar")
},
accion3: function accioneThree() {
    console.log("vamos a cantar")
},
accion4: function accioneFour() {
    console.log("tenemos el flow, vamos a demostrar")
},

}
console.log("venimos viendo " + lindoObjeto.propiedad2)
lindoObjeto.propiedad2 = "no debería cambiar"
console.log(lindoObjeto.propiedad2)
delete lindoObjeto.propiedad2
console.log(lindoObjeto.propiedad2)
if (lindoObjeto.propiedad5 === "") {
console.log("No tiene texto loco")
} else {
console.log("Está ok, tiene texto la propiedad 5 y dice --> " + lindoObjeto.propiedad5)
}

const vamosAbailar = [120, 20, 31, 56, 80, 90, 100, 110, 330, 321, 123, 45, 70, 80, 90]
console.log(vamosAbailar)
let estoEsUnaFuncion = Array.isArray(vamosAbailar)
if (estoEsUnaFuncion === true) {
console.log("Esto efectivamente fue válidado y es un array")
console.log("-Esto es algo genial-" + "\n" + vamosAbailar.join('\n'))
} else {
console.log("No es un array master")
}

var arranoMulti1 = ["this", "is", "Jeremy", "Olelo"]
var arranoMulti2 = ["Otelo", "not", "Jujey", "Ferchu"]
var arranoMulti3 = ["Fede", "le", "gran", "jujujujujo"]
var fusionemosArranosMultiFull = [arranoMulti1, arranoMulti2, arranoMulti3]
var evaluemosArrano = Array.isArray(fusionemosArranosMultiFull)
if (evaluemosArrano === true) {
console.log("Es un array y vamos a meter procedimiento")
fusionemosArranosMultiFull.shift() //toma cómo primer elemento el array0 y lo elimina
//lo eliminar
fusionemosArranosMultiFull.forEach(element => {
    console.log(element + "\n")

});


} else {
console.log("No contiene la palabra Fede")
}
var estoEsUnaVariable = ["this is a green hat","this is a ice cream","this is happy day"]
var vamosAtestearlo = Array.isArray(estoEsUnaVariable)
if (vamosAtestearlo == true) {
console.log("esto es un array David, muy bien")
} else {
console.log("No es un array, cuidado!")
}
let tenemosOtroObjeto = {
sisi: "y bueno maestro dale dale",
soso: "dale dale loco",
susu: "mi Dios nunca falla",
sasa: "grande es el poderoso de Israel",
sysy: "Jesús te ama David",
hago1: function hacemos(){
    console.log("vamos a pelear contra Satanás hoy, es buena idea en el nombre del Dios de Israel")
},
hago2: function hacemos2(){
    console.log("vamos a ganar almas para Cristo")
},
hago3: function hacemos3(){
    console.log("Dios no nunca falla")
},
hago4: function hacemos4(){
    console.log("Sólo Jesús es fiel")
}
}
let guardoUnObjeto = tenemosOtroObjeto.sysy
console.log(tenemosOtroObjeto.sisi)
delete tenemosOtroObjeto.soso
console.log(tenemosOtroObjeto)
tenemosOtroObjeto.susu = "mi Dios nunca falla y siempre es fiel, aunque el hombre no"
console.log(tenemosOtroObjeto.susu)
console.log(guardoUnObjeto)


//función asincrónica
function creoAsincronia(callback){
setTimeout(function(){
    console.log("Esto es una función asíncrona y se llama en 10 sec")}
,10000)
callback()
}
function creoNoAsincronia(){
console.log("Es no asincrónica")
}
creoAsincronia(creoNoAsincronia)



//función asincrónica
function creoUnaAsincronia(callback){
setTimeout(function(){
console.log("Esto es una función y se auto llama en 6sec de reloj")
},6000)
callback()
}
function creoUnaNoAsincronica(){
console.log("vamos a programar")
}
creoUnaAsincronia(creoUnaNoAsincronica)

//otra función asincrónica 
function estoEsAlgoSincronico(callback){
setTimeout(function(){
    console.log("Esta función se auto ejecuta luego de " +14+ " segundos y carga la listita de números")
    let estoEsNumero = 0
    while(estoEsNumero <= 10){
        console.log("El número es " + estoEsNumero)
        estoEsNumero = estoEsNumero + 1
        
    }
},14000)
callback()
}
function estoEsAlgoNoSincronico(){
console.log("Esto es no sincronico master y se carga en el acto")
}   
estoEsAlgoSincronico(estoEsAlgoNoSincronico)

//otraFunciónMás
function pasoUno1 (tolosa){
setTimeout(function(){
    console.log("esto lo hace el porra en 8 segundos")
},8000)
tolosa()
}

function pasoDos2(){
console.log("este es el paso dos")
}   
pasoUno1(pasoDos2)

//OtraMás asincrónica

function soyElPasoUnolo(callback){
setTimeout(function(){
    let numeroH = 100
    if (numeroH === 100) {
        console.log("Este número es el " + 100 + " y es correcto, se cargó en 20 segunditos de reloj")
    } else {
        console.log("no es 100")
    }

},20000)
callback()
}

function soyElPasoDosolo(){
console.log("Soy el paso dos y me cargo en el acto")
}   
soyElPasoUnolo(soyElPasoDosolo)

//Dom
var elementoModificar = document.getElementById("rojitos")
elementoModificar.innerHTML = "se cambío el texto html"
elementoModificar.style.color = "red"

//función para cambiar el color con el evento onclick
function cambiarColor(){
    document.getElementById("miTablita").style.color = "green"
}

//funcion para ejecutar una asincrónica en el html
function reinaras(callback){
    setTimeout(function(){
        //DocumentTimeline
        document.getElementById("metoCambio1").innerHTML = "esto lo cambio la función en 6 segundos"
    ,7000})
    callback()
}
function br(){
    console.log("vamos bien loco, esta es la br")
}














