

console.log(valor1);
console.log(valor2);

let suma=()=>{

    let valor1=document.getElementById("valor1").value;
    let valor2=document.getElementById("valor2").value;

    regexNum=/[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/

    if  (valor1==""){
        console.log("ingrese un numero en valor en valor 1")
    }else if  (!regexNum.test(valor1)){
        console.log("ERROR!! ingrese un numero en valor en valor 1")
    }

    if (!regexNum.test(valor2)) {
        console.log("ingrese un numero en valor en valor 2")
    }else if (valor2=="") {
        console.log("ERROR!! ingrese un numero en valor en valor 2")
    }

     
    valor1=parseFloat(valor1)
    valor2=parseFloat(valor2)

    let resultadoSuma=valor1+valor2
    
    
    document.querySelector(".resultado").innerHTML+=resultadoSuma
};

let btnSumar=document.getElementById("btn-sumar");
btnSumar.addEventListener("click",suma);

let resta=()=>{

    let valor1=document.getElementById("valor1").value;
    let valor2=document.getElementById("valor2").value;

    regexNum=/[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/

    if  (valor1==""){
        console.log("ingrese un numero en valor en valor 1");
    }else if  (!regexNum.test(valor1)){
        console.log("ERROR!! ingrese un numero en valor en valor 1");
    }

    if (!regexNum.test(valor2)) {
        console.log("ingrese un numero en valor en valor 2");
    }else if (valor2=="") {
        console.log("ERROR!! ingrese un numero en valor en valor 2");
    }

    valor1=parseFloat(valor1)
    valor2=parseFloat(valor2)

    let resultadoResta=valor1-valor2    

    if (resultadoResta < 0) {
        resultadoResta=0
    }
 

    document.querySelector(".resultado").innerHTML+=resultadoResta
};

let btnRestar=document.getElementById("btn-restar");
btnRestar.addEventListener("click",resta);