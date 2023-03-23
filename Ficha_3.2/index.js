function started(){
    console.log("Download started");

}

function update(progress){
    console.log(progress + "% completed");

}

function completed(){
    console.log("Download complited");
}

function performDownload(fn_s, fn_u, fn_c){
    fn_s();

    for (let i = 0; i <= 100; i++){
        fn_u(i);
        
    }

    fn_c();

}
performDownload(started, update, completed);


var ArrayUtils = require('./ArrayUtils');

var array = [1,2, 8,2,3];
var elemento = 2;
var array1 = [1,2,3];
var array2 = [2,3];
var empty = ArrayUtils.isEmpty(array);
var maximo = ArrayUtils.Maximo(array);
var minimo = ArrayUtils.Minimo(array);
var media = ArrayUtils.Media(array);
var indice = ArrayUtils.Indice(array, elemento);
var subArray = ArrayUtils.SubArray(array, 1, 4);
var subArray = ArrayUtils.SubArray(array, 1, 4);
var testar_tamanho = ArrayUtils.isSameLength(array1, array2);
var invertir_lista = ArrayUtils.Reverse(array);
var cambiar = ArrayUtils.Swap(array, 0, 2);
var contiene = ArrayUtils.Contains(array, 9);
var concatenar = ArrayUtils.Concatenate(array1, array2);




console.log(empty);
console.log(maximo);
console.log(minimo);
console.log(media);
console.log(indice);
console.log(subArray);
console.log(testar_tamanho);
console.log(invertir_lista);
console.log(cambiar);
console.log(contiene);
console.log(concatenar); 



function Person(firtname, lastname){
    this.firtname = firtname;
}

var p = new Person ("Jacky");
var x = 0;
