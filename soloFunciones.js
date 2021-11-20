//función sumar 2 númeritos
function sumemosYa(){
    let numerito1 = document.getElementById("numeritoOne").value;
    let numerito2 = document.getElementById("numeritoTwo").value;
    if(numerito1 !==""){
        console.log("Este número es válido")
        if (numerito2 !=="") {
            console.log("Este número es válido")
            if (numerito1 && numerito2 !== 0) {
                document.write("La suma es " + (numerito1 + numerito2))
            }
        }else {
         console.log("Esto no es un número")
        }
    }else {
        console.log("Esto no es un número")
    }
/*    let guardoOperacionSuma = numerito1 + numerito2
    let muestroEnPantalla = document.write(guardoOperacionSuma);*/
}
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
// numerosParesMostrarMayor()

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
//función asincronica 7
function asincronica7(callback){
    setTimeout( function (){
        console.log("Esto es la función asincrónica 7")
    },12000)
    callback()
}
function noAsincronica7(){
    console.log("Función no asincronica 7")
}
asincronica7(noAsincronica7)
//asincrono8
function asincronica8(callback){
    setTimeout(function (){
        console.log("Esto es la asincronica8")
    },7000)
    callback();
}
function noAsincronica8(){
    console.log("esto es la no asincronica 8")
}
asincronica8(noAsincronica8)
//funciones de flecha
var funcionFlecha1 = () => {
    console.log("Función flecha número 1")
}
funcionFlecha1()
//función flecha n°2
let funcionFlecha2 = (num1,num2) => {
console.log("Esto es la funcion flecha n°2 y la suma es " + (num1 + num2))
}
funcionFlecha2(120,80)
//funcion flecha 3
const funcionflecha3 = () => {
    console.log("Esto es la función flecha 3")
}
funcionflecha3()
//función flecha 4
var funcionFlecha4 = () => {
    console.log("Esto es la función flecha 4")
}
funcionFlecha4()
//Función flecha 5 
let funcionFlecha5 = () => { 
    console.log("Esto es la función flecha 5")
}
funcionFlecha5()
//función flecha número 6
let funcionFlecha6 = () => {
    console.log("Esto es la función flecha 6")
}
funcionFlecha6()
//función flecha número 7
var funcionFlecha7 = () =>{
    console.log("Esto es la función flecha 7")
}
funcionFlecha7()
//función flecha número 8
var funcionFlecha8 = () => {
    console.log("Esto es la función flecha 8")
}
funcionFlecha8()
//función flecha 9
var funcionFlecha9 = () => {
    console.log("Esto es la función flecha 9")
}
funcionFlecha9()
/// función flecha número 10
let funcionflecha10 = () => {
    console.log("Esto es la función flecha 10")
}
funcionflecha10()
//función flecha número 11
var funcionFlecha11 = () => {
    console.log("Esto es la función flecha 11")
}
funcionFlecha11()
//funcion flecha 12
let funcionFlecha12 = () => {
    console.log("Esto es la función flecha 12 loco")
}
funcionFlecha12()
//función flecha 13
let funcionFlecha13 = () => {
    console.log("Esto es la función flecha 13")
}
funcionFlecha13()
let funcionFlecha14 = () => {
    console.log("Esto es la función flecha 14")
}
funcionFlecha14()
//funcion flecha 15
var funcionFlecha15 = () =>{
    console.log("Esto es la función flecha 15")
}
funcionFlecha15()
//función flecha 16
let funcionFlecha16 = () => {
    console.log("Esto es la función flecha 16")
}
funcionFlecha16()
//función flecha 17
let funcionFlecha17 = () => {
    console.log("Esto es la función flecha 17")
}
funcionFlecha17()
//función flecha 18
let funcionFlecha18 = () => {
    console.log("Esto es la función flecha 18")
}
funcionFlecha18()
let funcionFlecha19 = () => {
    console.log("Esto es la función flecha 19")
}
funcionFlecha19()
let funcionFlecha20 = () => {
    console.log("Esto es la funcion flecha 20")
}
funcionFlecha20()
//funcipin flecha 21
let funcionFlecha21 = () => {
    console.log("Esto es la función flecha 21")
}
funcionFlecha21()
//función flecha 22
let funcionFlecha22 = () => {
    console.log("Esto es la función flecha 22")
}
funcionFlecha22()
//función flecha 23
let funcionFlecha23 = () => {
console.log("Esto es una función flecha 23")
}
funcionFlecha23()
let funcionFlecha24 = () => {
    console.log("Esto es la función flecha 24")
}
funcionFlecha24()
//función flecha 25
let funcionFlecha25 = () => {
    console.log("Esto es la función flecha 25")
}
funcionFlecha25()
//función flecha 26
const funcionflecha26 = () => {
    console.log("Esto es la función flecha 26")
}
funcionflecha26()
//funcion flecha 27
let funcionFlecha27 = () => {
    console.log("Esto es la función flecha 27")
}
funcionFlecha27()
//función flecha 28
let funcionFlecha28 = () => {
    console.log("Esto es la función flecha 28")
}
funcionFlecha28()
//función flecha 29
var funcionFlecha29 = () => {
    console.log("Esto es la función flecha 29")
}
funcionFlecha29()
//función flcha 30
var funcionFlecha30 = () => {
    console.log("Esto es una función flecha 30")
}
funcionFlecha30()
//función flecha 31
let funcionFlecha31 = () => {
    console.log("Esto es una función flecha 31")
}
funcionFlecha31()
//función en flecha 32
let funcionFlecha32 = () => {
    console.log("Esto es una función flecha 32")
}
funcionFlecha32()
//función flecha 33
let funcionFlecha33 = () => { 
    console.log("Esto es una función flecha 33")
}
funcionFlecha33()
//función flecha 34
const funcionFlecha35 = () => {
    console.log("Esto es la función flecha 35")
}
funcionFlecha35()
//función flecha 36
var funcionFlecha36 = () => {
    console.log("Esto es la función flecha 36")
}
funcionFlecha36()
//función flecha 37
let funcionFlecha37 = () => {
    console.log("Esto  es la función flecha 38")
}
funcionFlecha37()
//función flecha 38
let funcionFlecha38 = () => {
    console.log("Esto es la función flecha 39")
}
funcionFlecha38()
//función flecha 39
var funcionFlecha39 = () => {
    console.log("Esto es la función flecha 39")
}
funcionFlecha39()
//función flecha 40
let funcionFlecha40 = () => {
    console.log("Esto es la función flecha 40")
}
funcionFlecha40()
//función flecha 41
const funcionFlecha41 = () => {
    console.log("Esto es la función flecha 41")
}
funcionFlecha41()
//función flecha 42
var funcionFlecha42 = () =>{
    console.log("Esto es la función flecha 42")
}
funcionFlecha42()
//función flecha 43
let funcionFlecha43 = () => {
    console.log("Esto es la función flecha 43")
}
funcionFlecha43()
//función flecha 44
let funcionFlecha44 = () => {
    console.log("Esto es la función flecha 44")
}
funcionFlecha44()
//función flecha45
var funcionFlecha45 = () => {
    console.log("Esto es la función flecha 45")
}
funcionFlecha45()
//función flecha 46
var funcionFlecha46 = () => {
    console.log("Esto es la función flecha 46")
}
funcionFlecha46()
//función flecha 47
var funcionFlecha47 = () => {
    console.log("Esto es la función flecha 47")
}
funcionFlecha47()
//funcion flecha 48
let funcionFlecha48 = () =>{
    console.log("Esto es la función flecha 48")
}
funcionFlecha48()
//función flecha 49
let funcionFlecha49 = () => {
    console.log("Esto es la función flecha 49")
}
funcionFlecha49()
//función flecha 50
var funcionFlecha50 = () => {
    console.log("Esto es la función flecha 50")
}
funcionFlecha50()
// función flecha 51
let funcionFlecha51 = () => { 
    console.log("Esto es la función flecha 51")
}
funcionFlecha51()
//función flecha 52
let funcionFlecha52 = () => {
    console.log("Esto es la función flecha 52")
}
funcionFlecha52()
//función flecha 53
var funcionFlecha53 = () => {
    console.log("Esto es la función flecha 53")
}
funcionFlecha53()
//función flecha 54
let funcionFlecha54 = () => {
    console.log("Esto es la función flecha 54")
}
funcionFlecha54()
//función flecha 55
var funcionFlecha55 = () => {
    console.log("Esto es la función flecha 55")
}
funcionFlecha55()
//función flecha 56
let funcionFlecha56 = () => {
    console.log("Esto es la función flecha 56")
}
funcionFlecha56()
//función flecha 57
let funcionFlecha57 = () => {
    console.log("Esto es la función flecha 57")
}
funcionFlecha57()
//función flecha 58
let funcionFlecha58 = () => {
    console.log("Esto es la función flecha 58")
}
funcionFlecha58()
//funcíon flecha 59
let funcionFlecha59 = () => {
    console.log("Esto es la función flecha 59")
}
funcionFlecha59()
//función flecha 60
let funcionFlecha60 = () => {
    console.log("esto es la función flecha 60")
}
funcionFlecha60()
//función flecha 61
const funcionFlecha61 = () => {
    console.log("Esto es la función flecha 61")
}
funcionFlecha61()
//funcionFlecha 62
var funcionFlecha62 = () => {
    console.log("Esto es la función flecha 62")
}
funcionFlecha62()
//funcion flecha 63
const funcionFlecha63 = () => {
    console.log("Esto es la función flecha 63")
}
funcionFlecha63()
//funcion flecha 64
var funcionFlecha64 = () => {
    console.log("Esto es la función flecha 64")
}
funcionFlecha64()
//funcion flecha 65
let funcionFlecha65 = () => {
    console.log("Esto es la función flecha 65")
}
funcionFlecha65()
//funcion flecha 66
let funcionFlecha66 = () => {
    console.log("Esto es la función flecha 66")
}
funcionFlecha66()
//funcion flecha 67
let funcionFlecha67 = () => {
    console.log("Esto es la función flecha 67")
}
funcionFlecha67()
//función flecha 68
var funcionFlecha68 = () => {
    console.log("Esto es la función flecha 68")
}
funcionFlecha68()
//funcion flecha 69
let funcionFlecha69  = () => {
    console.log("Esto es la función flecha 69")
}
funcionFlecha69()
//funcion flecha 70
var funcionFlecha70 = () => {
    console.log("Esto es la función flecha 70")
}
funcionFlecha70()
//funcion flecha 71
let funcionFlecha71 = () => {
    console.log("Esto es la función flecha 71")
}
funcionFlecha71()
//funcion flecha 72
let funcionFlecha72 = () => {
    console.log("Esto es la función flecha 73")
}
funcionFlecha72()
//funcion flecha 73
var funcionFlecha73 = () => {
    console.log("Esto es la función flecha 73")
}
funcionFlecha73()
//funcion flecha 74
let funcionFlecha74 = () => {
    console.log("Esto es la función flecha 74")
}
funcionFlecha74()
//funcion flecha 75
let funcionFlecha75 = () => {
    console.log("Esto es la función flecha 75")
}
funcionFlecha75()
//funcion flecha 76
let funcionFlecha76 = () => {
    console.log("Esto es la función flecha 76")
}
funcionFlecha76()
//funcion flecha 77
let funcionFlecha77 = () => {
    console.log("Esto es la función flecha 77")
}
funcionFlecha77()
//funcion flecha 78
const funcionFlecha78 = () => {
    console.log("Esto es la funcion flecha 78")
}
funcionFlecha78()
//funcion flecha 79
let funcionFlecha79 = () => {
    console.log("Esto es la función flecha 79")
}
funcionFlecha79()
//funcion flecha 80
let funcionFlecha80 = () => {
    console.log("Esto es la función flecha 80")
}
funcionFlecha80()
//funcion flecha 81
let funcionFlecha81 = () => {
    console.log("Esto es la función flecha 81")
}
funcionFlecha81()
//funcion flecha 82
const funcionFlecha82 = () => {
    console.log("Esto es la función flecha 82")
}
funcionFlecha82()
//funcion flecha 83
var funcionFlecha83 = () => {
    console.log("Esto es la función flecha 83")
}
funcionFlecha83()
//funcion flecha 84
let funcionFlecha84 = () => {
    console.log("Esto es la función flecha 84")
}
funcionFlecha84()
// 85
let funcionFlecha85 = () => {
    console.log("Esto es la función flecha 85")
}
funcionFlecha85()
//86
let funcionFlecha86 = () => {
    console.log("Esto es la función flecha 86")
}
funcionFlecha86()
//87
let funcionFlecha87 = () => {
    console.log("Esto es la función flecha 87")
}
funcionFlecha87()
//88
let funcionFlecha88 = () => {
    console.log("Esto es la función flecha 88")
}
funcionFlecha88() 
//89
var funcionFlecha89 = () => {
    console.log("Esto es la función flecha 89")
}
funcionFlecha89()
//90
let funcionFlecha90 = () => {
    console.log("Esto es la función flecha 90")
}
funcionFlecha90()
//91
let funcionFlecha91 = () => {
    console.log("Esto es la función flecha 91")
}
funcionFlecha91()
//92
let funcionFlecha92 = () => {
    console.log("Esto es la función flecha 92")
}
funcionFlecha92()
//93
let funcionFlecha93 = () => {
    console.log("Esto es la función flecha 93")
}
funcionFlecha93()
//94
let funcionFlecha94 = () => {
    console.log("Esto es la función flecha 94")
}
funcionFlecha94()
//95
let funcionFlecha95 = () => {
    console.log("Esto es la función flecha 95")
}
funcionFlecha95()
//96
let funcionFlecha96 = () => {
    console.log("Esto es la función flecha 96")
}
funcionFlecha96()
//97
let funcionFlecha97 = () => {
    console.log("Esto es la función flecha 97")
}
funcionFlecha97()
//98
let funcionFlecha98 = () => {
    console.log("Esto es la función flecha 98")
}
funcionFlecha98()
//99
let funcionFlecha99 = () => {
    console.log("Esto es la función flecha 99")
}
funcionFlecha99()
//100
var funcionFlecha100 = () => {
    console.log("Esto es la función flecha 100")
}
funcionFlecha100()
//101
var funcionFlecha101 = () => {
    console.log("Esto es la función flecha 101")
}
funcionFlecha101()
//102
let funcionFlecha102 = () => {
    console.log("Esto es la función flecha 102")
}
funcionFlecha102()
//103
let funcionFlecha103 = () => {
    console.log("Esto es la función flecha 103")
}
funcionFlecha103()
//104
let funcionFlecha104 = () => {
    console.log("Esto es la función flecha 104")
}
funcionFlecha104()
//105
let funcionFlecha105 = () => {
    console.log("Esto es la función flecha 105")
}
funcionFlecha105()
//106
let funcionFlecha106 = () => {
    console.log("Esto es la función flecha 106")
}
funcionFlecha106()
//107
let funcionFlecha107 = () => {
    console.log("Esto es la función flecha 107")
}
funcionFlecha107()
//108
let funcionFlecha108 = () => {
    console.log("Esto es la función flecha 108")
}
funcionFlecha108()
//109
let funcionFlecha109 = () => {
    console.log("Esto es la función flecha 109")
}
funcionFlecha109()
//110
let funcionFlecha110 = () => {
    console.log("Esto es la función flecha 110")
}
funcionFlecha110()
//111
let funcionFlecha111 = () => {
    console.log("Esto es la función flecha 111")
}
funcionFlecha111()
//112
var funcionFlecha112 = () => {
    console.log("Esto es la función flecha 112")
}
funcionFlecha112()
//113
let funcionFlecha113 = () => {
    console.log("Esto es la función flecha 113")
}
funcionFlecha113()
//114
let funcionFlecha114 = () => {
    console.log("Esto es la función flecha 114")
}
funcionFlecha114()
//115
let funcionFlecha115 = () => {
    console.log("Esto es la función flecha 115")
}
funcionFlecha115()
//116
let funcionFlecha116 = () => {
    console.log("Esto es la función flecha 116")
}
funcionFlecha116()
//117
let funcionFlecha117 = () => {
    console.log("Esto es la función flecha 117")
}
funcionFlecha117()
//118
let funcionFlecha118 = () => {
    console.log("Esto es la función flecha 118")
}
funcionFlecha118()
//119
let funcionFlecha119 = () => {
    console.log("Esto es la función flecha 119")
}
funcionFlecha119()
//120
let funcionFlecha120 = () => {
    console.log("Esto es la función flecha 120")
}
funcionFlecha120()
//121
let funcionFlecha121 = () => {
    console.log("Esto es la función flecha 121")
}
funcionFlecha121()
//122
let funcionFlecha122 = () => {
    console.log("Esto es la función flecha 123")
}
funcionFlecha122()
//123
let funcionFlecha123 = () => {
    console.log("Esto es la función flecha 123")
}
funcionFlecha123()
//124
let funcionFlecha124 = () => {
    console.log("Esto es la función flecha 124")
}
funcionFlecha124()
//125
let funcionFlecha125 = () => {
    console.log("Esto es la función flecha 125")
}
funcionFlecha125()
//126
let funcionFlecha126 = () => {
    console.log("Esto es la función flecha 126")
}
funcionFlecha126()
//127
let funcionFlecha127 = () => {
    console.log("Esto es la función flecha 127")
}
funcionFlecha127()
//128
let funcionFlecha128 = () => {
    console.log("Esto es la función flecha 128")
}
funcionFlecha128()
//129
let funcionFlecha129 = () => {
    console.log("Esto es la función flecha 129")
}
funcionFlecha129()
//130
let funcionFlecha130 = () => {
    console.log("Esto es la función flecha 130")
}
funcionFlecha130()

