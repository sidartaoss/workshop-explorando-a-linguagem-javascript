/**
 * 
 * Aula 09.009. Chamando Funcoes Atraves de Call e Apply
 * 
 * 1. O instrutor vai nos mostrar uma outra forma de chamar funcoes, que tambem eh bem interessante e util, o instrutor ira nos mostrar naquele mesmo exemplo, aqui, de Estado / Cidade, onde a gente pode usar.
 * 
 * 2. Primeiro, vamos ao conceito aqui, oh, eu vou criar uma funcao, a funcao Carro, la, tem o nome do carro, e a placa, 
 * 
 * function Carro (nome, placa) {
 * 
 * }
 * 
 * , para a gente usar a funcao construtora. Entao, this.nome = nome, this.placa = placa,
 * 
  * function Carro (nome, placa) {
 *      this.nome = nome;
 *      this.placa = placa;
 * }
 * 
 * 3. Beleza? Ate aqui, normal, nao eh?, a gente criar o fox, aqui, a gente ja viu que a gente pode fazer isso daqui,
 * 
 * var fox = new Carro('fox', 'AAA-111');
 * 
 * , por exemplo, se eu der um log aqui em fox,
 * 
 * console.log('fox', fox);
 * 
 * , retornou,
 * 
 * fox Carro { nome: 'Fox', placa: 'AAA-1111' }
 * 
 * , beleza, a gente tem o objeto fox criado.
 * 
 * 4. Mas, eu nao vou criar o objeto dessa forma aqui nao. Eu vou usar o call() e o apply() e eles fazem a mesma coisa, so a forma de passar os parametros que sao diferentes, para nos mostrar como ele funciona.
 * 
 * 5. Eu vou chamar a funcao Carro(), Carro() eh uma funcao, certo?, continua sendo uma funcao, entao, eu quero, em Carro(), chamar ela. Eu quero, a partir da funcao, oh, eu posso usar, aqui, o call(), por exemplo,
 * 
 * Carro.call()
 * 
 * , e, abrir/fechar parenteses. Isso daqui,
 * 
 * Carro.>>>call()<<<
 * 
 * , faz eu chamar essa funcao Carro(),
 * 
    function Carro (nome, placa) {
        this.nome = nome;
        this.placa = placa;
    }
 * 
 * , oh, eu estou chamando essa funcao Carro(),
 * 
     function Carro (nome, placa) {
        this.nome = nome;
        this.placa = placa;
    }
 * 
 * , eh isso daqui,
 * 
 * Carro.>>>call()<<<
 * 
 * , porque Carro eh uma funcao, mas lembra, em Javascript, a funcao eh muito poderosa, nao eh?, entao, ela tem funcoes dentro da propria funcao, entao, call() eh uma funcao de funcao.
 * 
 * 6. Beleza? Entao, eu posso chama-la aqui,
 * 
 * Carro.call()
 * 
 * , chamar essa funcao Carro().
 * 
 * 7. E aqui eh o seguinte, eu vou criar um objeto, oh, fox, vazio,
 * 
 * var fox = {};
 * Carro.call()
 * 
 * , estou criando um objeto vazio, simples, que a gente ja fez.
 * 
 * 8. Eu vou chamar essa funcao,
 * 
 * Carro.call()
 * 
 * , Carro(), so que eu vou trocar o contexto que ela esta sendo executada, eu vou passar o contexto do fox,
 * 
 * var fox = {};
 * Carro.call(fox);
 * 
 * , aqui. O que eu estou dizendo eh, 'Chame a funcao Carro(), porem, eu quero que voce utilize o fox como contexto. Significa que o this, aqui, oh
 * 
    function Carro (nome, placa) {
        >>>this<<<.nome = nome;
        >>>this<<<.placa = placa;
    }
 * 
 * , vai ser esse fox aqui,
 * 
 * var fox = {};
 * 
 * , entendeu? Eh como se isso aqui ficasse assim,
 * 
    function Carro (nome, placa) {
        fox.nome = nome;
        fox.placa = placa;
    }
 * 
 * , beleza? Ele vai passar o this aqui,
 * 
    function Carro (nome, placa) {
        >>>this<<<.nome = nome;
        >>>this<<<.placa = placa;
    }
 * 
 * , sendo para esse objeto,
 * 
 * var fox = {};
 * Carro.call(>>>fox<<<);
 * 
 * , esse objeto que eu estou passando, 
 * 
 * Carro.call(>>>fox<<<);
 *
 * , eh que vai ser o this dentro da funcao,
 * 
    function Carro (nome, placa) {
        >>>this<<<.nome = nome;
        >>>this<<<.placa = placa;
    }
 * 
 * , beleza? Virgula, os parametros que a funcao precisa, que a funcao recebe,
 * 
 * var fox = {};
 * Carro.call(fox, );
 * 
 * , entao, o primeiro parametro da funcao call() eh o Contexto, o segundo, terceiro e quarto sao os parametros da sequencia,
 * 
    function Carro (>>>nome<<<, >>>placa<<<) {
        this.nome = nome;
        this.placa = placa;
    } * 
 * 
 * 
 * , entao, eu posso passar aqui, oh, nome 'Fox', placa 'AAA-1111',
 * 
 * var fox = {};
 * Carro.call(fox, 'Fox', 'AAA-1111');
 * 
 * , okay? Voce vai ver que, quando eu executar o log aqui, esse objeto fox vai ter o nome fox e essa placa, aqui, continua da mesma forma. Vamos executar?
 * 
 * 9. Olha la,
 * 
 * fox { nome: 'Fox', placa: 'AAA-1111' }
 * 
 * , eu criei o objeto do mesmo jeito que se eu tivesse feito assim,
 * 
 * var fox = new Carro('Fox', 'AAA-1111');
 * 
 * , porem, eu usei o call().
 * 
 * 10. Beleza? E o apply()? Qual que eh a diferenca do apply()?
 * 
 * 11. O apply() eh que os parametros aqui,
 * 
 * Carro.apply(fox, >>>'Fox', 'AAA-1111'<<<<);
 * 
 * , nao sao em sequencia, eu preciso coloca-los entre array,
 * 
 * Carro.apply(fox, ['Fox', 'AAAA-1111']);
 * 
 * , ele so recebe mais um parametro, que eh o array. Ai, esse array, cada posicao, posicao 0, vai para o primeiro, posicao 1, vai para o segundo, e assim por diante.
 * 
 * 12. Eu vou executar novamente, oh,
 * 
 * fox { nome: 'Fox', placa: 'AAA-1111' }
 * 
 * , executei, beleza, continua sendo o objeto fox, da mesma forma. Ao inves do new Carro,
 * 
 * var fox = new Carro('Fox', 'AAA-1111');
 * 
 * , eu usei o apply().
 * 
 * 13. Entao, tem o apply(), tem o call(), que eu passo como um varArgs, nao eh?, argumentos variaveis, ele vai passando, aqui, se eu tiver, quantos parametros eu quiser, no apply(), eu uso um array para passar esses parametros, eh essa a diferenca, nao muda.
 * 
 * 14. Beleza? Vamos criar dois aqui, oh,
 * 
 * var fox = {};
 * var gol = {};
 * Carro.call(fox, 'Fox', 'AAA-1111');
 * Carro.apply(gol, ['Gol', 'AAA-2222']);
 * 
 * console.log('fox', fox);
 * console.log('gol', gol);
 * 
 * , executei, retornou,
 * 
 * fox { nome: 'Fox', placa: 'AAA-1111' }
   gol { nome: 'Gol', placa: 'AAA-2222' }
 * 
 * , beleza? Entao, essa eh a ideia aqui do call() e do apply(). Eu ja vou ate fazer o seguinte, porque eu ja vou mudar aqui na Pagina Html para a gente usar o call() e o apply(), mostrar onde pode ser util ali.
 * 
 * 15. Ver arquivo chamando-funcoes-atraves-de-call-eapply.js.
 * 
 * 
 */
function Carro (nome, placa) {
    this.nome = nome;
    this.placa = placa;
}

/**  *var fox = new Carro('Fox', 'AAA-1111'); **/

var fox = {};
var gol = {};

/** *Carro.call(fox, 'Fox', 'AAA-1111'); **/

Carro.call(fox, 'Fox', 'AAA-1111');
Carro.apply(gol, ['Gol', 'AAA-2222']);

console.log('fox', fox);
console.log('gol', gol);