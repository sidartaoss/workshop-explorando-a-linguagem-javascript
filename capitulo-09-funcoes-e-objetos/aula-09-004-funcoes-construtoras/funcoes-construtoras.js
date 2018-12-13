/**
 * Aula 09.004. Funcoes Construtoras
 * 
 * 1. E, agora, vamos falar das fncoes construtoras.
 * 
 * 2. O instrutor quer que nos prestemos bastante atencao aqui, porque essa eh uma das formas que o instrutor mais gosta de fazer, de trabalhar, acha bem interessante criar os seus objetos criando funcoes construtoras.
 * 
 * 3. Beleza? Vamos la. Quando eu vou criar uma funcao construtora, o nome da variavel, aqui, que eu vou dar para a funcao, comeca com letra maiuscula, por que comeca com letra maiuscula, Normandes?
 * 
 * 4. Eh uma convencao, nao eh?, se eu criar com letra minuscula, vai funcionar? Vai, vai funcionar, so que eh uma convencao, quando eu estou criando uma funcao construtora, utilize letra maiuscula no nome do objeto, nao eh?, que sera a funcao,
 * 
 * var Carro = 
 * 
 * entao, oh,
 * 
 * var Carro = functon ()
 * 
 * , okay?, e aqui, eu vou receber o nome e a placa do carro,
 * 
 * var Carro = function (nome, placa) {
 * 
 * }
 * 
 * , okay? Eh uma funcao normal, a unica diferenca eh que aqui eu coloquei com letra maiuscula, ao inves de ser letra minuscula, mas eh uma funcao normal aqui.
 * 
 * 5. Quando, antes de eu implementar o que eu vou colocar aqui dentro,
 * 
 * var Carro = function (nome, placa) {
 * 
 * }
 * 
 * , para eu usar uma funcao construtora, aqui, eu vou usar essa funcao para criar o carro,
 * 
 * var fox = 
 * 
 * , so para lembrar aqui, lembra da funcao fabrica? Na funcao fabrica, eu chamava aqui a funcao, nao eh?, criarCarroDaVolks, passando os parametros, aqui, para criar o objeto,
 * 
 * var fox = criarCarroDaVolks('Fox', 'AAA-1111');
 * 
 * 6. Agora, olha so, como eu vou usar a funcao construtora, ao inves de eu chamar a funcao, executando ela, olha so, eu vou fazer um new, exatamente, dando new Carro, ai, eu abro parenteses, e passo, aqui, os atributos que eu quero,
 * 
 * var fox = new Carro('Fox', 'AAA-1111);
 * 
 * , passar, la, para a funcao construtora.
 * 
 * 7. Okay?, e eu vou dar um log() aqui no fox, para a gente ver que eh um objeto, continua sendo um objeto normalzinho esse fox, aqui, beleza?,
 * 
 * console.log('fox', fox);
 * 
 * , retornou,
 * 
 fox Carro {}
 * 
 * 9. So que, beleza, eu estou recebendo o nome e a placa,
 * 
var Carro = function (nome, placa) {

}
 * 
 * , como que eu armazeno esse nome e essa placa aqui dentro desse objeto? Cade o objeto sendo criado aqui?
 * 
 * 10. Na funcao fabrica, eu retornava um objeto, nao eh?, oh, eu criei o objeto aqui, e retornei ele,
 * 
 * return {
 *      nome: nome,
 *      placa: placa,
 *      fabricante: 'VW'
 * }
 * 
 * 11. E na funcao construtora? Na funcao construtora, eu vou usar uma palavrinha chamada 'this'.
 * 
 * 12. O this referencia o objeto que eu estou criando, com esse new aqui,
 * 
 * var fox = new Carro('Fox', 'AAA-1111');
 * 
 * , quando eu usei o new, por tras ai do new, ele faz um monte de coisas e, entre elas, criar o objeto e esse this esta referenciando esse objeto,
 * 
 var Carro = function (nome, placa) {
    this.
 }
 * 
 * 13. Entao, eu vou colocar this.nome eh igual a esse nome que esta recebendo aqui,
 * 
 * var Carro = function (nome, placa) {
 *      this.nome = nome;
 * }
 * 
 * , esse 'nome' eh o 'nome' recebido por parametro, certo?
 * 
 * var Carro = function (nome, placa) {
 *      this.nome = >>>nome<<<;
 * }
 * 
 * 14. Esse nome aqui faz parte da propriedade do objeto,
 * 
 * var Carro = function (nome, placa) {
 *      >>>>this.nome<<<< = nome;
 * }
 * 
 * 15. this.placa vai receber o parametro placa,
 * 
 * var Carro = function (nome, placa) {
 *      this.nome = nome;
 *      this.placa = placa;
 * }
 * 
 * 16. Beleza? Esse nome aqui poderia ser qualquer outra, oh, se eu colocar x aqui, pode ser x, se eu colocar y aqui, aqui pode ser y,
 * 
 * var Carro = function (x, y) {
 *      this.nome = x;
 *      this.placa = y;
 * }
 * 
 * 17. Mas o nome da propriedade do objeto vai se nome e placa, okay? Mas, normalmente, a gente coloca os nomes assim, nao eh?,
 * 
 * var Carro = function (nome, placa) {
 *      this.nome = nome;
 *      this.placa = placa
 * }
 * 
 * , para ficar mais organizado.
 * 
 * 18. E vou criar, tambem, um fixo aqui, para o instrutor nos mostrar que eu posso, tanto ter parametros sendo recebidos aqui na funcao construtora, quanto tambem ter parametros fixos,
 * 
  * var Carro = function (nome, placa) {
 *      this.nome = nome;
 *      this.placa = placa;
 *      this.fabricante = 'VW';
 * }
 * 
 * 19. Okay? Vou salvar aqui e vou executar. Na execucao, eu tenho que ver um objeto aqui, fox, normal, igual ao que voce esta acostumado, olha la,
 * 
 fox Carro { nome: 'Fox', placa: 'AAA-1111', fabricante: 'VW' }
 * 
 * , um objeto normalzinho. Como se eu tivesse criado, vamos colocar aqui o fox2, como se eu tivesse feito isso daqui,
 * 
 * var fox2 = {
 *      nome: 'Fox',
 *      placa: 'AAA-1111',
 *      fabricante: 'VW'
 * }
 * 
 * , eh a mesma coisa, ta vendo, eh um objeto normal, so que, aqui, eu crio inline, na funcao fabrica, eu crio com a funcao fabrica, e, aqui, eu uso uma funcao construtora, beleza?
 * 
 * 20. Essa forma de funcao construtora, o instrutor gosta bastante. Ah, Normandes, e a funcao fabrica, ela eh legal tambem?
 * 
 * 21. Sim, a funcao fabrica tambem eh legal.
 * 
 * 22. Quando que eu uso uma e quando que eu uso a outra?
 * 
 * 23. Bom, tem gente que prefere mais a funcao fabrica, tem gente que prefere mais a funcao construtora.
 * 
 * 24. A medida que voce for avancando ai, nos seus conceitos Javascript, voce vai usando uma ou outra.
 * 
 * 25. O instrutor, na sua humilde opiniao, prefere muito mais a funcao construtora, nao eh?, o instrutor acha que fica mais parecido com orientacao a objeto, do que a gente esta acostumado com Java, nao eh?, e eh isso daqui que o instrutor queria nos mostrar.
 * 
 * 26. Nos estamos vendo, aqui, coisas simples, nos, ainda, vamos adicionar os metodos dentro dessas funcoes, okay?, o instrutor quer comecar bem devagarzinho, nos, fazendo esses primeiros testes, entendendo o que que a gente esta criando, e, daqui a pouco, a gente vai ter uns exemplos mais legais ai para a gente brincar. Beleza?
 * 
 * 27. Fim da Aula 09.004. Funcoes Construtoras.
 * 
 * 
 * 
 */

var Carro = function (nome, placa) {
    this.nome = nome;
    this.placa = placa;
    this.fabricante = 'VW';
}

var fox = new Carro('Fox', 'AAA-1111');
console.log('fox', fox);

