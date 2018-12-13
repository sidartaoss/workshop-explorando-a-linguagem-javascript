/**
 * Aula 02.001. Variaveis e Hoisting
 * 
 * 1. Ja vamos comecar a botar a mao na massa, criando alguns codigos 
 * de exemplo aqui, para o instrutor nos explicar muitos detalhes do
 * Javascript.
 * 
 * 2. Bem, esse primeiro detalhe eh meio estranho, eh um comportamento
 * meio maluco do Javascrit. Tem muitos desenvolvedores Javascripts
 * que nao sabem dele, que eh o hoisting.
 * 
 * 3. Eh um negocinho estranho, mas o instrutor vai nos explicar e,
 * depois, mais para a frente, vai nos falar novamente quando estivermos
 * trabalando em funcoes, mas eh bem importante entender
 * esse conceito para nos sabermos por que nos devemos sempre
 * declarar as variaveis no inicio de cada escopo. Ainda o instrutor
 * ira falar sobre escopo mais para a frente tambem.
 * 
 * 4. Bem, vamos criar um arquivo chamado variaveis-e-hoisting-1.js,
 * para nos podermos pegar no GitHub, se quisermos tambem. 
 * 
 * 5. Mas, vejamos so. Imaginemos que tenhamos a seguinte situacao. Em
 * um determinado momento, nos vamos ter uma variavel percentualImposto,
 * 
 * var percentualImposto
 * 
 * , por exemplo, que nos vamos colocar 0.15 por cento,
 * 
 * var percentualImposto = 0.15;
 * 
 * 4. E o instrutor quer que nos imaginemos que var eh a palavra-chave
 * para a gente declarar uma variavel o Javascript, e o instrutor quer
 * que nos assumamos que so existe essa forma de declarar variaveis
 * javascript.
 * 
 * 5. Nao eh, existem outras formas, mas o instrutor vai falar isso quando
 * estiver falando mais sobre escopos. Entao, para declararmos uma
 * variavel no Javascript, nos temos que colocar o var.
 * 
 * 6. Okay, entao criamos uma variavel chamada percentualImposto, com
 * 0.15, ou seja, se multiplicarmos algum valor por esse percentual de
 * imposto, nos vamos obter o valor do imposto.
 * 
 * 7. Entao, imaginemos que nos temos um var valor, com o valor 100,
 * 
 * var valor = 100;
 * 
 * , para facilitar as nossas contas. Ai, o total do imposto a pagar, 
 * ou seja, var totalImposto, seria o valor * percentualImposto,
 * 
 * var totalImposto = valor * percentualImpsto;
 * 
 * 8. E, ai, em determinado momento, nos vamos mostrar, 
 * 
 * console.log('Total imposto a pagar', totalImposto), e vamos colocar, aqui,
 * totalImposto,
 * 
 * 9. Se a gente pegar 0.15 vezes 100, da 15, que eh o totalImposto,
 * e, ai, vai aparecer 15. Vamos salvar e mandar executar.
 */

/** Version 1.
var percentualImposto = 0.15;
var valor = 100;
var totalImposto = valor * percentualImposto;

console.log('Total imposto a pagar', totalImposto);
*/

/**
 * 10. Apareceu, no console, 'Total imposto a pagar 15'. Ate ai, tudo 
 * bem, nao tem nenhum segredinho. Mas vejamos so o
 * que nos podemos fazer. Se nos tirarmos esse var daqui, 
 * 
 * var percentualImposto = 0.15;
 * valor = 100;
 * var totalImposto = valor * percentualImposto;
 *
 * console.log('Total imposto a pagar', totalImposto);
 * 
 * , reparemos bem, nos temos que colocar vamos assumir que nos precisamos
 * colocar o var sempre para declarar uma variavel. Entao, se
 * nos declararmos aqui var valor aqui embaixo, 
 * 
 * var percentualImposto = 0.15;
 * valor = 100;
 * var totalImposto = valor * percentualImposto;
 *
 * console.log('Total imposto a pagar', totalImposto);
 * 
 * var valor;
 * 
 * , depois de ter usado-a, isso tera algum problema, vai continuar 
 * funcionando? Vamos ver.
 */

/** Version 2.
 var percentualImposto = 0.15;
 valor = 100;
 var totalImposto = valor * percentualImposto;
 
 console.log('Total imposto a pagar', totalImposto);
  
 var valor;
*/

/** 11. Apareceu, no console, 'Total imposto a pagar 15'. Continua
 * funcionando. 
 * 
 * 12. Entao, nos declarando a variavel depois nao tem problema. Por que?
 * Nao tem problema assim, funcionou, conforme o esperado, mas isso
 * nao esta legal. 
 * 
 * 13. Por que?
 * 
 * 14. Isso acontece por causa do HOISTING. O que que o Hoisting faz?
 * O que que ele significa?
 * 
 * 15. Ele leva para cima todas as declaracoes de variaveis que
 * ele encontrar. Para cima como assim, normandes? 
 * 
 * 16. La em cima, mesmo, ele leva tudo que for declaracao de 
 * variavel para a primeira linha do arquivo. Eh como o seguinte,
 * ele traduziria, entre aspas, compilando, ele compilaria, nao eh uma
 * compilacao, mas, entre aspas, compilaria esse codigo,
 * 
 * var percentualImposto = 0.15;
 * valor = 100;
 * var totalImposto = valor * percentualImposto;
 *
 * console.log('Total imposto a pagar', totalImposto);
 *
 * var valor;
 * 
 * 
 * , e transformaria nisso aqui,
 * 
 * 
 * var percentualImposto, valor, totalImposto;
 * , depois,
 * percentualImposto = 0.15;
 * , depois,
 * valor = 100;
 * e,
 * totalImposto = valor * percentualImposto;
 * depois, colocaria o log,
 * console.log('Total imposto a pagar', totalImposto);
 * 
 * 
 * 17. Seria isso aqui, ele traduziria esse codigo aqui,
 * 
 * var percentualImposto = 0.15;
 * valor = 100;
 * var totalImposto = valor * percentualImposto;
 *
 * console.log('Total imposto a pagar', totalImposto);
 *
 * var valor;
 * 
 * , nisso:
 * 
 * var percentualImposto, valor, totalImposto;
 * percentualImposto = 0.15;
 * valor = 100;
 * totalImposto = valor * percentualImposto;
 * 
 * console.log('Total imposto a pagar', totalImposto);
 * 
 * 
 * 18. Entao, ele pega todas as declaracoes que ele encontrar de variaveis 
 * e leva la para cima.
 *  
 * 19. Por isso que funcionou nos atribuirms esse valor igual a 100 aqui,
 * 
 * valor = 100;
 * 
 * 20. Mas o que que eh importante que o instrutor vai nos falar aqui do 
 * Hoisting tambem?
 * 
 * 21. Eh que o Hoisting leva so a declaracao da variavel, e nao a 
 * atribuicao do valor.
 * 
 * 22. Entao, se nos fizermos algo assim, 
 * 
 * var percentualImposto = 0.15;
 * var totalImposto = valor * percentualImposto;
 *
 * console.log('Total imposto a pagar', totalImposto);
 *
 * var valor = 100;
 * 
 * 23. Se transformarmos iso daqui, vamos fazer o seguinte, para
 * ficarmos com os dois arquivos, vamos criar, aqui, um outro,
 * que vamos chamar de variaveis-e-hoisting-2.js
 * 
 * 24. Ver variaveis-e-hoisting-2.js.
 * 
 * 
 * 
 * 
 * 
*/
