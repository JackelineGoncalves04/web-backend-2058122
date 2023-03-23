function calcular_massa(peso, altura) {
  var imc = peso / (altura * altura);
  if (imc < 18.5) {
    console.log("abaixo do peso");
  } else if (imc >= 18.5 && imc < 25) {
    console.log("no peso normal");
  } else if (imc >= 25 && imc <= 30) {
    console.log("acima do peso");
  } else if (imc > 30) {
    console.log("Obeso");
  }
  return;
}
//calcular_massa(100,1.80);

function invertir(str) {
  var splitredStr = str.split(" ");
  var reverseStr = "";
  for (let i = 0; i < splitredStr.length; i++) {
    //esta iterando sobre los elementos de la lista (palabras)
    for (let j = splitredStr[i].length - 1; j >= 0; j--) {
      //esta iterando sobre las letras de las palabras
      reverseStr += splitredStr[i][j];
    }
    reverseStr += " ";
  }
  return reverseStr;
}
var str = "Hoje e domingo";
var rev = invertir(str);
//console.log(rev);

function vocales(str) {
  var conta = 0;
  for (let i = 0; i < str.length; i++) {
    var letra = str[i];
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      conta++;
    }
  }
  return conta;
}
//console.log(vocales("Hello World"))

function letra_veces(str, letra) {
  var conta = 0;
  for (let i = 0; i < str.length; i++) {
    var a = str[i];
    if (a == letra) {
      conta++;
    }
  }
  return conta;
}
//console.log(letra_veces("hello World", "d"))

function calcular_tiempo(
  hora_entrada,
  minutos_entrada,
  segundos_entrada,
  hora_saida,
  minutos_saida,
  segundos_saida
) {
  var total_segundos_entrada =
    hora_entrada * 3600 + minutos_entrada * 60 + segundos_entrada;
  var total_segundos_saida =
    hora_saida * 3600 + minutos_saida * 60 + segundos_saida;
  var total = total_segundos_saida - total_segundos_entrada;

  var resto_horas = total % 3600;
  var horas = (total - resto_horas) / 3600;

  var resto_minutos = resto_horas % 60;
  var minutos = (resto_horas - resto_minutos) / 60;

  var segundos = resto_minutos;

  console.log(
    "O trabalhador trabalhou:" + horas + "h" + minutos + "m" + segundos + "s"
  );
}

//console.log(calcular_tiempo(8, 0, 0, 9, 2, 5));

function disenhar(caracter, altura, largura) {
  console.log("desenhar altura");
  console.log("Altura" + altura);
  console.log("Largura" + largura);

  var line = "";

  for (let i = 0; i < largura; i++) {
    line += caracter;
  }
  for (let j = 0; j < largura; j++) {
    console.log(line);
  }
}
//disenhar("+", 5, 5);

function triangulo(altura) {
  console.log("desenhar altura");
  console.log("Altura" + altura);

  var line = "";

  for (let i = 0; i < altura; i++) {
    line += "*";
    console.log(line);
  }
}
//triangulo(10);

function desenhar_caixa(size) {
  var box = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
        box += "*";
      } else {
        box += " ";
      }
    }
    box += "\n";
  }
  console.log(box);
}
//desenhar_caixa(10);

var person1 = { name: "Roberto", Grade: "20", Number: 2873283 };
var person2 = { name: "Ale", Grade: "8", Number: 2873393 };
var person3 = { name: "Andres", Grade: "17", Number: 8373283 };

var student_list = [];
student_list.push(person1);
student_list.push(person2);
student_list.push(person3);

function calcular_maximo(array) {
  var max = array[0].Grade;
  var bestStudent = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].Grade > max) {
      max = array[i].Grade;
      bestStudent = array[i];
    }
  }
  return bestStudent;
}
console.log(calcular_maximo(student_list));

function calcular_minimo(array){
    var min = array[0].Grade;    
    var nota_minima = array[0];   
        for ( let i = 0; i < array.length; i ++){
            if ( array[i].Grade < min ) { 
                min = array[i].Grade;  
                nota_minima = array[i]; 
            }  
        }
        return nota_minima;
}
//console.log(calcular_minimo(student_list));

function calcular_media (student_list){
    var suma = 0;
    for (let i = 0; i < student_list.length; i++) {
        suma += student_list[i].Grade;
    }
    var media = suma / student_list.length;
    return media;
}

function aluno_cercano_media (student_list){
    var avg = calcular_media(student_list);
    var min = avg;
    var aluno = student_list[0];
    for (let i = 0; i < student_list.length; i++){
        var diferencia = Math.abs(avg -student_list[i].Grade);
        if (diferencia < min){
            min = diferencia;
            aluno = student_list[i];
        }
    }
    return aluno;
}
//console.log(aluno_cercano_media(student_list));


function notas_negativas(array){
    var conta = 0;
    for (let i= 0; i < array.length; i++){
        if (array[i].Grade < 9.5) {
            conta++;
        }
    }
    return conta;
}

//console.log(notas_negativas(student_list));

function notas_positivas(array){
    var conta = 0;
    for (let i= 0; i < array.length; i++){
        if (array[i].Grade >= 9.5) {
            conta++;
        }
    }
    return conta;
}

console.log(notas_positivas(student_list));