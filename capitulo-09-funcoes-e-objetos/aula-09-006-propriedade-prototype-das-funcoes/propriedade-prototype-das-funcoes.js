/**
 * Aula 09.006. Propriedade Prototype das Funcoes
 * 
 * 1. Vamos falar de algo bem legal agora das funcoes, que eh a Propriedade Prototype que elas possuem.
 * 
 * 2. E o instrutor ira nos explicar um pouco da diferenca daquele primeiro Prototype que a gente viu, beleza?
 * 
 * 3. Antes, aqui, eu sei que essa duvida pode surgir, eu estou criando aqui uma funcao para eu criar um objeto com a funcao construtora, entao defini a variavel aqui com 'C' maiusculo, nao eh?, como convencao, e uso this para incializar as propriedades aqui desse objeto, nao eh?, do objeto que eu estou criando aqui, nao eh?, quando eu faco isso, eu estou criando um objeto.
 * 
 * 4. Beleza? Mas eu posso fazer, lembra que eu falei que voce pode criar a funcao assim, 
 * 
 var Carro = function(nome, placa) {
    this.nome = nome;
    this.placa = placa;
    this.fabricante = 'VW';
}
 * 
 * , ou criar a funcao assim,
 * 
 function Carro(nome, placa) {
    this.nome = nome;
    this.placa = placa;
    this.fabricante = 'VW';
}
 * 
 * , da na mesma, mesma coisinha, isso aqui tambem vai funcionar, beleza? Entao, a function Carro, eu posso dar new Carro aqui que tambem funciona, vamos executar, oh?
 * 
 * 5. Retornou,
 * 
 fox Carro { nome: 'Fox', placa: 'AAA-1111', fabricante: 'VW' }
 * 
 * , tem o Carro, e olha so as propriedades dele aqui. Beleza?
 * 
 * 6. Vamos la, olha so o que que eu vou fazer aqui, oh, vou criar o gol, gol = new Carro(), passando a placa, 'AAA-2222', beleza?, e vamos dar o log aqui no gol, 
 * 
 * var gol = new Carro('Gol', 'AAA-2222');
 * console.log('gol', gol);
 * 
 * , retornou,
 * 
fox Carro { nome: 'Fox', placa: 'AAA-1111', fabricante: 'VW' }
gol Carro { nome: 'Gol', placa: 'AAA-2222', fabricante: 'VW' } 
 * 
 * , beleza, ate aqui, nada de diferente.
 * 
 * 6. Mas, o que o instrutor quer mostrar eh que, por tras aqui, algo de diferente aconteceu.
 * 
 * 7. Quando eu uso a funcao construtora, que eu dou um new em Carro, os prototipos, aqui, dos objetos, eles ficaram um pouquinho diferentes.
 * 
 * 8. Vamos dar uma olhada no slide para voce ver como ficou.
 * 
 * |============================|       |       |=====================|
 * |           fox              |       |======>|   Carro.prototype   |
 * |===============|============|       |       |==============|======|
 * |  nome         |  Fox       |       |       |[[Prototype]] |  o   |
 * |  placa        |  AAA-1111  |       |       |==============|==|===|
 * |  fabricante   |  VW        |       |                         |
 * | [[Prototype]] |  o-----------------|                         |
 * |===============|============|       |                         |                                           |                         |
 *                                      |                         |
 * |============================|       |                         |
 * |           gol              |       |       |=================V===|
 * |===============|============|       |       |   Object.prototype  |
 * |  nome         |  Gol       |       |       |==============|======|
 * |  placa        |  AAA-2222  |       |       |[[Prototype]] | null |
 * |  fabricante   |  VW        |       |       |==============|======|
 * | [[Prototype]] |  o-----------------| 
 * |===============|============|       |
 * 
 * 9. Olha so, eu tenho um objeto fox, com as propriedades dele, mas o Prototipo dele, agora, esta sendo atribuido a Carro.prototype, e gol tambem para Carro.prototype, okay?, esse objeto aqui Carro.prototype, o mesmo objeto aqui que eles estao apontando.
 * 
 * 10. E Carro.prototype esta apontando para Object.prototype. Beleza? Isso aqui eh muito importante e muito interessante e muito util no Javascript.
 * 
 * 11. Vou te mostrar aqui e a gente vai evoluir o exemplo. Primeiro, vamos dar uma analisada aqui o que que eh esse .prototype aqui que eu estou falando? Eh um objeto de Carro.
 * 
 * 12. Olha so, eu estou falando que esse .prototype, em Carro.prototype, eh um objeto de Carro.
 * 
 * 13. Mas Carro eh uma funcao, certo? Carro eh uma funcao. Entao, vamos entrar aqui no node?, para eu te mostrar uma coisa aqui, oh,
 * 
 * 14. Se eu criar uma funcao, aqui, oh, 
 * 
 * > var f = function () {};
 * 
 * , aqui, abri/fechei uma funcao qualquer, beleza? Entao, f eh uma function,
 * 
 *  > f
 * [Function]
 * >
 * 
 * 15. > f.prototype
 * 
 * , retornou,
 * 
 * > f {}
 * 
 * , olha so, existe essa propriedade dentro da funcao, e ela eh um objeto.
 * 
 * 16. Okay? Entao, funcao, em Javascript, lembra que o instrutor falou que eh bem poderosa, nao eh?, entao, a funcao, se voce der f. + <TAB>, olha so, tem um monte de propriedades e metodos ai,
 * 
 * 17. Nao eh?, entao, prototype eh uma das propriedades, ai, da funcao, e ela eh um objeto.
 * 
 * 18. Significa, entao, quando eu faco 'new Carro()', aqui, eu passo a apontar o prototipo do objeto fox vai apontar para Carro.prototype, esse objeto criado a partir da funcao.
 * 
 * 19. Entao, repara aqui, oh, que existe uma diferenca muito grande entre o prototipo aqui do objeto, ou seja, em fox.prototype, e essa propriedade prototype aqui dentro da funcao, ou seja, Carro.prototype.
 * 
 * 20. Beleza? O Prototipo, aqui, em fox, do objeto, que esta relacionado aqui na heranca, nao eh?, eh falar o seguinte, oh, fox, ele esta herdando de Carro.prototype, esse objeto aqui, que eh Carro.prototype, percebe a diferenca, nao eh?. funcao.prototype eh um objeto e, aqui, eh o conceito da heranca, para esse objeto aqui Carro.prototype.
 * 
 * 21. Beleza? Parece estranho, mas nos vamos dar uma mexida aqui, eu quero fazer o seguinte, oh, se eu estou falando que o fox e o gol estao apontando para o mesmo Prototipo, vamos confirmar isso daqui, oh?, vamos ver se Object.getPrototypeOf(fox) eh igual a Object.getPrototypeOf(gol),
 * 
 * console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));
 * 
 * , vamos executar, retornou true.
 * 
 * 21. Ta vendo, oh, eles sao baseados no mesmo Prototipo. Se eles estao baseados no mesmo Prototipo, sera que existe alguma forma de eu chegar nesse Carro.prototype e adicionar alguma coisa la?, como por exemplo, tirar esse fabricante que esta duplicado aqui e passar para Carro.prototype? 
 * 
 * |============================|       |       |=====================|
 * |           fox              |       |======>|   Carro.prototype   |
 * |===============|============|       |       |==============|======|
 * |  nome         |  Fox       |       |       |  fabricante  |  VW  |
 * |  placa        |  AAA-1111  |       |       |[[Prototype]] |  o   |
 * | [[Prototype]] |  o-----------------|       |==============|==|===|
 * |===============|============|       |                         |
 *                                      |                         |
 *                                      |                         |
 * |============================|       |                         |
 * |           gol              |       |       |=================V===|
 * |===============|============|       |       |   Object.prototype  |
 * |  nome         |  Gol       |       |       |==============|======|
 * |  placa        |  AAA-2222  |       |       |[[Prototype]] | null |
 * | [[Prototype]] |  o-----------------|       |==============|======|
 * |===============|============|       | 
 *  
 * 
 * 22. Repara que eu tirei aqui o fabricante de fox e gol e joguei aqui para o Prototipo do Carro, aqui, oh, para esse objeto Carro.prototype. Tem como eu fazer isso?
 * 
 * 23. Tem.
 * 
 * 24. Olha so o que que eu posso fazer. Posso, entao, remover isso daqui,
 * 
 * function Carro (nome, placa) {
 *      this.nome = nome;
 *      this.placa = placa;
 *      // this.fabricante = 'VW';
 * }
 * 
 * , e fazer isso, oh,
 * 
 * Carro.prototype
 * 
 * , isso eh um objeto, Carro.prototype,
 * 
 * Carro.prototype.fabricante
 * 
 * , entao, eu posso adicionar a propriedade fabricante no objeto dessa funcao, no Prototipo dessa funcao,
 * 
 * Carro.prototype.fabricante = 'VW';
 * 
 * 25. Significa que, agora, tanto fox quanto gol terao essa propriedade fabricante para serem acessadas. Se eu mandar imprimir aqui, nao eh?, o toString(), nao vai aparecer, ao executar, retornou, 
 * 
fox Carro { nome: 'Fox', placa: 'AAA-1111' }
gol Carro { nome: 'Gol', placa: 'AAA-2222' }
 * 
 * 26. Se eu vier aqui, oh, 
 * 
 * console.log('fox.fabricante', fox.fabricante);
 * console.log('gol.fabricante', gol.fabricante);
 * 
 * , retornou,
 * 
fox Carro { nome: 'Fox', placa: 'AAA-1111' }
gol Carro { nome: 'Gol', placa: 'AAA-2222' }
fox.fabricante VW
gol.fabricante VW
 * 
 * , olha la, ambos tem 'VW'.
 * 
 * 27. Porque eu adicionei nesse objeto, Carro.prototype, que esta dentro dessa funcao construtora Carro. E esse cara aqui, Carro.prototype, eh o objeto que tanto fox, quanto gol, estao herdando.
 * 
 * 28. Tranquilo? E, eu estou colocando, aqui, 
 * 
 * Carro.prototype.>>>fabricante<<< = 'VW';
 * 
 * , novamente, propriedades. Mas o instrutor ja nos falou que, no objeto, nos podemos ter funcoes.
 * 
 * 29. Entao, nos podemos adicionar, aqui, no Carro.prototype, funcoes, vamos suport que eh ligar, eu vou adicionar aqui uma funcao e vou colocar aqui oh o log(), 'Ligando o carro...',
 * 
 * Carro.prototype.ligar = function () {
 *      console.log('Ligando o carro...');
 * }
 * 
 * 30. Beleza? E, ai, eu posso chamar aqui, oh, 
 * 
 * fox.ligar();
 * 
 * , posso chamar essa funcao aqui, agora. Se eu executar, olha la, retornou,
 * 
fox Carro { nome: 'Fox', placa: 'AAA-1111' }
gol Carro { nome: 'Gol', placa: 'AAA-2222' }
fox.fabricante VW
gol.fabricante VW
Ligando o carro...
 * 
 * 31. Beleza? Essa eh a ideia dos Prototipos. Eh bem interessante, bem importante, a gente ainda vai ver mais coisas sobre isso.
 * 
 * 32. Fim da Aula 09.006. Propriedade Prototype das Funcoes.
 * 
 * 
 * 
 * 
 */


/**Version 1 *
var Carro = function(nome, placa) {
    this.nome = nome;
    this.placa = placa;
    this.fabricante = 'VW';
}
**/

/**Version 2 *
function Carro(nome, placa) {
    this.nome = nome;
    this.placa = placa;
    this.fabricante = 'VW';
}
**/

/**Version 3 */
function Carro (nome, placa) {
    this.nome = nome;
    this.placa = placa;
    // this.fabricante = 'VW';
}

Carro.prototype.fabricante = 'VW';
Carro.prototype.ligar = function () {
    console.log('Ligando o carro...');
}

var fox = new Carro('Fox', 'AAA-1111');
console.log('fox', fox);

var gol = new Carro('Gol', 'AAA-2222');
console.log('gol', gol);

/** 
 * console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol)); 
 * **/

console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

fox.ligar();