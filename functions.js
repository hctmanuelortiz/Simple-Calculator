$(document).ready(function(){

    // mouse event functions.

    $('#banner').mouseenter(function(){
        $('#titulo').html("Hi! i'm a nobbie dev &#128118;")
    })

    $('#banner').mouseleave (function(){
        $('#titulo').html("The best calculator &#128170;")
    })

    var valorGuardado = 0;
    var valorIngresado = 0;
    var result = 0;
    actResultado(result);

    // Clicking triggers this function
    $('.btn').on('click', function(){   
        var valor = $(this).html();
        if (valor === "CE") {
            if(valorIngresado != 0){
                valorIngresado = 0;
            }
        }
        
        if (valor === "C") {
            if(valorIngresado != 0){
                newValor = valorIngresado.substring(0, valorIngresado.length - 1);
                valorIngresado = newValor;
            }
        }
        
        if (isANumber(valor)){
            if(valorIngresado === 0){
                valorIngresado = valor; //4
            } else {
                valorIngresado = valorIngresado + valor; 
            }
        }
        
        if(isAOP(valor)){
            cant = valorIngresado.length;
            nValor = valorIngresado.substr(-1);
            if(!isAOP(nValor) && nValor != "."){
                valorGuardado = valorIngresado; // 45
                operator = valor; // *
                valorIngresado = valorGuardado + operator;
            }
        } 
        
        if(valor === "."){
            nVal = valorIngresado.substr(-1);  
            if(nVal != "."){
                valorIngresado += ".";
            }
        } 
        
        if(valor === "="){
            //valorIngresado = operation(operator, valorIngresado, valorGuardado);
            valorIngresado = operation(valorIngresado);
            //valorResultado = valorIngresado;
        }

        actResultado(valorIngresado);
    })

    function actResultado(nResult){
        var valAMostrar = nResult.toString();
        return $('#screen').html(valAMostrar);
    }
    function isANumber(valor){
        return (!isNaN(valor));
    }

     function isAOP(op){
        return (op == "%" || op == "/" || op == "*" || op == "-" || op == "+");
    }

    // function operation(op, vIngresado, vGuardado){
    function operation(vIngresado){
        // The way to solve mathematical operations will be changed soon, since eval () is not safe.
        result = eval(valorIngresado);
        return result;
    }
    
  });