window.onload = function () {
    var nombre = document.getElementById("nombre").value;
    var apellido1 = document.getElementById("apellido1").value;
    var apellido2 = document.getElementById("apellido2").value;
    var direccion = document.getElementById("direccion").value;
    var email = document.getElementById("email").value;
    var email1 = document.getElementById("email1").value;
    var dni = document.getElementById("dni").value;
    var intereses = document.getElementById("intereses").value;
    var password = document.getElementById("password").value;

}



// document.getElementById('nombre').addEventListener('keypress', (e) => {
//     e.preventDefault()
//     if ((KeyboardEvent.key < 65) || (KeyboardEvent.keyCode > 90) && (KeyboardEvent.keyCode < 97) || (KeyboardEvent.keyCode > 122)) {
//         return false;
//     }
// }

// );



//Comprobar la primera letra del nombre
function soloLetras1() {
    if ((event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
        event.returnValue = false;
    var nombre = document.getElementById("nombre").value;
    if ((nombre[0].charCodeAt() >= 65) && (nombre[0].charCodeAt() <= 90)) {
        document.getElementById("pnombre").innerText = "Nombre OK"
    } else {
        document.getElementById("pnombre").innerText = "La primera letra del nombre tiene que ser mayuscula"
    }
}

//Comprobar la primera letra del primer apellido 
function soloLetras2() {
    if ((event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
        event.returnValue = false;
    var apellido1 = document.getElementById("apellido1").value;
    if ((apellido1[0].charCodeAt() >= 65) && (apellido1[0].charCodeAt() <= 90)) {
        document.getElementById("papellido1").innerText = "Apellido OK"
    } else {
        document.getElementById("papellido1").innerText = "La primera letra del primer apellido tiene que ser mayuscula"
    }
}

//Comprobar la primera letra del segundo apellido 
function soloLetras3() {
    if ((event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
        event.returnValue = false;
    var apellido2 = document.getElementById("apellido2").value;
    if ((apellido2[0].charCodeAt() >= 65) && (apellido2[0].charCodeAt() <= 90)) {
        document.getElementById("papellido2").innerText = "Apellido OK"
    } else {
        document.getElementById("papellido2").innerText = "La primera letra del primer apellido tiene que ser mayuscula"
    }
}









function emailValidar() {
    var email = document.getElementById("email").value;
    var email1 = document.getElementById("email1").value;

    //COmprobar los email entre si
    var contador = 0;
    if (email.length == email1.length) {
        for (let i = 0; i < email.length; i++) {

            if (email[i] != email1[i]) {
                i = email.length;
                console.log("Los email introducidos no coinciden");

            } else {
                contador++;
            }
            if (contador == email.length) {
                console.log("Los email introducidos coinciden");
            }
        }
    } else {
        console.log("11Los email introducidos no coinciden");
    }


}

//COmprobar la validez del email
let antesArroba=[];
let contador1=0;
for (let i = 0; i < email.length; i++) {
    if (email[i] == '@') {
       antesArroba= email.slice(0,i);

    } else {
        contador1 ++;
    }
}
console.log(antesArroba)
console.log(contador1)
if(contador1 == email.length) {
    console.log('falta el @')
}

function registrado() {





    var reg = document.createElement('h2');
    var contenido = document.createTextNode('Te has registrado con éxito');
    reg.appendChild(contenido);
    document.body.appendChild(reg);
};