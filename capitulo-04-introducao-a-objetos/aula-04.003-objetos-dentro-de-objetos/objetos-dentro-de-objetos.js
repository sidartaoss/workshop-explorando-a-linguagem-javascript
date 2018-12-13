/**
 * Aula 04.003. Objetos Dentro de Objetos
 * 
 * 1. O instrutor ja falou que o objeto, no Javascript, eh um container de chave-valor, onde o valor pode ser de qualquer tipo, inclusive outro objeto.
 * 
 * 2. Entao, vamos la, vamos dar uma olhada neste exemplo aqui, vamos criar uma pessoa aqui, com as propriedades nome, idade, logradouro, numero, complemento, cidade, estado,
 * 
 * var joao = {
 *      nome: 'João',
 *      idade: 25,
 *      logradouro: 'Av Brasil',
 *      numero: 100,
 *      complemento: 'Apto 202',
 *      cidade: 'Rio de Janeiro',
 *      estado: 'RJ'
 * }
 * 
 * , beleca, vamos dar um log aqui no joao,
 * 
 * console.log(joao);
 * 
 * 3. Executou, beleza, esta o objeto aqui funcionando. 
 * 
 * 4. So que olha so, para a ente organizar melhor esse objeto aqui, nos concordamos que logradouro, numero, complemento, cidade, estado, nos poderiamos separar essas propriedades em um objeto separado chamado endereco. Isso faz tudo parte, eh um grupo comum, onde podemos chamar esse grupo de endereco.
 * 
 * 5. Entao, nos faremos, neste caso, um objeto endereco, dessa forma,
 * 
 * var joao = {
 *      nome: 'Joao',
 *      idade: 25,
 *      endereco: 
 * }
 * 
 * e, em endereco: , pode ser de qualquer tipo aqui, pode ser uma string, um numero, bode ser um booleano, true ou false, pode ser uma funcao, mas tambem pode ser um outro objeto. Como que nos criamos um objeto, Normandes? 
 * 
 * 6. Abre/fecha chaves. Eh isso ai, pronto,
 * 
 * var joao = {
 *      nome: 'Joao',
 *      idade: 25,
 *      endereco: {}
 * }
 * 
 * 7. Se salvarmos isso aqui e executarmos, 
 * 
 * { nome: 'João', idade: 25, endereco: {} }
 * 
 * , vemos que tem um objeto ali dentro. E, ali dentro desse objeto, nos vamos colocar as propriedades que nos tinhamos definido la,
 * 
 * var joao = {
 *      nome: 'Joao',
 *      idade: 25,
 *      endereco: {
 *          logradouro: 'Av Brasil',
 *          numero: 100,
 *          complemento: 'Apto 202',
 *          cidade: 'Rio de Janeiro',
 *          estado: 'RJ'
 *      }
 * }
 * 
 * 8. Vamos salvar, vamos executar, e, olha la,
 * 
 { nome: 'Joao',
  idade: 25,
  endereco:
   { logradouro: 'Av Brasil',
     numero: 100,
     complemento: 'Apto 202',
     cidade: 'Rio de Janeiro',
     estado: 'RJ' } }
 * 
 * , nome idade, endereco e dois pontos. Ai, eh um novo objeto, logradouro, numero, complemento, cidade, estado.
 * 
 * 9. Simples demais, nao eh?
 * 
 * 10. Bom, vamos acessar, agora. Nos queremos mostrar, aqui, por exemplo, qual eh a cidade do Joao?,
 * 
 * console.log('Cidade que o Joao mora', )
 * 
 * , entao, vamos acessar o nome do objeto, joao.endereco., ja estamos aqui dentro desse objeto endereco, .cidade,
 * 
 * console.log('Cidade que o Joao mora', joao.endereco.cidade);
 * 
 * 11. Salvar e executar. Okay, retornou 'Rio de Janeiro'.
 * 
 * 12. E se nos quisermos alterar, vamos supor, o Joao esta escrito em um cadastro errado, com o numero 100, que devemos corrigir para o numero 101, entao,
 * 
 * joao.endereco.numero = 101;
 * 
 * , assim, nos alteramos o endereco do Joao.
 * 
 * 13. Okay? Vamos salvar e executar e dar uma olhada no endereco doJoao novamente. A primeira vez, estava com 100, e, depois, nos conseguimos alterar para 101.
 * 
 * 14. E se nos tentarmos acessar uma propriedade dentro de endereco que nao existe?,
 * 
 * console.log(joao.endereco.cep);
 * 
 * 15. Vamos executar, e aparece undefined, da mesma forma.
 * 
 * 16. Entao, para navegar dentro de um objeto, nos podemos usando ponto. Se nao existir a propriedade, vai ser undefined.
 * 
 * 17. Ah, e se nos acessarmos, vamos supor, que nos escrevemos, aqui, endereco errado, vamos supor que nos colocamos, aqui, endreco,
 * 
 * console.log(joao.endreco.cep);
 * 
 * , ou seja, essa propriedade endreco nao existe. Vamos ver o que que vai acontecer?
 * 
 * 18. Vai dar um erro, e olha so qual que eh o erro,
 * 
 * TypeError: Cannot read property 'cep' of undefined
 * 
 * , nao consegue ler a propriedade 'cep', onde? Em undefined. Por que em undefined? Porque joao.endreco eh undefined. Entao, em undefined, nao existe a propriedade cep, por isso que deu esse erro em endreco.
 * 
 * 19. E, Normandes, eu consigo fazer a leitura, o acesso dinamico aqui? Conseguimos, podemos fazer da seguinte forma, vamos dar uma olhada no estado dele ali, onde o Joao mora, usando o acesso dinamico. Entao, nos vamos acessar joao, abre chaves, endereco, abre chaves, estado,
 * 
 * console.log('Estado', joao['endereco']['estado']);
 * 
 * 20. Vamos salvar, executar, e deu 'Estado RJ'.
 * 
 * 21. Entao, essa eh a ideia que o instrutor queria mostrar, nos conseguimos colocar objetos dentro de objetos. No Javascript, isso eh bem usado. 
 * 
 * 22. Fim da Aula 04.003. Objetos Dentro de Objetos.
 * 
 * 
 */

/**Version 1 
var joao = {
    nome: 'João',
    idade: 25,
    logradouro: 'Av Brasil',
    numero: 100,
    complemento: 'Apto 202',
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
}
**/

/**Version 2.
var joao = {
    nome: 'João',
    idade: 25,
    endereco: {}
}
**/

/**Version 3. */
 var joao = {
      nome: 'Joao',
      idade: 25,
      endereco: {
          logradouro: 'Av Brasil',
          numero: 100,
          complemento: 'Apto 202',
          cidade: 'Rio de Janeiro',
          estado: 'RJ'
      }
 }

console.log(joao);

console.log(joao.endereco.cidade);

joao.endereco.numero = 101;
console.log(joao);

console.log(joao.endereco.cep);

/** console.log(joao.endreco.cep); **/

console.log('Estado', joao['endereco']['estado']);