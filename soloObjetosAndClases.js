var objetoPrimario = {
    propiedad1: "Esto es una propiedad1 de un objeto",
    propiedad2: "Esto es una propiedad2 de otro objeto",
    propiedad3: "Esto es una propiedad3 de otro objetivo",
    propiedad4: "Esto es una propiedad4 de otro objeto",
    propiedad5: "Esto es una propiedad5 de otro objeto",
    propiedad6: "Esto es una propiedad6 de otro objeto", 
    propiedad7: "Esto es una propiedad7 de otro objetivo",
    propiedad8: "Esto es una propiedad8 de otro objetivo",
    propiedad9: "Esto es una propiedad9 de otro objetivo",
    propiedad10: "Esto es una propiedad10 de otro objetivo",
    propiedad11: "Esto es una propiedad11 de otro objetivo",
    propiedad12: "Esto es una propiedad12 de otro objetivo",
    propiedad13: "Esto es una propiedad13 de otro objetivo",
    propiedad14: "Esto es una propiedad14 de otro objetivo",
    propiedad15: "Esto es una propiedad15 de otro objetivo",
    propiedad16: "Esto es una propiedad16 de otro objetivo",
    propiedad17: "Esto es una propiedad17 de otro objetivo",
    propiedad18: "Esto es una propiedad18 de otro objetivo",
    propiedad19: "Esto es una propiedad19 de otro objetivo",
    propiedad20: "Esto es una propiedad20 de otro objetivo",
    propiedad21: "Esto es una propiedad21 de otro objetivo",
    propiedad22: "Esto es una propiedad22 de otro objetivo",
    propiedad23: "Esto es una propiedad23 de otro objetivo",
    propiedad24: "Esto es una propiedad24 de otro objetivo",
    funciona1: function funcional1(){
        console.log("funciona1")
    },
    funciona2: function funcional2(){
        console.log("funciona2")
    },
    funciona3: function aLele(){
        console.log("funciona3")
    },
    funciona4: function force(){
        console.log("funciona4")
    },
    funciona5: function forceOne(){
        console.log("funciona5")
    }
    }
    var guardoObjetoAndPropiedad1 = objetoPrimario.propiedad1
    var guardoObjetoAndPropiedad2 = objetoPrimario.propiedad2
    console.log(guardoObjetoAndPropiedad1)
    console.log(guardoObjetoAndPropiedad2)
    objetoPrimario.funciona1()
    delete objetoPrimario.propiedad3
    console.log("Esto es para comprobar si la propiedad 3 del ojetoPrimario existe " + objetoPrimario.propiedad3)
    var objetoPrimario2 = {
        accion1: "Esto es una acción one",
        accion2: "Esto es una acción two",
        accion3: "Esto es una acción three",
        hagoAlgo: function vamosS(){
           console.log("función hagoAlgo del objetoPrimario2")
        }
    }
    objetoPrimario2.hagoAlgo()
//objeto 3

    let objeto3 = {
        propiedad1: "Esto es una propiedad 1",
        propiedad2: "Esto es una propiedad 2",
        propiedad3: "Esto es una propiedad 3",
        funcionalidad1: function funciona1(){
            console.log("Esto es puff funcionalidad 1 objeto3")
        },
        funcionalidad2: function funciona2(){
            console.log("Esto es paff funcionalidad 2 objeto3")
        }
    }
    objeto3.funcionalidad1()
    objeto3.funcionalidad2()
    let metoObjeto3Propiedad1 = objeto3.propiedad1
    console.log(metoObjeto3Propiedad1)









































    

    //clases
    class Conejo {
        constructor(tipo) {
        this.tipo = tipo;
        }
        hablar(linea) {
        console.log(`El conejo ${this.tipo} dice '${linea}'`);
        }
        }
        let conejoAsesino = new Conejo("asesino");
        let conejoNegro = new Conejo("negro");
        

     