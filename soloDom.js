//funciones tradicionales
function goGo(){
    var guardoAjusteUno = document.getElementById("okidoki")
    guardoAjusteUno.style.color = "red" 
    guardoAjusteUno.style.fontSize = "22px"
    guardoAjusteUno.style.fontWeight = "bold"
    guardoAjusteUno.style.backgroundColor = "yellow"
    guardoAjusteUno.style.padding = "4%"
    guardoAjusteUno.style.borderStyle = "dashed"
    guardoAjusteUno.style.borderWidth = "6px"
}
function goGo2(){
    var guardoAjusteDos = document.getElementById("okidoki2")
    guardoAjusteDos.style.color = "blue"
    guardoAjusteDos.style.fontSize = "18px"
    guardoAjusteDos.style.padding = "2%"
    guardoAjusteDos.style.backgroundColor = "yellow"
    guardoAjusteDos.style.fontWeight = "bold"
    guardoAjusteDos.style.borderStyle = "dashed"
    guardoAjusteDos.style.borderWidth = "6px"
}
//en función flecha
const goGo3 = () => { 
    let guardoDom = document.getElementById("okodoloco")
    guardoDom.style.color="red"
    guardoDom.style.fontSize="17px"
}
var goGo4 = () => {
    var tomoElementooO = document.querySelector("#yaYayaOkoLoco")
    tomoElementooO.style.color="orange"
    tomoElementooO.style.borderWidth="2px"
    tomoElementooO.style.borderStyle="solid"
    tomoElementooO.style.backgroundColor="black"
    tomoElementooO.style.padding="5px"
}
let goGo5 = () => {
      //se puede hacer si guardar el selector en la variable de forma directa
    document.querySelector("#tablitaOne").style.fontSize = "24px"
    let tablita1 = document.querySelector("#tablitaOne")
    tablita1.style.color="red"
    tablita1.style.borderStyle="solid"
  
}
function agrego1(){
    const block = document.getElementById('block');
	let agregarAlgo = `
	<h1>Agrego encabezado 1</h1>
	<h2>Agrego encabezado 2</h2>
	<h3>Agrego encabezado 3</h3>
	<h4>Agrego encabezado 4</h4>
	`
	block.innerHTML = agregarAlgo
}
//en función normal
function agregar2(){

}
