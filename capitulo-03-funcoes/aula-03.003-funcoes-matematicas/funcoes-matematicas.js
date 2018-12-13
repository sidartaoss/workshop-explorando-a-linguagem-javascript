/**
 * Aula 03.003. Funcoes Matematicas
 * 
 * 1. Existe um objeto do Javascript chamado de Math, que possui varias funcoes para a gente usar, varias funcoes matematicas.
 * 
 * 2. O instrutor achou importante destacar esse objeto aqui para nos mostrar algumas funcoes matematicas que nos podemos usar nos nosso sistema, e tambem nos mostrar que algo como essa API, esse objeto Math, que existe no Javascript, a gente tambem consegue criar algo assim, e nos vamos aprender a fazer isso tambem, nos vamos ver que isso deixa o codigo bem organizado.
 * 
 * 3. Entao, vamos brincar um pouquinho com algumas funcoes aqui do objeto Math, funcoes matematicas.
 * 
 * 4. Bom, sao varias funcoes, vamos colocar, por exemplo, o Math.min(), ele retorna o valor minimo dos numero sque nos passarmos aqui.
 * 
 * 5. Entao, se nos passarmos, imaginemos que nos recebemos uma lista de numeros, por algum motivo, e nos queremos saber qual eh o menor valor desses, entao, vamos colocar algo assim,
 * 
 * Math.min(3, 5, 1, 6, 10);
 * 
 * , e, ai, nos queremos saber, qual que eh o valor minimo disso? Isso aqui sera retornado, entao, vamos supor que isso fosse menor nota,
 * 
 * var menorNota = Math.min(3, 5, 1, 6, 10);
 * 
 * e, ai, nos podemos colocar aqui o log, 'Menor nota',
 * 
 * console.log('Menor nota:', menorNota);
 * 
 * 6. Okay, se nos executarmos, ele vai retornar ja o 1, ele ja analisa. Entao, isso eh util para caramba, uma hora nos vamos precisar fazer uma logica assim, nao precisa fazer loops para ficar verificando, so usar esse Math.min(). 
 * 
 * 7. Assim como nos temos o maiorNota, passando as mesmas notas aqui,
 * 
 * var maiorNota = Math.max(3, 5, 1, 6, 10);
 * 
 * , e vamos colocar, agora, 'Maior nota',
 * 
 * console.log('Maior nota', maiorNota);
 * 
 * 
 * 8. Entao, a menor nota foi 1 e a maior nota foi 10. 
 * 
 * 9. A gente tem tambem o Math.round(), que tambem eh bem util, ele arredonda o numero para a gente, entao, vamos colocar, aqui, imaginemos que a gente quer saber a temperatura, nos queremos saber so em numeros inteiros, nao precisamos saber que esta 22.5 graus, queremos saber que esta 22 graus, alguma coisa assim. Entao, se nos colocarmos la, 22.3, 
 * 
 * var temperatura = Math.round(22.3);
 * 
 * , ele vai arredondar para 22. Agora, se nos colocarmos 22.7, ele vai arredondar para 23,
 * 
 * var temperatura = Math.round(22.7);
 * 
 * , ou seja, ate o decimal .4, ele vai arredonda para baixo, a partir do decimal .5, ele arredonda para cima.
 * 
 * , entao, decimais .1, .2, .3, .4, ele arredonda para baixo, A partir de .5, .6, .7, .8, .9, ele arredonda para 23, ou seja, para cima.
 * 
 * 10. Tem tambem o Math.random(), que gera um numero aleatorio, vamos ver como que eh esse numero?,
 * 
 * var valorAleatorio = Math.random();
 * console.log('valor aleatorio', valorAleatorio);
 * 
 * 11. Ao exeutarmos, ele gera sempre um numero aleatorio, entre 0 e 1, incluindo o 0 e tirando o 1. Vamos executar mais uma vez, toda vez que executarmos, o numero diferente.
 * 
 * 12. Ah, eu posso usar isso para fazer o que? 
 * 
 * 13. Gerar os numeros da Mega-Sena. Entao, nos poderiamos pegar esse cara, valorAleatorio, os numeros da Mega-Sena sao entre 1 e 60. Se, aqui, gera entre 0 e 1, nos podemos fazer o seguinte, nos vamos multiplicar por 60, 
 * 
 * var numero = valorAleatorio * 60;
 * 
 * 14. Entao, nos vamos estar gerando entre 0 e e alguma coisa antes de 60.
 * 
 * 15. Ao executarmos, vemos que nunca vai dar ais do que 60, impossivel, porque valorAleatorio eh sempre entre 0 e 1, e estamos multiplicando por 60, entao, nunca vai passar de 60, mas pode ser que de 0, pode ser que, em determinado momento, Math.random() retornou 0, e, ai, o que nos podemos fazer?
 * 
 * 16. Nos podemos, entao, pegar aqui, vamos colocar numeroMega =, nos vamos pegar esse numero, vamos pegar uma funcao de Math, Math.floor, a funcao floor sempre arredonda para baixo, entao, so para nos mostrarmos aqui,
 * 
 * var numeroMega = Math.floor(4.2);
 * console.log('numero da mega:', numeroMega);
 * 
 * 17. 4.2 vai arredondar para 4. O 4.9 tambem sera arredondado para 4.
 * 
 * 18. Por que estamos fazendo isso? Porque iremos pegar esse numero aqui, ou seja, numero, ou seja, esse numero aleatorio que foi gerado entre 0 e 59, e vamos arredondar sempre para baixo. Entao, deu 59.3, vai dar 59, 0.1 vai retornar 0.
 * 
 * 19, Ai, para o numero da Mega, nos vamos pegar o Math.floor(numero) mais 1, por exemplo,
 * 
 * var numeroMega = Math.floor(numero) + 1;
 * 
 * 20. E, ai, nos poderiamos colocar,
 * 
 * console.log('numero da mega:', numeroMega);
 * 
 * , em um loop, e gerar os 6 numeros que nos precisamos. 
 * 
 * 21. Ah, Normandes, mas pode ser que de repetido. Eh verdade, se der repetido, ai, a gente tem que tratar, tem que criar a logica para excluir, caso ja tenha esse numero sorteado, a gente usaria um outro, mas a gente poderia usar o que para fazer isso? 
 * 
 * 22. Um array, por exemplo. Nos vamos ver sobre arrays ainda neste curso, entao, eh so esperar um pouquinho.
 * 
 * 23. Era isso aqui que o instrutor queria nos mostrar nesta aula, mas, como o instrutor ja disse, nao eh so para nos mostrar as funcoes matematicas, eh nos mostrar que a gente pode criar aqui uma funcao, um objeto, ao inves de Math, a gente vai conseguir criar um objeto nosso e adicionar funcoes dentro desse objeto. Nos vamos aprender a fazer esse tipo de coisa ainda neste workshop.
 * 
 * Fim da Aula 03.003. Funcoes Matematicas.
 */
var menorNota = Math.min(3, 5, 1, 6, 10);
console.log('Menor nota:', menorNota);


var maiorNota = Math.max(3, 5, 1, 6, 10);
console.log('Maior nota:', maiorNota);

// var temperatura = Math.round(22.3);
// var temperatura = Math.round(22.7);
// var temperatura = Math.round(22.5);
var temperatura = Math.round(22.4);
console.log('Temperatura:', temperatura);

var valorAleatorio = Math.random();
console.log('Valor aleatorio:', valorAleatorio);

var numero = valorAleatorio * 60;
console.log('numero', numero);

/** var numeroMega = Math.floor(4.2); **/
/** var numeroMega = Math.floor(4.9); **/
var numeroMega = Math.floor(numero) + 1;
console.log('numero da mega:', numeroMega);