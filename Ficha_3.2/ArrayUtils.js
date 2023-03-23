module.exports = {
    isEmpty : function(array){
        if (array.length == 0) {
            return true;
        }
        else{
            return false;
        }
    },

    Maximo: function (array){
        var max = array[0];
        for ( let i = 1; i < array.length; i ++){
            if ( array[i] > max )
                max = array[i]; 
        }
        return max
    },

    Minimo: function(array){
        var min = array[0];       
        for ( let i = 1; i < array.length; i ++){
            if ( array[i] < min )     
                min = array[i];     
        }
        return min 
    },
    Media: function (array){
        var suma = 0;      
        var media = 0;
            for ( let i = 0; i < array.length; i ++){
                suma += array [i];    
            }
        media += suma / array.length      
        return media
    },

    Indice: function(array, elemento){
        var index = -1;
        for (let i = 0; i < array.length; i++) {
            if (elemento == array[i]){
                index = i;
            }
        }
        return index;
    },

    SubArray: function(array, startIndex, endIndex){
        var sublista = [];
        for (let i = startIndex; i <= endIndex; i++) {
            sublista.push(array[i]);
            
        }
        return sublista;
    },

    isSameLength: function(array1, array2){
        return array1.length == array2.length;
     1       
    },

    Reverse: function(array){
        var nova_lista = [];
        for (let i = array.length -1; i >= 0; i--) {
          nova_lista.push(array[i]);
            
        }
        return nova_lista;
   },

   Swap: function (array, index1, index2){
    var temporal = array[index1];

        array[index1] = array [index2];
        array[index2] = temporal;
    
        return array;   
    },
   

    Contains: function (array, valor){
       return this.Indice(array, valor) != -1;
    },    // hacer este


    Concatenate: function(array1, array2){

        for (let i = 0; i < array2.length; i++) {
            array1.push(array2[i]);
            
        }
        return array1;

    }




    
    
    

};