//131
let funcionflecha131 = () => {
    console.log("esto es la función flecha 131")
}
funcionflecha131()
//132
let funcionFlecha132 = () => {
    console.log("Esto es la función flecha 132")
}
funcionFlecha132()
//133
let funcionFlecha133 = () => {
    console.log("Esto es la función flecha 133")
}
funcionFlecha133()
//134
let funcionFlecha134 = () => {
    console.log("Esto es la función flecha 134")
}
funcionFlecha134()
//135
let funcionFlecha135 = () => {
    console.log("Esto es la función flecha 135")
}
funcionFlecha135()
//136
let funcionFlecha136 = () => {
    console.log("Esto es la función flecha 136")
}
funcionFlecha136()
//137
let funcionFlecha137 = () => {
    console.log("Esto es la función flecha137")
}
funcionFlecha137()
//138
const funcionFlecha138 = () => {
    console.log("Esto es la función flecha 138")
}
funcionFlecha138()
//139
let funcionFlecha139 = () => {
    console.log("Esto es la función flecha 139")
}
funcionFlecha139()
//140
const funcionFlecha140 = () => {
    console.log("Esto es la función flecha 140")
}
funcionFlecha140()
//141
var funcionFlecha141 = () => {
    console.log("Esto es la función flecha 141")
}
funcionFlecha141()
//142
let funcionFlecha142 = () => {
    console.log("Esto es la función flecha 142")
}    
funcionFlecha142()
//143
let funcionFlecha143 = () => {
    console.log("Esto es la función flecha 143")
}
funcionFlecha143()
//144
let funcionFlecha144 = () => {
    console.log("Esto es la función flecha 144")
}
funcionFlecha144()
//145
let funcionFlecha145 = () => {
    console.log("Esto es la función flecha 145")
}
funcionFlecha145()
let funcionFlecha146 = () => {
    console.log("Esto es la función flecha 146")
}
funcionFlecha146()
//147
const funcionFlecha147 = () => {
    console.log("Esto es la función flecha 147")
}
funcionFlecha147()
//148
const funcionFlecha148 = () => {
    console.log("Esto es la función flecha 148")
}
funcionFlecha148()
//149
const funcionFlecha149 = () => {
    console.log("Esto es la función flecha 149")
}
funcionFlecha149()
//150
let funcionFlecha150 = () => {
    console.log("Esto es la función flecha 150")
}
funcionFlecha150()
//151
let funcionFlecha151 = () => {
    console.log("Esto es la función flecha 151")
}
funcionFlecha151()
//152
let funcionFlecha152 = () => {
    console.log("Esto es la función flecha 152")
}
funcionFlecha152()
//153
let funcionFlecha153 = () => {
    console.log("Esto es la funciíon flecha 153")
}
funcionFlecha153()
//154
let funcionFlecha154 = () => {
    console.log("Esto es la función flecha 154")
}
funcionFlecha154()
//155
var funcionFlecha155 = () => {
    console.log("Esto es la función flecha 155")
}
funcionFlecha155()
//156
var funcionFlecha156 = () => {
    console.log("Esto es la función flecha 156")
}
funcionFlecha156()
//157
const funcionFlecha157 = () => {
    console.log("Esto es la función flecha 157")
}
funcionFlecha157()
//158
let funcionFlecha158 = () => {
    console.log("Esto es la función flecha 158")
}
funcionFlecha158()
//159
let funcionFlecha159 = () => {
    console.log("Esto es la función flecha 159")
}
funcionFlecha159()
//160
let funcionFlecha160 = () => {
    console.log("Esto es la funcion flecha 160")
}
funcionFlecha160()
//161
let funcionFlecha161 = () => {
    console.log("Esto es la función flecha 161")
}
funcionFlecha161()
//162
let funcionFlecha162 = () => {
    console.log("Esto es la función flecha 162")
}
funcionFlecha162()