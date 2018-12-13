/**
 * Aula 03.004. Criando Funcoes
 * 
 * 1. Vamos criar as nossas primeiras funcoes aqui no JavaScript. Como o instrutor ja disse, as funcoes sao be poderosas no Javascript, e nos vamos, bem devagarzinho, aos poucos, evoluindo, o instrutor vai nos mostrando mais e mais conceitos das funcoes a medida que o workshop avanca.
 * 
 * 2. Existem duas formas principais para a gente criar as funcoes. 
 * 
 * 3. A primeira delas, talvez a que nos mais conhecamos, eh chamada de function declaration, declaracao de funcao, em uma traducao literal disso aqui, que seria, vamos criar a funcao mais famosa, que eh a de somar, a gente poderia criar assim, function somar, aqui, nos recebemos os parametros, fazemos a soma, podemos colocar uma variavel de resultado, por exemplo, resultado = a + b, e retornamos o resultado,
 * 
 * function somar(a, b) {
 *      var resultado = a + b;
 *      return resultado;
 * }
 * 
 * 4. Ou, nos podemos, simplesmente, retornar a + b,
 * 
 * function somar(a, b) {
 *      return a + b;
 * }
 * 
 * , podemos fazer dessa forma assim tambem. Essa seria a forma function declaration.
 * 
 * 5. Qual seria a outra forma de a gente declarar uma funcao?
 * 
 * 6. Eh a function expression, expressao de funcao, onde nos declaramos o nome de uma variavel, subtrair, por exemplo, e atribuimos a uma funcao, onde nos recebemos, aqui, os parametros a e b e, ai, nos retornamos da mesma forma, a - b,
 * 
 * var subtrair = function (a, b) {
 *      return a - b;
 * }
 * 
 * 7. Essas sao as formas de a gente criar as funcoes. Quais sao as diferencas delas? Vamos estudar isso daqui um pouco.
 * 
 * 8. Bom, vamos ver aqui. Quando nos declaramos, fazemos a function declaration, nos podemos vir aqui e escrever, 
 * 
 * var soma = somar(2, 3);
 * 
 * , isso aqui vai ter o resultado da soma. E, ai, nos podemos mostrar aqui,
 * 
 * console.log('2 + 3', soma);
 * 
 * , eh o resultado da soma.
 * 
 * 9. Executamos, e vemos que 2 + 3 eh igual a 5. 
 * 
 * 10. E subtrair, 
 * 
 * var subtraido = subtrair(6, 2);
 * console.log('6 - 2 =', subtraido);
 * 
 * 11. Por enquanto, tudo certo. Ah, Normandes, mas, qual a diferenca entre as duas?
 * 
 * 12. Tem alguma diferenca de funcionalidade?
 * 
 * 13. Tem.
 * 
 * 14. Mas, antes, o instrutor gostaria de falar que tem gente que prefere fazer a funcao noi estilo function declaration, e tem gente que prefere fazer a funcao no estilo function expression.
 * 
 * 15. Qual que eh a forma mais correta? 
 * 
 * 16. As duas estao corretas, tem algumas diferencas, se nos formos fazer um debug mais avancado, mas os navegadores de hoje ja ajudam bastante tambem. Mas, enfim, na forma de funcionar, as duas vao funcionar, basicamente, da mesma forma. Entao, eh mais questao de preferencia.
 * 
 * 17. Porem, contudo, entretanto, existe uma diferenca aqui importante. Vamos passar aqui a function declaration la para baixo. O que que nos estamos fazendo aqui agora? 
 *
 // function expression
 var subtrair = function (a, b) {
     return a - b;
 }

 var soma = somar(2, 3);
 console.log('2 + 3 =', soma);
 
 var subtraido = subtrair(6, 2);
 console.log('6 - 2 =', subtraido);
 
 // function declaration
 function somar(a, b) {
    var resultado = a + b;
    return resultado;
 }
 * 
 18. Nos estamos chamando, o programa eh executado de cima para baixo, certo? Nos estamos chamando a funcao somar(), mas a funcao somar() ainda nao foi definida aqui em cima. Sera que isso daqui vai dar certo? Vamos executar.

 19. Executamos e o resultado eh o mesmo, ou seja, funcionou. Ah, Normandes, beleza, entao, quer dizer que nos podemos chamar uma funcao, mesmo sem ela ter sido declarada, que vai funcionar? Vamos ver?

 20. Vamos passar a function expression la para baixo tambem,

 var soma = somar(2, 3);
 console.log('2 + 3 =', soma);
 
 var subtraido = subtrair(6, 2);
 console.log('6 - 2 =', subtraido);
 
 // function declaration
 function somar(a, b) {
    var resultado = a + b;
    return resultado;
 }

 // function expression
  var subtrair = function (a, b) {
    return a - b;
 }

 , so para a gente brincar um pouquinho aqui. Entao, somar() a gente viu que funciona. E o subtrair()?, uma function expression?, vai funcionar? Vamos ver? Vamos executar.

 21. TypeError: subtrair is not a function. Opa!, deu um erro aqui. 2 + 3 funcionou, que foi o console.log('2 + 3 =', soma);, mas, quando nos tentamos chamar a funcao subtrair(), deu o erro: subtrair is not a function, ou seja, subtrair nao eh uma funcao e nao podemos chamar essa funcao, deu errado.

 22. Ta, Normandes, qual que eh a diferenca? 

 23. A diferenca eh que, no function expression, o Hoisting nao funciona. No caso de uma function declaration, o Hoisting ja funciona, ou seja, quando esse codigo comecar a ser interpretado pelo Javascript, ele vai mover essa funcao somar(), que eh a function declaration, na hora que ele for interpretar, ele vai move-la la para cima e fala, 'Beleza, agora, pode executar',

 // function declaration
 function somar(a, b) {
    var resultado = a + b;
    return resultado;
 }

 var soma = somar(2, 3);
 console.log('2 + 3 =', soma);
 
 var subtraido = subtrair(6, 2);
 console.log('6 - 2 =', subtraido);

 // function expression
  var subtrair = function (a, b) {
    return a - b;
 }

 , ai, a funcao somar() ja existe. Diferente da function expression, em que ele nao vai levar a funcao la para cima, ele nao vai fazer essa inicializacao da funcao la em cima, por isso que o subtrair() nao funciona.

 24. Ah, Normandes, entao, se eu for comecar a usar assim, usando function expression, vamos supor que gostemos mais de usar function expression, comecamos a programar em Javascript, e achamos mais interessante assim. 

 25. Beleza, nao tem problema, so que nos precisamos lembrar de colocar la em cima a declaracao da funcao.

 26. Ah, Normandes, mas, ai, eu estou programando ali no dia-a-dia, eu tenho que ficar pensando nisso? Sabe qual que eh a estrategia que o instrutor usa?

 27. Sempre declare a funcao antes de chama-la. Sempre.

 28. A regra que o instrutor usa eh essa. O instrutor sempre, entao, tenta declarar todas as funcoes antes de usa-las, entao, nesse codigo aqui, se o instrutor fosse fazer algo assim, ele faria, com certeza, dessa forma,

 // function declaration
 function somar(a, b) {
    var resultado = a + b;
    return resultado;
 }

 // function expression
  var subtrair = function (a, b) {
    return a - b;
 }

 var soma = somar(2, 3);
 console.log('2 + 3 =', soma);
 
 var subtraido = subtrair(6, 2);
 console.log('6 - 2 =', subtraido);

 , ou seja, declararia todas as funcoes, independente se eh function expression, se eh function declaration, declararia tudo para depois chamar. Okay? Essa eh a dica que o instrutor quer nos dar, aqui dessas funcoes. 

 29. Tem mais duas coisas, aqui, muito importantes, que o instrutor quer nos mostrar, mais 3 coisas, na verdade.

 30. Primeiro, o return. O return nao eh obrigatorio ter em uma funcao. E se nos estamos acostumados com Java, vamos so fazer um paralelo aqui. No Java, a gente coloca, no Java, a gente tem a funcao somar(), nos retornariamos, por exemplo, um int,

 int somar(int a, int b) {
     return a + b;
 }

 , seria algo assim. Ai, nos seriamos obrigados a retornar um valor, a + b, por exemplo, porque, no Java, nos precisamos informar o que que nos estamos retornando. No Javascript, nos nao temos que informar, nao se faz nada disso:

 function int somar(a, b) {
     return a + b;
 }

 function Number somar(a, b) {
     return a + b;
 }

 function String somar(a, b) {
     return a + b;
 }

 31. O Javascript, devido a tipagem dinamica, nao precisa colocar aqui na function o que esta retornando, porque eh tipagem dinamica, entao, nao precisamos pensar nisso.

 32. E, por isso, return nao eh obrigatorio tambem. Nao somos obrigados a termos um return e uma funcao.

 33. Significa que, se executarmos isso aqui, em uma funcao, dessa forma, 
 
  function somar(a, b) {
     // return a + b;
  }
 
 o somar que estamos chamando aqui, ou seja, estamo chamando a funcao somar, passando 2 e 3, e nos estamos pegando o resultado, o retorno dela, mas nos comentamos o return, sim, comentamos, mas, quase tudo no Javascript retorna alguma coisa, se nos nao colocamos return, ele vai retornar alguma coisa de todo jeito. E sabe o que que ele vai retornar?

 // function declaration
 function somar(a, b) {
    // return a + b;
 }

 var soma = somar(2, 3);
 console.log('2 + 3 =', soma);

 34. Adivinha.

 35. undefined. Vamos executar.

 36. Retornou: 2 + 3 = undefined

 37. Entao, chamamos uma funcao que nao retorna nada, nao tem o return de alguma coisa, vai retornar undefined.

 38. Vamos descomentar o return em somar() e, agora, volta a funcionar.

 39. Se nao puser return, como nao eh obrigatorio ter um return na funcao, se nao colocarmos, retorna sempre undefined.

 40. O que mais que o instrutor quer nos mostrar aqui? Uma coisa muito legal no Javascript. Eh que, dentro de toda funcao, existe um carinha chamado, uma variavel chamada arguments.

 41. Entao, vamos coloca-la aqui na funcao somar(),

 function somar(a, b) {
     console.log('arguments ->', arguments);
     return a + b;
 }

  , para nos vermos o que que essa variavel vai imprimir. Okay? Vamos executar. Olha so. Retornou: [Arguments] { '0': 2, '1': 3 }

  42. Nos ainda vamos ver, isso aqui, { '0': 2, '1': 3 }, eh um objeto do Javascript. Nos ainda vamos entender melhor como isso funciona no Javascript. Mas o que ele esta querendo nos dizer eh: na posicao 0, dessa funcao somar(), nos recebemos o argumento de valor 2, na posicao 1, ou seja, o primeiro argumento comeca do zero, que foi o 2, e o segundo argumento, que eh na posicao 1, foi o valor 3.

  43. Por que que isso eh interessante?

  44. O instrutor usa esse 'arguments' direto quando esta estudando uma API nova, ou, as vezes, esqueceu o que que algum evento lanca, alguma coisa assim, entao, vamos supor que nao sabemos o que que o somar vai receber, ou seja,

  function somar() {
      retun a + b;
  }

  , mas nos podemos chamar aqui, no somar(), passando o 2 e o 3, mesmo que, na assinatura da funcao, nao tenha o 'a' e o 'b', nos podemos fazer isso,

  function somar() {
      // return a + b;
  }

  var soma = somar(2, 3);

  , so vai dar um probleminha, porque nao tem o 'a' e o 'b' para retornar, entao, vamos deixar comentado.

 45. Ao executar, retornou:
 
 arguments -> [Arguments] { '0': 2, '1': 3 }
 2 + 3 = undefined

 46. Vai aparecer o undefined, porque nao estamos retornando nada, mas o instrutor quer nostrar o 'arguments', ou seja, nos estamos passando o 2 e o 3, mas, na assinatura do metodo, nao tem nada definido.

 47. Entao, ao executar, continua mostrando:

 arguments -> [Arguments] { '0': 2, '1': 3 }

 , se mudarmos, na chamada da funcao somar(), para 2, 5, vai retornar:

 arguments -> [Arguments] { '0': 2, '1': 5 }

 , se voltarmos para 2, 3, vai retornar:

 arguments -> [Arguments] { '0': 2, '1': 3 }

 48. Entao, por que que esse cara eh interessante? Como o instrutor disse que usa-o quando esta criando algum programa um pouco mais complexo, e nao lembra o que que o evento dispara, e, as vezes, a gente ainda vai estudar eventos, o evento dispara e vai chamar em uma funcao e essa funcao recebe alguns argumentos, eu nao lembro quais sao esses argumentos, ai, eu coloco la,

 console.log('arguments', arguments);

 , ai, eu vejo quais sao, ai, 'Ah, tah, lembrei, a ordem que eles sao mostrados', ai, eu mesmo posso colocar a, e b, na assinatura, e descomento o return:

 function somar(a, b) {
    return a + b;
 }

 49. E, ai, tudo volta a funcionar. Ineressante, nao eh? O instrutor gosta bastante desse 'arguments'.

 50. E, por ultimo, para nos deixar com um gostinho assim, nossa, que doideira, no Javascript, uma funcao tambem eh um tipo de dado.

 51. Se nos dermos um typeof em subtrair(), olha so o que que vai acontecer,

 console.log('typeof subtrair', typeof subtair);

 52. Ao executar, retornou:

 typeof subtrair function

 53. Olha so que interessante, entao, o typeof, uma funcao eh um tipo de dado tambem, que eh o tipo de dado Function.

 54. Isso nos sera util mais para frente, quando o instrutor nos mostrar que consegue, entao, passar, se ela eh um tipo de dado, nos podemos pegar essa funcao e passar como argumento para uma outra funcao, por exemplo.

 55. Fim da Aula 03.004. Criando Funcoes.
 */



 // function declaration
 /**Version 1 */
 /**
 function somar(a, b) {
     var resultado = a + b;
     return resultado;
 }

 function somar(a, b) {
     return a + b;
 }
**/

 // function expression
 var subtrair = function (a, b) {
     return a - b;
 }

 /**  var soma = somar(2, 3); **/
 var soma = somar(2, 5);
 console.log('2 + 3 =', soma);
 
 var subtraido = subtrair(6, 2);
 console.log('6 - 2 =', subtraido);
 
 // function declaration
 /** function somar(a, b) { **/
 function somar() {
    // var resultado = a + b;
    // return resultado;
    console.log('arguments ->', arguments);
    // return a + b;
 }

 // function expression
 /** 
 var subtrair = function (a, b) {
    return a - b;
 }
 */

 console.log('typeof subtrair', typeof subtrair);
 