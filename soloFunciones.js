//funciones asincrónicas
function pasoOneUno(callback){
setTimeout(function(){
    console.log("Esta es asincrónica y carga en 6 segundos... es la número 1")
},6000)
    callback()
}
function pasoDosTwo(){
    console.log("Esta es no asincronica y carga al momento...")
}
pasoOneUno(pasoDosTwo)
//otra función asincrónica 
function soyAsincrono(callback){
    setTimeout(function(){
        console.log("Ésta se carga a los 9 segundos, excelente funcionalidad, es la número 2")
    },9000)
    callback()
}
function soyNoAsincrono(){
    console.log("Ésta se carga al momento")
}
soyAsincrono(soyNoAsincrono)
//función asincronica n°3
function laNumero3Asin(callback){
    setTimeout(function(){
        let number3 = 0
        while(number3 <= 22){
           console.log("En esta vueltita el número es " + number3)
           number3 = number3 + 6
        }
    },9500)
    callback()
}
function laNumero3NoAsin(){
    console.log("la3 no asin")
}
laNumero3Asin(laNumero3NoAsin)
//función calcular números pares y mostrar el mayor
function numerosParesMostrarMayor(){
var dameUnNumero = prompt("Dame un número y vamos a ver si es par, y luego en caso que lo sea calcularemos el mayor")
var convertimosAtipoDatoNumero = parseInt(dameUnNumero)
var numero = convertimosAtipoDatoNumero
if(numero >= 1){
    console.log("El " + numero + " es mayor a 1, vamos a ver si es par y en tal caso cuál es el mayor...")
    var dividamosPor2 = numero / 2
    var numeroYaDivididoPor2 = dividamosPor2


    var veamosModulo = (dividamosPor2 % 0)

    if(veamosModulo === true ){
        console.log("Efectivamente el número es par, ahora veamos cuál es el mayor...")
        
    }else{
        console.log("Es impar, no es válido.")
    }




}else{
    console.log("No es mayor que 1, no es válido éste número directamente.")
}

}
numerosParesMostrarMayor()
//funcion asincrónica n°4
function asincrono4(callback){
    setTimeout(function(){
        console.log("Esta es la asincrono n°4 y carga en 4 segundos")
    },4000)
    callback()
}
function noAsincrono4(){
    console.log("Esta es la no asincronica n°4")
}
asincrono4(noAsincrono4)
//función asincrónica n°5
function asincrono5(callback){
setTimeout(function(){
    console.log("Ésta es la asincrono n°5, cargará en 11 segundos ")
},11000)
callback()
}
function noAsincrono5(){
    console.log("Ésta es la noAsincrono n°5")
}
asincrono5(noAsincrono5)
//función asincronica n°6
function asincrono6(callback){
    setTimeout(function(){
        console.log("Ésta es la función asincrono n°6")
    },12000)
    callback()
}
function noAsincrono6(){
    console.log("Ésta es la función noAsincronica n°6")
}
asincrono6(noAsincrono6)