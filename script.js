window.onload = function () {
    var nombre = document.getElementById("nombre").value;
    var apellido1 = document.getElementById("apellido1").value;
    var apellido2 = document.getElementById("apellido2").value;
    var direccion = document.getElementById("direccion").value;
    var email = document.getElementById("email").value;
    var email1 = document.getElementById("email1").value;
    var dni = document.getElementById("dni").value;
    var intereses = document.getElementById("intereses").value;
    var password = document.getElementById("contrasena").value;

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










//Validar email
function emailValidar() {
    var email = document.getElementById("email").value;
    var email1 = document.getElementById("email1").value;

    //event listener
    //onkeypress="comprobar()"

    //Comprobar los email entre si
    var contador = 0;
    if (email.length == email1.length) {
        for (let i = 0; i < email.length; i++) {

            if (email[i] != email1[i]) {
                i = email.length;
                document.getElementById("email2").innerText = "Email no valido"
                //console.log("Los email introducidos no coinciden");

            } else {
                contador++;
            }
            if (contador == email1.length) {
                document.getElementById("email2").innerText = "Email valido"
                //console.log("Los email introducidos coinciden");


                let antesArroba = [];
                let contador1 = 0;
                let arroba = 0;

                //crear la variable antesArroba parac comprobar luego su validez
                for (let i = 0; i < email1.length; i++) {
                    if (email1[i] == '@') {
                        antesArroba = email1.slice(0, i);
                        arroba = i + 1;
                        i = email1.length;
                    } else {
                        contador1++;
                    }
                }
                //console.log(antesArroba)
                //console.log(contador1)

                if (contador1 == email1.length) {
                    //console.log('falta el @')
                    document.getElementById("email2").innerText = "Email no valido, falta el @"
                }

                for (let i = 0; i < antesArroba.length; i++) {
                    if (((antesArroba[i].charCodeAt() >= 65) && (antesArroba[i].charCodeAt() <= 90)) || ((antesArroba[i].charCodeAt() >= 97) && (antesArroba[i].charCodeAt() <= 122)) || (antesArroba[i].charCodeAt() == 46) || (antesArroba[i].charCodeAt() == 95)) {
                        //console.log("Nombre corecto");
                        //console.log(antesArroba[i])
                        document.getElementById("email2").innerText = "Email valido"


                        //crear el variable dominio parac comprobar luego su validez
                        var dominio = [];
                        var punto = 0;
                        for (let i = arroba; i < email1.length; i++) {
                            if (email1[i] == '.') {
                                dominio = email1.slice(arroba, i);
                                punto = i + 1;
                                console.log(dominio);

                            } else {
                                contador1++;
                            }
                        }

                        var contador2 = 0;
                        arrayDominio = ["yahoo", "gmail", "hotmail", "thebridge", "outlook"]
                        for (let i = 0; i < arrayDominio.length; i++) {
                            if (dominio == arrayDominio[i]) {
                                //console.log("Dominio valido")
                                document.getElementById("email2").innerText = "Email valido"

                                //Comprobar resto dominio
                                var restoDominio = email1.slice(punto, email.length);
                                console.log(restoDominio)
                                if ((restoDominio == "es") || (restoDominio == "com") || (restoDominio == "net")) {
                                    //console.log("resto dominio valido")
                                    document.getElementById("email2").innerText = "Email valido"
                                } else {
                                    //console.log("resto dominio no valido")
                                    document.getElementById("email2").innerText = "Email no valido"
                                }


                                i = arrayDominio.length
                            } else {
                                contador2++
                            }
                        }
                        if (contador2 == arrayDominio.length) {
                            document.getElementById("email2").innerText = "Email no valido"
                            //console.log('El dominio no es válido')
                        }




                    } else {
                        i = antesArroba.length;
                        document.getElementById("email2").innerText = "Email no valido"
                        //console.log("Nombre incorecto");
                    }
                }




            }
        }
    } else {
        document.getElementById("email2").innerText = "Email no valido"
        //console.log("11Los email introducidos no coinciden");
    }




    function registrado() {
    var mayusculas = 0;
    var minusculas = 0;
    var numeros = 0;
    var simbolo = 0;
    var password = document.getElementById("contrasena").value;
    for (let i = 0; i < password.length; i++) {
        if ((password[i].charCodeAt() >= 65) && (password[i].charCodeAt() <= 90)) {
            mayusculas++
        }
        if ((password[i].charCodeAt() >= 97) && (password[i].charCodeAt() <= 122)) {
            minusculas++
        }
        if ((password[i].charCodeAt() >= 48) && (password[i].charCodeAt() <= 57)) {
            numeros++
        }
        if ((password[i].charCodeAt() >= 33) && (password[i].charCodeAt() <= 47) || (password[i].charCodeAt() >= 58) && (password[i].charCodeAt() <= 64) || (password[i].charCodeAt() >= 91) && (password[i].charCodeAt() <= 96) || (password[i].charCodeAt() >= 123) && (password[i].charCodeAt() <= 126)) {
            simbolo++
        }
    }
    if (mayusculas >= 1 && minusculas >= 1 && numeros >= 2 && simbolo >= 1) {
        console.log('contraseña válida')
        document.getElementById("contrasena1").innerText = "Contraseña valida"
    } else {
        document.getElementById("contrasena1").innerText = "Contraseña no valida"
        console.log('contraseña no válida')
    }
}










}





function registrado() {
    var mayusculas = 0;
    var minusculas = 0;
    var numeros = 0;
    var simbolo = 0;
    var password = document.getElementById("contrasena").value;
    for (let i = 0; i < password.length; i++) {
        if ((password[i].charCodeAt() >= 65) && (password[i].charCodeAt() <= 90)) {
            mayusculas++
        }
        if ((password[i].charCodeAt() >= 97) && (password[i].charCodeAt() <= 122)) {
            minusculas++
        }
        if ((password[i].charCodeAt() >= 48) && (password[i].charCodeAt() <= 57)) {
            numeros++
        }
        if ((password[i].charCodeAt() >= 33) && (password[i].charCodeAt() <= 47) || (password[i].charCodeAt() >= 58) && (password[i].charCodeAt() <= 64) || (password[i].charCodeAt() >= 91) && (password[i].charCodeAt() <= 96) || (password[i].charCodeAt() >= 123) && (password[i].charCodeAt() <= 126)) {
            simbolo++
        }
    }
    if (mayusculas >= 1 && minusculas >= 1 && numeros >= 2 && simbolo >= 1) {
        //console.log('contraseña válida')
        document.getElementById("contrasena1").innerText = "Contraseña valida"
    } else {
        document.getElementById("contrasena1").innerText = "Contraseña no valida"
        //console.log('contraseña no válida')
    }
    var reg = document.createElement('h2');
    var contenido = document.createTextNode('Te has registrado con éxito');
    reg.appendChild(contenido);
    document.body.appendChild(reg);
}

