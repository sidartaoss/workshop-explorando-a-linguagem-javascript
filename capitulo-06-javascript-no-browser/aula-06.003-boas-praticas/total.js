/**
 * 
 *     Aula 06.002. Debug com o Developer Tools
 * 
 * 
 */
console.log('Iniciando...');

var valorElement = document.getElementById('valor');
var totalElement = document.getElementById('total');

/** console.log('valorElement', valorElement); **/

valorElement.addEventListener('keyup', function(e) {
    /** console.log('valor', valorElement.value); **/
    var total = 0;
    /**  *var valor = valorElement.value; **/
    var valor = parseFloat(valorElement.value ? valorElement.value : 0);

    /**  *total = valor; **/
    if (valor > 0 && valor < 10) {
        total = valor + valor * 0.3 + 5;
                //  1   +   0.3     +   5   = 6.3                   
                // "1"  +   1 * 0.3     +   5 = "1"     + 0.3   + 5 = "10.3"    +   5      = "10.35"
    } else if (valor >= 10 && valor < 50) {
        total = valor + valor * 0.1 + 2;
    } else {
        total = valor;
    }

    totalElement.innerHTML = total;
    
});
