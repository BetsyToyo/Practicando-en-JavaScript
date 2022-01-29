
//Ejercicio 1

const form=document.getElementById("formulario");
const btnReinicio=document.getElementById("reiniciar")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    reiniciarErrores()    
        
    let inputNombre=document.getElementById("nombre").value;
    let inputAsunto=document.getElementById("asunto").value;
    let inputMensaje=document.getElementById("mensaje").value;
    
    let inputs=validacion(inputNombre,inputAsunto,inputMensaje);    
    
    if(inputs == true) {
        
        datosValidos();
     };          
    });
    
    
    let reiniciarInputs=()=>{
        document.querySelector("#nombre").value="";
        document.querySelector("#asunto").value="";
        document.querySelector("#mensaje").value="";        
                  
    }
    
    btnReinicio.addEventListener("click",reiniciarInputs);

    let reiniciarErrores=()=>{
        document.querySelector(".resultado").innerHTML="";  
        document.querySelector(".errorNombre").innerHTML="";
        document.querySelector(".errorAsunto").innerHTML="";
        document.querySelector(".errorMensaje").innerHTML="";
        
    }

let datosValidos=()=>{
    let resultado=document.querySelector(".resultado");
    resultado.innerHTML="Los datos fueron validados correctamente";    
   
}

let validacion=(nombre,asunto,mensaje)=>{
      
    let datosCorrectos=true;
    let validacionNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    if (validacionNombre.test(nombre)==false) {
        let errorNombre=document.querySelector(".errorNombre")
        errorNombre.innerHTML="ERROR! ingrese solo valores alfabeticos.";        
        datosCorrectos=false;
    }

    let validacionAsunto= /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    if (validacionAsunto.test(asunto)==false) {
        let errorAsunto=document.querySelector(".errorAsunto")
        errorAsunto.innerHTML="ERROR! ingrese solo valores alfabeticos.";
        datosCorrectos=false;
    }

    let validacionMensaje=/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    if (validacionMensaje.test(mensaje)==false) {
        let errorMensaje=document.querySelector(".errorMensaje")
        errorMensaje.innerHTML="ERROR! ingrese solo valores alfabeticos.";
        datosCorrectos=false
    }

   return datosCorrectos 
}     
   







    
    
    
    