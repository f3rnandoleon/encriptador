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
    var textocopiado=resultado.textContent;
    navigator.clipboard.write(textocopiado);
    alert("El texto se a copiado:"+textocopiado);
}