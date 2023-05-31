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
