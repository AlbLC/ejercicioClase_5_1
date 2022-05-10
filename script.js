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

//Termino que introduce el usuario
var termBorrar = document.getElementById("term").value
//Creamos la lista con todos los DT
var listaDT = document.querySelectorAll("dt")
//Creamos la lista con todos los DT
var listaDD = document.querySelectorAll("dd")

    for (let i = 0; i < email.length; i++){

        //Utilizamos la condicion if para comprobar si el innerText de cada elemento de la listaDT conincide con el termBorrar (termino introducido por el usuario)
        if(listaDT[i].innerText == termBorrar ) {
            //Cuando la condicion se cumple, se borra el elemento de la lista DT mas elelemento de la lista DD
            listaDT[i].parentNode.removeChild(listaDT[i]);
            listaDD[i].parentNode.removeChild(listaDD[i]);
            //Se utiliza para parrar el for
            i = listaDT.length
        }  
    }

}





function registrado() {

   



    var reg = document.createElement('h2');
    var contenido = document.createTextNode('Te has registrado con éxito');
    reg.appendChild(contenido);
    document.body.appendChild(reg);
};