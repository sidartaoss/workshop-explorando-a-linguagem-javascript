/**
 * Aula 05.007. Elementos do Array
 * 
 * 1. Ate agora, o instrutor colocou mais strings para nos entro de um array.
 * 
 * 2. Entao, arrays so funcionam com strings?
 * 
 * 3. Nao.
 * 
 * 4. Em um array, nos podemos colocar qualquer tio de dados.
 * 
 * 5. Normandes, posso misturar, colocar uma string, colocar um numero, colocar um objeto, colocar uma funcao?
 * 
 * 6. Sim. Pode. pode ser tudo misturado. Vamos fazer um exemplo aqui, para nos vermos.
 * 
 * 7. Entao, olha so. Vamos imaginar, ai, temos que usar a imaginacao, mesmo que, as vezes, eh dificil acontecer essa situacao, mas pode ser que exista.
 * 
 * 8. Entao, vamos imaginar um carro aqui, e, ai, dentro, vamos colocar, aqui, na primeira posicao, eh uma string, 'Fox', na segunda posicao, vamos colocar o numero de portas, por exemplo, 4, vamos colocar um objeto, aqui, na posicao 2, entao, nos podemos declarar, aqui, um objeto. Nessa posicao, vamos colocar um objeto com propriedades de acessorios, { som: 'Pioneer', banco: 'Couro' }
 * 
 * var fox = ['Fox', 4, { som: 'Piorneer', banco: 'Couro' } ]
 * 
 * , entao, na posicao 2, tem um objeto. na posicao 3, eu posso colocar uma funcao, Normandes?
 * 
 * 9. Sim, pode colocar uma funcao, aqui,
 * 
 * var fox = ['Fox', 4, { som: 'Piorneer', banco: 'Couro' }, function() {} ]
 * 
 * 10. Nossa, esta ficando confuso escrever isso aqui assim, nao eh? 
 * 
 * 11. Entao, vamos fazer o seguinte, nos vamos criar aqui, um objeto acessorio, para o objeto acessorio dentro do array fox,
 * 
 * var acessorio = { som: 'Piorneer', banco: 'Couro' };
 * 
 * var fox = ['Fox', 4, acessorio, function() {} ]
 * 
 * 
 * 12. Vamos declarar uma funcao aqui, funcao ligar,
 * 
 * var ligar = function () {
 *      console.log('Ligando o carro...');
 * }
 * 
 * e, ao infes de nos colocarmos, dentro do array, nos vamos passar o nome da funcao dentro do array,
 * 
 * var fox = ['Fox', 4, acessorio, ligar];
 * 
 * 13. Poderia declarar a funcao direto aqui, dentro dos colchetes da variavel fox? 
 * 
 * 14. Sim, poderia, da certo, mas, ai, vai comecar a ficar bem confuso, vai ficar meio misturado aqui as coisas.
 * 
 * 15. Entao, olha so, nesse array fox, nos declaramos uma string, na osicao 0, na posicao 1, um number, na posicao 2, um objeto, na posicao 3, uma funcao.
 * 
 * 16. E, ai, como eh que a gente pode usar isso aqui? 
 * 
 * 17. Primeiro, vamos dar uma olhada aqui, o que que ele mostra, quando nos mandamos imprimir esse array? 
 * 
 * console.log(fox);
 * 
 * 18. Ele vai mostrar la,
 * 
 * [ 'Fox',
  4,
  { som: 'Pionner', banco: 'Couro' },
  [Function: ligar] ]
  
 * 
 * , uma string, o numero, e, aqui, ele vai mostrar o objeto, e vai falar que tem uma funcao, aqui na ultima posicao.
 * 
 * 19. Okay? Se nos quisermos, vamos acessar, por exemplo, vamos mostrar qual eh a marca do som ali, entao, fox, para nos acessarmos aqui, esse objeto, posicao 0, 1, 2, entao, na posicao 2, fox[2]. Entao, nessa posicao 2, nos temos um objeto, certo? Eh esse objeto acessorio aqui,
 * 
 * var fox = [ 'Fox', 4, acessorio, ligar ];
 * 
 * 20. fox[2].som, e vamos ver se vai dar certo,
 * 
 * console.log(fox[2].som);
 * 
 * , okay, vamos executar.
 * 
 * 21. Retornou: 'Pioneer'.
 * 
 * 22. Vamos, agora, mostrar, vamos executar essa funcao?
 * 
 * 23. Como eh que nos fazemos para executar essa funcao?
 * 
 * 24. Primeiro, nos precisamos receber essa funcao, pegar essa funcao. Esta em qual posicao?
 * 
 * 25. Esta na posicao 3,
 * 
 *              0       1   2           3
 * var fox = [ 'Fox',   4,  acessorio,  ligar ];
 * 
 * , beleza, como eh que nos fazemos para executar uma funcao? O instrutor ja nos falou isso. Para a gente executar uma funcao, a gente abre/fecha parenteses,
 * 
 * fox[3]();
 * 
 * , certo? Entao, isso aqui, fox[3](), nos vamos executar essa funcao ligar. Olha so.
 * 
 * 26. Retornou, no Console, 'Ligando o carro...'.
 * 
 * 27. Se nos quisermos passar parametro para essa funcao?
 * 
 * 28. Beleza. Poderia colocar, aqui, vamos colocar aqui, o que que nos podemos pensar aqui? Vamos colocar uma variavel, um 'a' aqui, e vamos concatenar aqui, 'Ligando o carro...', a,
 * 
 * var ligar = function(a) {
 *      console.log('Ligando o carro...', a);
 * }
 * 
 * 29. E, na chamada, nos poderiamos colocar, 'agora'
 * 
 * fox[3]('agora');
 * 
 * , retornou: 'Ligando o carro... agora!'
 * 
 * 30. Olha la, ele passou esse parametro que nos colocamos, 'agora', passou para function (a), que passou para: console.log('Ligando o carro...', a);
 * 
 * 31. Entao, nos podemos colocar qualquer tipo de dados no array, se nos comecamos com string, nos podemos ter, depois, um number, ter um objeto, ter uma funcao, ter um outro array, poderia colocar, aqui, um outro array,
 * 
 * var fox = [ 'Fox', 4, acessorio, ligar, [] ];
 * 
 * , array de array. O instrutor nao gosta muito disso, array de array, comeca a ficar muito confuso, ficar meio cheio de coisas, a estrutura de dados ali comeca a ficar muito complicada, entao, se nos vemos que precisamos disso, talvez, nos tentamos separar mais, pensar melhor ali no nosso programa.
 * 
 * 32. Mas, se nos precisarmos, devemos nos lembrar disso, nos podemos colocar qualquer tipo de dados dentro do nosso array, inclusive outro array.
 * 
 * 33. Fim da Aula 05.007. Elementos do Array.
 * 
 */

/**Version 1. 
var fox = [ 'Fox', 4, { som: 'Pionner', banco: 'Couro' }, function() {} ]
**/

/**Version 2. 
var acessorio = { som: 'Pionner', banco: 'Couro' };
var fox = [ 'Fox', 4, acessorio, function() {} ];
**/

/**Version 3. */
var acessorio = { som: 'Pionner', banco: 'Couro' };
/**
var ligar = function () {
    console.log('Ligando o carro...');
}
**/
var ligar = function (a) {
    console.log('Ligando o carro...', a);
}
var fox = [ 'Fox', 4, acessorio, ligar ];

console.log(fox);

console.log(fox[2].som);

/**Version 1
fox[3]();
**/

/**Version 2 */
fox[3]('agora!');