/**
 * Aula 04.004. Apagando Propriedades do Objeto
 * 
 * 1. O instrutor vai nos mostrar, nesta aula, como nos podemos apagar uma propriedade de um objeto.
 * 
 * 2. Nos ja vimos como adicionar, e, agora, vamos ver como apagar uma propriedade.
 * 
 * 3. Como assim, Normades, apagar uma propriedade?
 * 
 * 4. Vamos dar uma olhada aqui no Joao,
 * 
 * console.log(joao);
 * 
 * { nome: 'Joao',
  idade: 25,
  endereco:
   { logradouro: 'Av Brasil',
     numero: 100,
     complemento: 'Apto 202',
     cidade: 'Rio de Janeiro',
     estado: 'RJ' } }
 * 
 * 5. Bom, e nos queremos apagar, agora, uma propriedade. Mas, Normandes, por que que voce quer apagar uma propriedade de um objeto? Isso eh util? Isso eh usado?
 * 
 * 6. Sim, isso eh usado. As vezes, nos estamos criando algum codigo mais generico, e para fazer alguma funcionalidade, e isso pode ser util para nos.
 * 
 * 7. Por exemplo, pensando aqui agora, nos temos uma tabela de itens, em uma pagina, e nos queremos controlar, cada item dessa tabela, tem um codigo, e esse codigo sera a propriedade de um objeto, por exemplo, vamos supor, nos teriamos alguma coisa assim, item, vai ser um objeto, a medida que esse objeto vai sendo criado dinamicamente, no vamos colocar aqui fixo, teria alguma coisa do tipo assim, o objeto codigo teria assim, AA1111, seria o codigo do objeto, e, aqui, nos teriamos mais informacoes, nos teriamos outro codigo aqui, AA2222, e outro objeto, e isso aqui iria crescendo, dinamicamente,
 * 
 * item = {
 *      AA1111: {},
 *      AA2222: {},
 * 
 * }
 * 
 * , nos ja vimos como adicionar esses caras eum um objeto, e, ai, vamos supor que estariamos la e o Usuario clicou em excluir e nos queremos remover essa propriedade do objeto. 
 * 
 * 8. Entao, isso eh possivel, eh usado, vai chegar o momento em que nos podemos precisar usar isso.
 * 
 * 9. Entao, vamos ver como que a gente pode apagar, eh so usar a palavrinha delete, e nos colocamos, aqui, na frente, a propriedade que nos queremos apagar. Entao, vamos supor que nos queiramos apagar a idade do joao, entao, 
 * 
 * console.log(joao);
 * delete joao.idade;
 * 
 * 10. Se mandarmos executar, primeiro, ele esta mostrando o joao com a idade, ai, depois, nos temos que mostrar, novamente, o joao sem a propriedade,
 * 
 * console.log(joao);
 * delete joao.idade;
 * console.log('->', joao);
 * 
 * , vamos colocar uma seta na frente, so para a gente ver.
 * 
 * 11. Okay, vamos executar. A primeira vez tem o a propriedade idade, no objeto joao, e, agora, na segunda vez, nao tem mais a propriedade idade, nos removemos-na.
 * 
 * 12. E nos conseguimos remover, inclusive, propriedades dentro, nos podemos ir navegando para excluir aonde ons quisermos, e podemos brincar com as outras formas de acesso as propriedades.
 * 
 * 13. Entao, nos poderiamos fazer algo assim, 
 * 
 * delete joao['endereco']
 * 
 * , poderia colocar .endereco tambem,
 * 
 * delete joao['endereco'].estado
 * 
 * , podemos colocar assim, podemos colocar, tambem,
 * 
 * delete joao['endereco']['estado']
 * 
 * , entao, nos podemos ir brincando com isso tambem.
 * 
 * delete joao['endereco'].estado;
 * console.log();
 * 
 * , e vamos mostrar, aqui, novamente, agora, vamos colocar duas setinhas, joao,
 * 
 * console.log('-->', joao);
 * 
 * 14. Executamos, a primeira vez, esta la com a idade, e tem o estado. Na segunda vez, com ->, ja nao tem a idade, mas tem o estado. E, na terceira vez, com -->, ja nao tem a idde e nao tem o estado, removemos a propriedade estado dentro do objeto endereco, que esta dentro do objeto joao.
 * 
 * 15. Entao, isso eh util, eh bom sabermos que existe isso aqui, para nos podermos brincar com mais, saber que, em determinados momentos, isso pode ser util para nos, em algum codigo mais generico.
 * 
 * 16, Fim da Aula 04.004. Apagando Propriedades do Objeto.
 * 
 * 
 */
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
delete joao.idade;
console.log('->', joao);

delete joao['endereco'].estado;
console.log('-->', joao);

