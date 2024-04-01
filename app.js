    var mensaje = document.getElementById('message');
    var resultado= document.getElementById('result');

function encriptar(){   
    var textoAEncriptar=mensaje.value;
    var textoEncriptado="";
    for(let i=0;i<textoAEncriptar.length;i++){
        switch(textoAEncriptar[i]){
            case "a": textoEncriptado=textoEncriptado+textoAEncriptar[i]+"ljd"; break;
            case "e": textoEncriptado=textoEncriptado+textoAEncriptar[i]+"kyv"; break;
            case "i": textoEncriptado=textoEncriptado+textoAEncriptar[i]+"qwv"; break;
            case "o": textoEncriptado=textoEncriptado+textoAEncriptar[i]+"mlk"; break;
            case "u": textoEncriptado=textoEncriptado+textoAEncriptar[i]+"cvz"; break;
            default: textoEncriptado=textoEncriptado+textoAEncriptar[i];
        }
    }
    resultado.textContent=textoEncriptado;
}
function desencriptar(){
    var textoADesencriptar=mensaje.value;
    var textoDesencriptado="";
    for(let i=0;i<textoADesencriptar.length;i++){
        if(textoADesencriptar[i]=='a' || textoADesencriptar[i]=='e' || textoADesencriptar[i]=='i' ||
        textoADesencriptar[i]=='o' || textoADesencriptar[i]=='u'){            
            textoDesencriptado=textoDesencriptado+textoADesencriptar[i];
            i=i+3;                          
        }
        else{
            textoDesencriptado=textoDesencriptado+textoADesencriptar[i];
        }
    }
    resultado.textContent=textoDesencriptado;
}
function copiar(){
   

  // Seleccionar y copiar el contenido del campo temporal
  resultado.select();
  document.execCommand("copy");

  // Eliminar el campo temporal
  document.body.removeChild(campoTemporal);
    alert("El texto se a copiado: "+resultado.textContent);
}
/*function encriptar(){
    var texto = document.getElementById("textarea").value.toLowerCase();

    
    var txtCifrado = texto.replace(/e/img,"enter");
    var txtCifrado = txtCifrado.replace(/o/img,"ober");
    var txtCifrado = txtCifrado.replace(/i/img,"imes");
    var txtCifrado = txtCifrado.replace(/a/img,"ai");
    var txtCifrado = txtCifrado.replace(/u/img,"ufat");

    document.getElementsByClassName("img-persona")[0].style.display = "none";
    document.getElementsByClassName("mensaje","texto")[0].style.display = "none";
    document.getElementById("resultado").style.top = "100px";
    document.getElementById("resultado").innerHTML = txtCifrado;
    document.getElementsByClassName("boton-copiar")[0].style.display = "show";
    document.getElementsByClassName("boton-copiar")[0].style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("textarea").value.toLowerCase();
    
    var txtCifrado = texto.replace(/enter/img,"e");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");

    document.getElementsByClassName("img-persona")[0].style.display = "none";
    document.getElementsByClassName("mensaje")[0].style.display = "none";
    document.getElementById("resultado").style.top = "100px";
    document.getElementById("resultado").innerHTML = txtCifrado;
    document.getElementsByClassName("boton-copiar")[0].style.display = "show";
    document.getElementsByClassName("boton-copiar")[0].style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
    alert("Copiado en el portapapeles")
}*/