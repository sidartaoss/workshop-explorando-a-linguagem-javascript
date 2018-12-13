/**
 * 
 * Aula 04.002. Criando objetos
 * 
 * 1. Vamos criar, agora, o primeiro objeto, e nos vamos brincar com varios tipos de objetos, ao logno do curso tambem.
 * 
 * 2. Como nos declaramos um objeto? Eh atraves de chaves.
 * 
 * 3. Entao, nos vamos criar, aqui, vamos para o exemplo classico, de objeto do tipo carro, por exemplo. Entao, vamos pensar, aqui, um fox, um objeto do tipo fox,
 * 
 * var fox = 
 * 
 * , nos vamos colocar aqui, abrir/fechar chaves,
 * 
 * var fox = {}
 * 
 * , aqui dentro, nos vamos colocar, nos vamos inicializar o objeto, porque vamos colocar todas as chaves e valores para as prpriedades desse objeto.
 * 
 * 4. Entao, vamos la. Nos vamos definir uma propriedade cor, e que o valor dela sera, por exemplo, prata, a cor dele, cor prata.
 * 
 * var fox = { cor: 'prata' }
 * 
 * , virgula, separando por virgula, okay? Nos colocamos a chave, dois pontos, e o valor dessa chave. Separamos por virgula, e vamos colocando as demais propriedades, por exemplo, modelo, vai ser o 'Fox'. Vamos colocar, tambem, o fabricante, que vai ser a Volkswagen, algo assim.
 * 
 * var fox = { cor: 'prata', modelo: 'Fox', fabricante: 'VW' }
 * 
 * 5. Okay? Vamos dar uma olhada no que que esse ojbeto vai mostrar no log?
 * 
 * console.log(fox);
 * 
 * 6. Ao executar, mostrou,
 * 
 * fox { cor: 'prata', modelo: 'Fox', fabricante: 'VW' }
 * 
 * , oui seja, mostrou as propriedades deste objeto. Olha so, vamos dar uma olhada no typeof de fox?
 * 
 * console.log(typeof fox);
 * 
 * 7. O que que ele eh? Ele eh um objeto.
 * 
 * 8. Entao, essa eh uma das formas de a gente criar objeto em Javascript, nos vamos ver outras formas ainda.
 * 
 * 9. Como nos podemos acessar as propriedades desse objeto fox aqui no Javascript?
 * 
 * 10. Tem duas formas que nos podemos acessar. Nos podemos acessar fox., e, ai, coloca a chave, pode ser cor, modelo, ou fabricante. Vamos primeiro mostrar a cor,
 * 
 * console.log('Cor do fox:', fox.cor);
 * 
 * , retornou 'Cor do fox: prata'.
 * 
 * 11. Vamos pintar, aqui? Vamos pintar ele de branco,
 * 
 * // pintando o fox
 * fox.cor = 'Branco';
 * 
 * , e vamos dar um log, 'Fox depois de pintado',
 * 
 * console.log('Fox depois de pintado:', fox.cor);
 * 
 * 12. Aqui, console.log('Cor do fox:', fox.cor);, nos lemos a propriedade, e, agora, em fox.cor = 'Branco';, nos estamos definindo um valor para essa propriedade, nos estamos alterando o objeto. Cor, agora, passou a ser Branco, ou seja, nos alteramos esse objeto fox.
 * 
 * 13. Qual a outra forma de a gente acessar? 
 * 
 * 14. Nos podemos fazer, tambem, usando assim, 
 * 
 * fox['']
 * 
 * , abrimos chaves e colocamos o nome da propriedade por string, entao, por exemplo, 'modelo',
 * 
 * fox['modelo']
 * 
 * 15. Entao, vamos dar um log nessa propriedade,
 * 
 * console.log('Modelo:', fox['modelo']);
 * 
 * 16. Vamos executar e dar uma olhada, retornou:
 * 
 * Modelo: Fox
 * 
 * , eh a mesma coisa, nos poderiamos atribuir a um valor aqui, ou ler, como fizemos aqui.
 * 
 * 17. Normandes, qual das duas eh a melhor?
 * 
 * 18. As duas sao nem melhor nem pior. A questao eh que essa segunda forma, fox['modelo'], aqui, uma forma mais dinamica, nos acessamos a propriedade atraves de string. Isso significa que nos podemos ter, aqui, alguma regra que as propriedades de um objeto venham informadas de um outro local.
 * 
 * 19. Entao, nos podemos passar aqui, isso aqui pode ser uma variavel, e essa variavel nos podemos usar para acessar a propriedade de algum objeto.
 * 
 * 20. Entao, eh importante nos sabermos das duas. Qual que voce mais usa, Normandes? Bom, provavelmente, o instrutor usa bem mais essa aqui, fox.cor, essa segunda forma, na forma dinamica, nos vamos usar em casos especiais, onde nos possamos estar com alguma logica bem especifica para acessarmos, mas eh usada tambem, as duas sao certas, as duas sao legais de usar.
 * 
 * 21. O instrutor falou, na aula teorica, que nos conseguimos adicionar uma nova propriedade no objeto depois de ele pronto. Entao, o objeto fox ja esta pronto, neste momento, ele ja esta pronto. Como que nos conseguimos adicionar?
 * 
 * 22. Eh simples. Nos podemos vir aqui e,
 * 
 * fox.peso
 * 
 * , nas duas formas, ou, na segunda forma, que eh mais dinamica, e adicioinar aqui, por exemplo, 1100 quilos,
 * 
 * fox.peso = 1100;
 * 
 * Vamos mostrar o log inteiro, para a gente ver o objeto inteiro alterado,
 * 
 * console.log(fox);
 * 
 * 23. Olha so aqui embaixo,
 * 
 * { cor: 'Branco', modelo: 'Fox', fabricante: 'VW', peso: 1100 }
 * 
 * , olha so que a nova propriedade foi adicionada ao objeto. Nao existia peso, e nos adicionamos. 
 * 
 * 24. Entao, nos conseguimos, agora que ela existe, nos conseguimo ler ela tambem.
 * 
 * 25. E se eu ler uma propriedade que nao existe, Normandes?
 * 
 * 26. Vamos ver aqui o que que pode acontecer. Vamos dar um log aqui, 
 * 
 * /**1.0, 1.6, etc
 * console.log('Potencia:', fox.potencia);
 * 
 * 27. Ao executar, olha so o que que retornou?
 * 
 * 28. undefined. Por que? Potencia nao existe la dentro desse objeto. Nao tem, nao tem potencia, entao, retornou undefined.
 * 
 * 29. Que mais que a gente pode fazer? Ah, eh claro, vamos falar sobre as funcoes, aqui, como eh que podemos definir uma funcao dentro  do objeto?
 * 
 * 30. O instrutor ja nos falou, na aula teorica, eh uma propriedade e um valor. Esse valor tem um tipo, no caso, aqui, eh uma string. No caso do peso, eh um number, e se nos definirmos o valor de uma propriedade como sendo uma funcao?
 * 
 * 31. Entao, vamos la, 
 * 
 * fox.ligar = 
 * 
 * , da mesma forma, so que, agora, ao inves de atribuir um valor, uma string, ou um numero, nos vamos atribuir uma funcao, uma function
 * 
 * fox.ligar = function() {
 * 
 * };
 * 
 * , simples assim mesmo. E como eh que eh essa function?
 * 
 * 32. Nos declaramos uma function assim, function, nome, abre/fecha parenteses, abre/fecha chaves e, entre as chaves, coloca o codigo da function.
 * 
 * function xxx() {
 * 
 * }
 * 
 * 33. Eh da mesma forma na function expression, nos abrimos/fechamos parenteses em function(), e abrimos/fechamos chaves e, dentro das chaves, nos podemos escrever o codigo que nos desejarmos.
 * 
 * var fox.ligar = function() { console.log('Ligando o carro!'); };
 * 
 * , assim.
 * 
 * 34. Vamos ver? Vamos dar uma olhada, aqui, no objeto fox?
 * 
 * console.log(fox);
 * 
 * 35. Retornou:
 * 
 * { cor: 'Branco',
  modelo: 'Fox',
  fabricante: 'VW',
  peso: 1100,
  ligar: [Function] }
 * 
 * , ligar, agora, nao vai mostrar o codigo da funcao, mas ele vai mostrar o tipo de dado, entao, ele fala, ligar eh uma funcao, dentro de fox, dentro do objeto fox.
 * 
 * 36. E, ai, nos poderiamos, entao, chamar esse metodo, no caso, essa funcao,
 * 
 * fox.ligar
 * 
 * , como eh que nos chamamos uma funcao? Abre/fecha parenteses,
 * 
 * fox.ligar();
 * 
 * , entao, abre/fecha parenteses, nos conseguimos chamar ela, tem que aparecer, aqui embaixo, 'Ligando o carro'.
 * 
 * 37. Apareceu: 'Ligando o carro'. 
 * 
 * 38. Normandes, tem que colocar tudo em uma linha so aqui?,
 * 
 * fox.ligar = function() { console.log('Ligando o carro'); };
 * 
 * 39. Nao, nos podemos dar um <ENTER> aqui,
 * 
 * fox.ligar = function() { 
 *      console.log('Ligando o carro'); 
 * };
 * 
 * 40. E como eh que nos criamos um objeto, ja colocando uma funcao dentro dele? 
 * 
 * 41. Vamos criar um outro aqui, vamos criar um objeto celta, por exemplo,
 * 
 * var celta = {}
 * 
 * , e nos precisamos colocar sempre na mesma linha, Normandes?
 * 
 * 42. Nao, tambem nao, nos podemos vir aqui, <ENTER>, e comecar a colocar uma propriedade em cada linha, entao, por exemplo, cor: branco, virgula, podemos colocar a virgula na linha de cima ou na linha debaixo, o instrutor costuma colocar sempre na linha de cima, por ultimo,
 * 
 * var celta = {
 *      cor: 'branco',
 *      modelo: 'celta',
 *      fabricante: 'GM',
 * 
 * };
 * 
 * , e vamos declarar aqui uma funcao, ligar,
 * 
 * var celta = {
 *      cor: 'branco',
 *      modelo: 'celta',
 *      fabricante: 'GM',
 *      ligar: function() {
 *                  console.log('Ligando o carro');
 *             }
 * };
 * 
 * , function, abre/fecha parenteses, coloca chaves, e coloca aqui, entre as chaves, o codigo da funcao. Atencao, nao termina com ponto e virgula, eh sempre com virgula, aqui, para separar as propriedades do objeto.
 * 
 * 43. Vamos dar uma olhadinha no Celta, agora?
 * 
 * console.log('celta', celta);
 * 
 * 44. Retornou:
 * 
 *  celta { cor: 'branco',
    modelo: 'celta',
    fabricante: 'GM',
    ligar: [Function: ligar] }

 * , ou seja, o celta eh o objeto, onde tem a funcao ligar aqui embaixo.
 *
 * 45. Eh mais correto chamarmos de funcao, ao inves de chamarmos de metodo, apesar que chamar de metodo nao estar errado, segundo o instrutor.
 * 
 * 46. Entao, essa eh a forma que o instrutor queria nos mostrar, existem outras formas de criar um objetos, essa eh a forma mais basica, mais direta, de a gente criar um objeto.
 * 
 * 47. E eh usado, essa forma assim, de criar objeto, Normandes?
 * 
 * 48. Eh, eh usada. Nos iremos ver que tem plugins, por exemplo, tem alguns plugins Javascript, que para configurar ele, ele espera um objeto com varias propriedades para a gente configurar ele, por exemplo, com varias opcoes. Entao, sim, eh uma forma bem util de se criar configuracoes de plugins, e nos criarmos os nossos programas tambem. 
 * 
 * 49. Fim da Aula 04.002. Criando objetos
 * 
 */

 var fox = { cor: 'prata', modelo: 'Fox', fabricante: 'VW' };
 console.log('fox', fox);
 
 console.log(typeof fox);
 
 console.log('Cor do fox:', fox.cor);
 
 // pintando o fox
 fox.cor = 'Branco';
 console.log('Fox depois de pintado:', fox.cor);
 
 console.log('Modelo:', fox['modelo']);
 
 fox.peso = 1100;
 console.log(fox);
 
 /**1.0, 1.6, etc */
 console.log('Potencia:', fox.potencia);
 
 fox.ligar = function() { console.log('Ligando o carro'); };
 console.log(fox);
 
 fox.ligar();

 var celta = {
          cor: 'branco',
          modelo: 'celta',
          fabricante: 'GM',
          ligar: function() {
                      console.log('Ligando o carro');
                 }
};

console.log('celta', celta);
