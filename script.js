//Obtenemos los botones,textInput, textOutput y definimos claves para encriptacion

var textInput = document.getElementById("textInput");
var btnEncrypt = document.getElementById("btnEncrypt");
var btnDecrypt = document.getElementById("btnDecrypt");
var textOutput = document.getElementById("textOutput");

var keys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

//Valida que el texto ingresado solo tenga letras minusculas, sin caracteres especiales y valida que el usuario haya ingresado algun valor

function validateInput(text){ 
    if(text == "") return false;
    return(/^[a-z ]*$/.test(text));
}

function encrypt(){
    var text = textInput.value; //Obtiene el texto 
                    
    if(validateInput(text)){
       
        for(var letter in keys){  //Para cada una de las claves obtiene el valor por el que sera reeemplazado
            
            text = text.replaceAll(letter, keys[letter]); //Reeemplaza la letra obtenida, por su valor encriptado
        }

        textOutput.value = text; //Actualiza el textOutput con el texto encriptado
        textOutput.style.backgroundImage = "none";
        textInput.value = ""; //Limpia el textInput
    }
}

function decrypt(){
    var text = textInput.value; //Obtiene el texto   
                    
    if(validateInput(text)){

        for(var letter in keys) { 
            text = text.replaceAll(keys[letter], letter); //Reeemplaza el valor encriptado, por la letra correspondiente
        }

        textOutput.value = text; //Actualiza el textOutput con el texto desencriptado
        textOutput.style.backgroundImage = "none";
        textInput.value = ""; //Limpia el textInput
    }
}

function copy(){
    var text = textOutput.value;

    if(validateInput(text)){ //Valida que haya texto en el textOutput

        textOutput.select();
        navigator.clipboard.writeText(textOutput.value);
        textOutput.value = ""; // Limpia el textOutput
        textOutput.style.backgroundImage = 'url("img/logo3.png")' // Coloca de nuevo la imagen de fondo
        alert("¡Texto copiado!") // Emite alerta al usuario
    }
}