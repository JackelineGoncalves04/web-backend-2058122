function calculateGrade(gp, gt) {
    var grade = gp * 0.6 + gt * 0.4;
    if (grade >= 9.5)
        console.log("Aprovado");
    else 
        console.log("Reprovado");
}
//calculateGrade(12,16);

function calculateGrade2(gp, gt) {
    var grade = gp * 0.6 + gt * 0.4;
    if (grade >= 9.5)
        return true;
    else 
        return false;
}
//var aproval = calculateGrade2(5,6);


function nome_do_mes(numero_mes){
    if (numero_mes == 1)
        console.log("enero");
    else if (numero_mes == 2) 
        console.log("febrero");
    else if (numero_mes == 3) 
         console.log("marzo");
}
//nome_do_mes(2);

function nome_do_mes (numero_mes){
    var meses = ["enero", "frebrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    console.log(meses[numero_mes - 1]);
}

//nome_do_mes(4);


function operadores (num1, num2, operador){
    if (operador == "+")
        return num1 + num2;
    else if (operador == "-")
        return num1 - num2;
    else if (operador == "*")
        return num1 * num2;
    else if (operador == "/")
        return num1 / num2;
    else if(operador == "^")
        return Math. pow(num1,num2);
}
 
//console.log(operadores(2,2,'+'));


function multiplos (){
    var numero = 0;
    while (numero < 20){
        if (numero % 5 == 0 )
            console.log(numero);
        numero ++;
     }
}
//multiplos();


function enteros (){
    var numero = 0;
    var suma = 0;
    while (numero <= 100){
        suma += numero;
        numero ++;  
    }
    return suma
}
//console.log(enteros());

function factoriales (factorial){
    var numero = 1;
   var resultado = 1;
    while (numero <= factorial){
        resultado *= numero;
        numero ++
    }
    return resultado
}
//console.log(factoriales(5));     



function calcular_minimo(array){
    var min = array[0];       //asume que el primero elemento es el minimo
        for ( let i = 1; i < array.length; i ++){
            if ( array[i] < min )     // si encuentra un elemento menor que el actual actualiza el minimo
                min = array[i];     // actualiza el minimo
        }
        return min 
}
//console.log(calcular_minimo([1,4,5,2,0]))



function calcular_maximo(array){
    var max = array[0];
        for ( let i = 1; i < array.length; i ++){
            if ( array[i] > max )
                max = array[i]; 
        }
        return max
}
//console.log(calcular_maximo([1,4,5,2,0]))



function calcular_media(array){
    var suma = 0;      //inicializa la suma en cero
    var media = 0;
        for ( let i = 0; i < array.length; i ++){
            suma += array [i];     //agrega cada elemento al total de la suma
        }
    media += suma / array.length      //divide la suma por la cantidad de elementos
    return media
    }

//console.log(calcular_media([1,4,5,2,0]))


//------------------------------------------------------------------------------------



function practica (num, step){

    for (let i = num; i >= 0 ; i -= step) {
        console.log(i);
        
    }
}

practica(100,5);