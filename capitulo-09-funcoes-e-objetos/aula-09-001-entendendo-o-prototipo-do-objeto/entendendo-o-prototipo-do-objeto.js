/**
 * 
 * Aula 09.001. Entendendo o Prototipo do Objeto.
 * 
 * 1. Vamos entrar, agora, em um topico bem importante do Javascript, que eh a Heranca, entender bem como eh que ela funciona, no Javascript.
 * 
 * 2. Eh algo que, nem todo, como o instrutor ja falou, no inicio, nao eh?, muitos programadores falam, eu sei Javascript, mas, sabe?, daquele jeito bem basicao?
 * 
 * 3. E Heranca eh algo bem interessange, da gente aprender com Javascript, porque eh bastante util tambem.
 * 
 * 4. Beleza? E vamos comecar, aqui, falando que todo objeto, em Javascript, ele tem um prototipo.
 * 
 * 5. Esse prototipo seria uma propriedade que aponta para um outro objeto, ou null, caso ele nao tenha.
 * 
 * 6. Em Javascript, diferentemente de Java, nao eh?, em Java, a gente tem uma classe que herda de outra classe. No Javascript, nao existe isso, nao eh?, esse conceito de classe.
 * 
 * 7. Entao, em Javascript, os objetos, eles herdam de outros objetos, okay? Entao, essa eh a ideia que a gente vai aprender agora, atraves dos exemplo que o instrutor vai nos mostrar aqui, vai ficar bem claro isso, para o instrutor nos mostrar.
 * 
 * 8. Beleza? Eu vou comecar criando aqui um objeto bem simples, fox,
 * 
 * var fox = {
 * 
 * }
 * 
 * , por exemplo, tem o nome aqui, 'Fox', o nome desse carro, a placa, 'AAA-1111', por exemplo, fabricante, 'VW', 
 * 
 * var fox = {
 *      nome; 'Fox',
 *      placa: 'AAA-1111',
 *      fabricante: 'VW'
 * }
 * 
 * e vou criar um outro objeto gol, que tem o nome 'Gol', que tem a placa 'AAA-2222', e o fabricante 'VW', tambem,
 * 
 * var gol = {
 *      nome: 'Gol',
 *      placa: 'AAA-2222',
 *      fabricante: 'VW'
 * }
 * 
 * , okay? Vamos dar um log aqui, em fox, e em gol,
 * 
 * console.log('fox', fox);
 * console.log('gol', gol);
 * 
 * 9. Entao, olha la,
 * 
 * fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'VW' }
 * gol { nome: 'Gol', placa: 'AAA-2222', fabricante: 'VW' }
 * 
 * , eu tenho, aqui, os objetos, o toString(), aqui, do objeto, mostrou eles aqui para mim, fox e o gol.
 * 
 * 10. Beleza? Esses objetos aqui, eles apontam para um outro objeto, que eh comum a eles, Object.prototype eh o nome desse objeto.
 * 
 * 11. Fazendo um paralelo com Java, uma classe sempre estende de Object, no final das contas. No Javascript, um objeto, ele vai estender de Object.prototype, algo assim:
 * 
 * =============================|
 *             fox              |
 * ================|============|
 *  nome           |  Fox       |
 *  placa          |  AAA-1111  |
 *  fabricante     |  VW        |
 *  [[Prototype]]  |   o----------------|
 * ================|============|       |
 *                                      |       |=====================|
 *                                      |       |                     |
 * =============================|       |======>|   Object.prototype  |
 *             gol              |       |       |                     |
 * ================|============|       |       |==============|======|
 *  nome           |  Gol       |       |       |              |      |
 *  placa          |  AAA-2222  |       |       |[[Prototype]] | null |
 *  fabricante     |  VW        |       |       |              |      |
 *  [[Prototype]]  |   o----------------|       |==============|======|
 * ================|============|
 * 
 * , o objeto fox, aqui, com as propriedades, tem, la, o Prototype, o prototipo dele apontando para Object.prototype, eh o nome desse objeto, okay?
 * 
 * 12. e gol, tambem, la, tem as propriedades dele e tem la o prototipo apontando para Object.prototype.
 * 
 * 13. Beleza? E esse objeto, oh, de Object.prototype, repara, oh, que o instrutor colocou so uma caixinha de proposito, porque esse objeto eh o mesmo que nesses dois objetos aqui, fox e gol.
 * 
 * 14. Vamos ver? Tem como, aqui, eu recuperar o prototipo desses objetos? 
 * 
 * 15. Tem sim. Eh so eu colocar aqui, oh, 
 * 
 * Object.
 * 
 * , vou usar essa funcao aqui, oh, 
 * 
 * Object.getPrototypeOf()
 * 
 * , e, aqui, eu coloco o objeto que eu quero recuperar o prototipo,
 * 
 * Object.getPrototypeOf(fox);
 * 
 * , entao, vamos dar um log() aqui nesse cara,
 * 
 * console.log(Object.getPrototypeOf(fox));
 * 
 * , para a gente ver qual eh o Prototipo de fox.
 * 
 * 16. Olha so, eh um objeto vazio,
 * 
 * {}
 * 
 * , repara que, no slide aqui, quando eu coloquei, ta vendo?, eh um objeto que nao tem nada,
 * 
 |=====================|
 |   Object.prototype  |
 |                     |
 |==============|======|
 |              |      |
 |[[Prototype]] | null |
 |              |      |
 |==============|======|
 * 
 * , entao, vai ser um objet vazio.
 * 
 * 17. Okay?. E esse objeto, fox, eh, realmente, igual ao prototipo de gol?
 * 
 * 18. Ai, ag ente pode fazer aqui, nao e?, vamos verificar se Object.getPrototypeOf(gol), se eles sao iguais,
 * 
 * console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));
 * 
 * , se eles forem iguais, isso aqui tem que aparecer true, certo?
 * 
 * 19. Olha la, apareceu true, entao, os Prototipos deles sao iguais.
 * 
 * 20. Entao, esse slide aqui que o instrutor nos mostrou, ele nao mentiu para nos, ambos os prototipos sao os mesmos.
 * 
 * 21. Beleza? E se eu quiser, agora, fazer o seguinte, repara aqui, oh, que fabricante ta repetindo, nao eh?, entao, se eu quiser criar um bojeto, aqui, por exemplo, 
 * 
 * var volks = {
 * 
 * }
 * 
 * , e eu vou colocar, aqui, oh, esse fabricante aqui, vou transferir essa propriedade fabricante, aqui, e tirar dos dois ali, fox e gol.
 * 
 * var volks = {
 *      fabricante: 'VW';
 * }
 * 
 var fox = {
    nome: 'Fox',
    placa: 'AAA-1111'
}

var gol = {
    nome: 'Gol',
    placa: 'AAA-2222'
}
 * 
 * , beleza? Vou mandar executar aqui so para ver. Oh, repara que a propriedade fabricante sumiu de fox, e de gol, nao tem mais a propriedade fabricante, certo? Mas o Prototype deles continua o mesmo.
 * 
 * 22. O que que eu fiz nesse codigo aqui? Nada de especial, se voce olhar, oh, o que eu fiz foi o seguinte,
 * 
 * =============================|
 *             volks            |
 * ================|============|
 *  fabricante     |  VW        |
 *  [[Prototype]]  |   o----------------|
 * ================|============|       |
 *                                      |
 *                                      |
 * =============================|       |
 *             fox              |       |
 * ================|============|       |
 *  nome           |  Fox       |       |
 *  placa          |  AAA-1111  |       |
 *  [[Prototype]]  |   o----------------|
 * ================|============|       |
 *                                      |       |=====================|
 *                                      |       |                     |
 * =============================|       |======>|   Object.prototype  |
 *             gol              |       |       |                     |
 * ================|============|       |       |==============|======|
 *  nome           |  Gol       |       |       |              |      |
 *  placa          |  AAA-2222  |       |       |[[Prototype]] | null |
 *  [[Prototype]]  |   o----------------|       |              |      |
 * ================|============|       |       |==============|======|
 *
 * 
 * , eu separei, aqui, volks, nao eh?, coloquei, aqui, um outro objeto voks, fabricante, cujo Prototipo dele tambem esta apontando para esse Object.prototype, eh o mesmo prototipo, nao eh?, de fox e gol, porque todo objeto simples, aqui, no Javascript, vai apontar para esse cara aqui, Object.prototype.
 * 
 * 23. Beleza? E se eu conseguir, sera que eu consigo fazer isso? Olha so,
 * 
 * =============================|       |       |=====================|
 *             fox              |       |======>|       volks         |
 * ================|============|       |       |==============|======|
 *  nome           |  Fox       |       |       | fabricante   |  VW  |
 *  placa          |  AAA-1111  |       |       |==============|======|
 *  [[Prototype]]  |   o----------------|       |[[Prototype]] |  o   |
 * ================|============|       |       |==============|==|===|
 *                                      |                         |
 *                                      |                         |
 * =============================|       |                         |
 *             gol              |       |       |=================|===|
 * ================|============|       |       |   Object.prototype  |
 *  nome           |  Gol       |       |       |==============|======|
 *  placa          |  AAA-2222  |       |       |[[Prototype]] | null |
 *  [[Prototype]]  |   o----------------|       |==============|======|
 * ================|============|       |
 * 
 * , eu consigo trocar o Prototipo de fox e gol para apontar aqui, oh, para esse objeto volks e, ai, eles terem essa propriedade fabricante?
 * 
 * 24. Sera que eu consigo fazer isso?
 * 
 * 25. Consigo. Consigo, eu consigo trocar esse cara aqui, o apontamento de Prototype, ou seja, agora, fox, voce vai ter o Prototipo nao mais de Object.prototype, eu vou alterar e voce vai apontar para volks.
 * 
 * 26. E, ai, no volks, vai continuar apontando para Object.prototype, para fechar essa cadeia.
 * 
 * 27. Como que eu faco isso?
 * 
 * 28. Olha so, antes de eu fazere isso daqui, eu vou mostrar, vou colocar, aqui, oh, vou colocar aqui assim, oh, 
 * 
 * console.log('fox.fabricante', fox.fabricante);
 * 
 * , vamos colocar essa propriedade para a gente ver se fox tem essa propriedade fabricante.
 * 
 * 29. Okay? E eu vou fazer a mesma coisa com o gol,
 * 
 * console.log('fox.fabricante', fox.fabricante);
 * console.log('gol.fabricante', gol.fabricante);
 * 
 * 30. Entao, qual vai ser a saida aqui? gol e fox tem fabricante?
 * 
 * 31. Nao tem, entao, isso aqui vai ter que sair undefined, okay? Olha la,
 * 
 *  fox.fabricante undefined
    gol.fabricante undefined
 * 
 * 32. undefined, undefined, para fox.fabricante e gol.fabricante.
 * 
 * 33. Beleza? Okay? Entao, vamos la, eu vou trocar, agora, vou definir, vou fazer aqui, oh, eu quero que o Prototipo de fox, agora, aponte para volks, okay? 
 * 
 * 34. Como que eu posso fazer isso?
 * 
 * 35. Object.setPrototypeOf(fox, )
 * 
 * , qual eh o Prototype de fox?
 * 
 * 36. volks,
 * 
 * Object.setPrototypeOf(fox, volks);
 * 
 * , ou seja, estou falando que, agora, eu quero que o fox tenha, como Prototipo, esse objeto aqui,
 * 
 * var volks = {
 *      fabricante: 'VW'
 * }
 * 
 * 37. Okay? Eu estou fazendo essa troca. Beleza? E, ai, eu vou, depois que eu defini o Prototipo de fox, aqui, para volks, vamos ver se ele tem o fabricante?
 * 
 * 38.  Vamos colocar, aqui, oh, uma setinha,
 * 
 * console.log('fox.fabricante -> ', fox.fabricante);
 * 
 * , so para diferenciar, nao eh?, antes e depois,
 * 
console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante ->', fox.fabricante);
 * 
 * 
 * 39. Vamos executar,
 * 
fox.fabricante undefined
gol.fabricante undefined
fox.fabricante -> VW
 * 
 * , olha la, agora, o fox tem o fabricante Vokswagen. Mas, o gol, ainda nao, o gol ainda esta undefined,
 * 
console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante ->', fox.fabricante);
console.log('gol.fabricante ->', gol.undefined);
 * 
 * , ao executar, retornou,
 * 
fox.fabricante undefined
gol.fabricante undefined
fox.fabricante -> VW
gol.fabricante -> undefined
 * 
 * , ou seja, o gol ainda esta undefined, por que? Porque eu so troquei O Prototipo de fox, eu nao troquei o Prototipo de gol.
 * 
 * 
 * 40. Okay? Entao, como que eu posso fazer para trocar o Prototipo de gol? Bom existem, existe essa forma aqui,
 * 
 Object.setPrototypeOf(fox, volks);
 * 
 * , que o instrutor ja nos mostrou, Object.setPrototypeOf(), mas existem outras formas tambem.
 * 
 * 41. Que seria o seguinte, eu, ao inves de eu criar o objeto assim,
 * 
 var gol = {
    nome: 'Gol',
    placa: 'AAA-2222'
}
 * 
 * eu posso criar o objeto de outra forma. Eu posso criar o objeto assim, oh,
 * 
 * Object.create()
 * 
 * , e, ai, eu falo assim, oh, 
 * 
 * var gol = Object.create(volks);
 * 
 * 42. O que que eu estou fazendo? Eu estou criando um objeto a partir do Prototipo volks.
 * 
 * 43. Okay? E, ai, a partir desse Prototipo volks, ele ja tem, entao, a propriedade fabricante. E, ai, o que eu vou fazer agora eh poder adicionar, por exemplo, as demais propriedades,
 * 
 * var gol = Object.create(volks);
 * gol.nome = 'Gol';
 * gol.placa = 'AAA-2222';
 * 
 * , vamos executar e dar uma olhada la embaixo? Retornou,
 * 
fox.fabricante undefined
gol.fabricante VW
fox.fabricante -> VW
gol.fabricante -> VW
 * 
 * , agora, o gol.fabricante, que eh essa linha aqui, 
 * 
 * console.log('gol.fabricante ->', gol.fabricante);
 * 
 * , tem o fabricante agora, tem a propriedade fabricante, okay? Entao, sao essas duas formas aqui, as formas mais recomendadas para a gente alterar o Prototipo e chegar nisso aqui, oh,
 * 
  * =============================|       |       |=====================|
 *             fox              |       |======>|       volks         |
 * ================|============|       |       |==============|======|
 *  nome           |  Fox       |       |       | fabricante   |  VW  |
 *  placa          |  AAA-1111  |       |       |==============|======|
 *  [[Prototype]]  |   o----------------|       |[[Prototype]] |  o   |
 * ================|============|       |       |==============|==|===|
 *                                      |                         |
 *                                      |                         |
 * =============================|       |                         |
 *             gol              |       |       |=================|===|
 * ================|============|       |       |   Object.prototype  |
 *  nome           |  Gol       |       |       |==============|======|
 *  placa          |  AAA-2222  |       |       |[[Prototype]] | null |
 *  [[Prototype]]  |   o----------------|       |==============|======|
 * ================|============|       |
 * 
 * 
 * , oh, fox e gol estao apontando para o objeto volks, e, do objeto voks, aponta para Object.prototype.
 * 
 * 44. Okay? Mas existe outra forma?
 * 
 * 45. Tambem existe uma outra forma, talvez voce ja tenha visto ai, que eh a seguinte, eh eu definir a propriedade, dois underscore, __, escrevo proto, dois underscore, __, e coloco, aqui, o objeto que eu quero que o prototipo siga.
 * 
 * var fox = {
 *      nome: 'Fox',
 *      placa: 'AAA-1111',
 *      __proto__: volks
 * }
 * 
 * 
 * 46. Vamos supor que eu quero que ele tenha o Prototipo volks, coloco assim,
 * 
  * var fox = {
 *      nome: 'Fox',
 *      placa: 'AAA-1111',
 *      __proto__: volks
 * }
 * 
 * , na hora que ele criar esse objeto, ele ja altera, passando, aqui, o prototipo dele para volks. E, ai, se a gente olhar aqui, oh, 
 * 
 * console.log('fox.fabricante', fox.fabricante);
 * 
 * , voce vai ver que fox.fabricante, vamos colcoar dois pontos, para a gente diferenciar, saber, ao olhar, ele ja vai ter esse fabricante, aqui, oh, vamos executar e dar uma olhada,
 * 
fox.fabricante: VW
gol.fabricante VW
fox.fabricante -> VW
gol.fabricante -> VW
 * 
 * 47. Olha la, os dois pontos, no fox, ele ja tem o volks, beleza?
 * 
 * 48. Mas, essa forma aqui, Normandes, 
 * 
   * var fox = {
 *      nome: 'Fox',
 *      placa: 'AAA-1111',
 *      __proto__: volks
 * }
 * 
 * , eh legal usar?
 * 
 * 49. Nao, essa aqui nao eh tao recomendada, por que? Porque ela nao faz parte da especificacao., nao faz parte do padrao. Entao, pode ser, hoje em dia, os browsers, acho que todos ja suportam essa propriedade __proto__, pode se que algum ou outro ai, dependendo da versao, nao suporte, okay?, entao, nao eh tao recomendado, usar assim, nao.
 * 
 * 50. Beleza? O instrutor, praticamente, nao usa essa forma, o instrutor usa mais o Object.setPrototypeOf().
 * 
 * 51. E uma coisa interessante que o instrutor quer nos mostrar, aqui, que o instrutor ja vai falar na proxima aula, tambem, eh, se eu, vamos aqui, a ultima coisa, a gente ja viu, que gol.fabricante existe, certo, oh?, fox.fabricante existe.
 * 
 * 52. Mas olha so, o que que eu vou fazer, eu vou pegar essa linha aqui,
 * 
 * console.log('fox', fox);
 * 
 * , e vou colocar aqui embaixo, e vamos colocar assim, oh, toString do fox, 
 * 
 * console.log('toString do fox:', fox);
 * 
 * , so para a gente diferenciar, e vamos ver as propriedades que fox tem no toString dele,
 * 
 console.log('fox.fabricante:', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante ->', fox.fabricante);
console.log('gol.fabricante ->', gol.fabricante);

console.log('tostring do fox:', fox);
 * 
 * Retornou:
 * 
fox.fabricante: VW
gol.fabricante VW
fox.fabricante -> VW
gol.fabricante -> VW
tostring do fox: { nome: 'Fox', placa: 'AAA-1111' }
 * 
 * , olha la, toString do fox, nome: 'Fox', placa: 'AAA-1111'. Ueh, Normandes, cade a propriedade fabricante?
 * 
 * 53. Olha so, a gente ja viu que tem, oh,
 * 
fox.fabricante: VW
gol.fabricante VW
fox.fabricante -> VW
gol.fabricante -> VW
 * 
 * , fabricante existe, aqui em cima, existe,
 * 
 console.log('fox.fabricante ->', fox.fabricante);
 * 
 * 54. Mas por que que, no toString, nao aparece? Eh a caracteristica, nao eh?, se eu mandar mostrar esse objeto fox, ele nao vai acessar aqui oh, o Prototipo para mostrar as propriedades do Prototipo dele.
 * 
 * 55. Ele so vai mostrar as propriedades que estao no objeto fox, apesar de existir a propriedade fabricante.
 * 
 * 56. Okay? 
 * 
 * 57. Fim da 
 * 
 * 
 * 
 * 
 * 
 */

/** *
var fox = {
    nome: 'Fox',
    placa: 'AAA-1111',
    fabricante: 'VW'
}

var gol = {
    nome: 'Gol',
    placa: 'AAA-2222',
    fabricante: 'VW'
}
**/

var volks = {
    fabricante: 'VW'
}

/**Version 1
var fox = {
    nome: 'Fox',
    placa: 'AAA-1111'
}
***/

/**Version 2 */
var fox = {
    nome: 'Fox',
    placa: 'AAA-1111',
    __proto__: volks
}

/** Version 1
var gol = {
    nome: 'Gol',
    placa: 'AAA-2222'
}
**/

/**
 * Version 2 **/
var gol = Object.create(volks);
gol.nome = 'Gol';
gol.placa = 'AAA-2222';

console.log('fox', fox);
console.log('gol', gol);

/** console.log(Object.getPrototypeOf(fox)); **/

console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

console.log('fox.fabricante:', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante ->', fox.fabricante);
console.log('gol.fabricante ->', gol.fabricante);

console.log('tostring do fox:', fox);