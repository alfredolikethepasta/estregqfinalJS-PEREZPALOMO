class usuario {
    constructor(nombre, dia, mes) {
        this.nombre = nombre;
        this.dia = dia;
        this.mes = mes;
    }

    saludar(){
        alert("Hola " + this.nombre + ". Da enter para conocer tu signo zodiacal" )
    }
}

let dia = parseInt(prompt("Ingresa tu dia de nacimiento aqui:"));
let mes = parseInt(prompt("Ingresa tu mes de nacimiento aqui (1 para enero, 2 para febrero...):"));

if (mes == 3 && dia >= 21 || mes == 4 && dia <=19) {
    alert("Eres Aries")
} else if (mes == 4 && dia >= 20 || mes == 4 && dia <=20) {
    alert("Eres Tauro")
} else if (mes == 5 && dia >= 21 || mes == 6 && dia <=20) {
    alert("Eres Géminis")
} else if (mes == 6 && dia >= 21 || mes == 7 && dia <=22) {
    alert("Eres Cancer")
} else if (mes == 7 && dia >= 23 || mes == 8 && dia <=22) {
    alert("Eres Leo")
} else if (mes == 8 && dia >= 23 || mes == 9 && dia <=22) {
    alert("Eres Virgo")
} else if (mes == 9 && dia >= 23 || mes == 10 && dia <=22) {
    alert("Eres Libra")
} else if (mes == 10 && dia >= 23 || mes == 11 && dia <=21) {
    alert("Eres Escorpio")
} else if (mes == 11 && dia >= 22 || mes == 12 && dia <=21) {
    alert("Eres Sagitario")
} else if (mes == 12 && dia >= 22 || mes == 1 && dia <=19) {
    alert("Eres Capricornio")
} else if (mes == 1 && dia >= 20 || mes == 2 && dia <=18) {
    alert("Eres Acuario")
} else if (mes == 2 && dia >= 19 || mes == 3 && dia <=20) {
    alert("Eres Piscis")
} else {
    alert("Revisa los datos que ingresaste, no podemos calcular tu signo en este momento")
}

function despedida() {
    let mensaje = "Espero te haya gustado esta Pre Entrega :)"
    alert(mensaje)
}

despedida()


for (let i = 1; i <=5; i++) {
    let pregunta = prompt("Escribe 'si' para saber que numero de visitante eres en este sitio");
    alert("Eres el visitante numero " + i);
    
}

