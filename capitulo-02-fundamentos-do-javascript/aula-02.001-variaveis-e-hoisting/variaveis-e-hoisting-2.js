/**
 * Aula 02.001. Variaveis e Hoisting
 * 
 * 25. Vamos fazer o seguinte,
 * 
*/
var percentualImposto = 0.15;
var totalImposto = valor * percentualImposto;

console.log('Total imposto a pagar', totalImposto);

var valor = 100;

/**
 * 26. O que que vai acontecer aqui agora? 
 * 
 * HOISTING
 * Vamos tentar traduzir antes de executar esse cara aqui, o que ele 
 * vai fazer?
 * 
 * var percentualImposto, totalImposto, valor;
 * percentualImposto = 0.15;
 * totalImposto = valor * percentualImposto;
 * 
 * console.log('Total imposto a pagar', totalImposto);
 * 
 * valor = 100;
 * 
 * 27. O Hoisting fala que iremos levar todas as declaracoes de 
 * variaveis la para cima, mas NAO as atribuicoes. Entao, ele vai 
 * fazer,
 * 
 * var percentualImposto, totalImposto, valor;
 * 
 * , vai pegar percentualImposto, totalImposto e valor e vai colocar
 * ali em cima.
 * 
 * 28. Depois, ele vai atribuir,
 * 
 * percentualImposto = 0.15;
 * 
 * 29. Depois, vai fazer essa conta aqui,
 * 
 * totalImposto = valor * percentualImposto;
 * 
 * 30. Depois, vai mostrar o log,
 * 
 * console.log('Total imposto a pagar', totalImposto);
 * 
 * 31. E, depois, vai atribuir,
 * 
 * valor = 100;
 * 
 * 32. Reparemos aqui, agora, nessa situacao quando nos declaramos,
 * atribuimos depois de usar a variavel. Estamos usando valor aqui,
 * 
 * totalImposto = valor * percentualImposto;
 * 
 * 33. Agora, ele levou a declaracao da valor la para cima, pegou o 
 * totalImposto e levou la para cima, pegou o percentualImposto
 * e levou la para cima, mas, para o percentualImposto, foi atribuido
 * um valor para ele, que eh esse aqui,
 * 
 * percentualImposto = 0.15;
 * 
 * 34. E o valor? O que que tem aqui nesse cara? nao tem nada, esta
 * indefinido, eh um valor indefinido.
 * 
 * 35. entao, se executarmos esse codigo aqui vai dar um NaN,
 * 
 * Total imposto a pagar NaN
 * 
 * , Not a Number. Nos ainda vamos ver sobre isso daqui, NaN, mas so 
 * para nos vermos que nao eh um valor esperado.
 * 
 * 36. Se nos declararmos um valor depois de precisarmos dele, nao vai
 * dar certo.
 * 
 * 37. Entao, eh muito importante nos conhecermos o Hoisting, sabermos
 * que ele existe, sabermos que eh isso aqui, para evitarmos bus.
 * 
 * 38. E como nos evitamos os bugs?
 * 
 * 39. Qual eh a boa pratica para nos fazermos quando estivermos trabalhando
 * com Javascrit?
 * 
 * 40. Devemos declarar sempre as variaveis no inicio.
 * 
 * 41. Eh simples para nos resolvermos esse problema. Devemos declarar
 * as variaveis sempre no inicio e nos nao vamos precisar pensar mais
 * nisso.
 * 
 * 42. Entao, o conselho do instrutor eh: o instrutor faria dessa forma:
 *
 * var percentualImposto = 0.15;
 * var valor = 100;
 * var totalImposto = valor * percentualImposto;
 * 
 * console.log('Total imposto a pagar', totalImposto);
 * 
 * , ou seja, deixaria todas as variaveis declaradas aqui em cima, e,
 * depois, usaria, e nao tentaria fazer algo estranho assim,
 * 
 * var percentualImposto, totalImposto, valor;
 * percentualImposto = 0.15;
 * totalImposto = valor * percentualImposto;
 * 
 * console.log('Total imposto a pagar', totalImposto);
 * 
 * valor = 100;
 * 
 * 43. Eh isso que o instrutor queria nos mostrar nesta aula, devemos
 * fazer mais testes. Como o instrutor ja disse, nos iremos ver mais 
 * detalhes. Se nos apagarmos var valor, em:
 * 
 * var percentualImposto = 0.15;
 * valor = 100;
 * var totalImposto = valor * percentualImposto;
 *
 * console.log('Total imposto a pagar', totalImposto);
 *
 * var valor;       /** Apagar esta linha *
 * 
 * , vai funcionar tambem. mas, ai, eh porque entram
 * questoes de escopo, essa variavel valor ja vai para um
 * escopo maior, um escopo global, e nao eh esse o objetivo. O objetivo
 * do instrutor eh somente explicar sobre o Hoisting. Entao, o instrutor
 * falou que essa variavel valor foi la para cima, por isso que, aqui,
 * deu certo.
 * 
 * 44. E, para finalizar, o instrutor so quer falar sobre algumas 
 * convencoes e regras de nomes de variaveis no Javascript.
 * 
 * 45. Elas devem comecar por uma letra, cifrao ($), ou underscore (_).
 * 
 * 46. Apos a primeira lietra, a gente pode colocar numeros
 * nos nomes das variaveis. Pela convencao, todas as variaveis devem
 * comecar com letra minuscula, e seguir o padrao CamelCase, ou seja,
 * em percentualImposto, a proxima palavra depois de percentual,
 * que eh imposto, comeca com a letra maiuscula, esse eh o padrao
 * CamelCase. 
 * 
 * 47. E sao Case Sensitive. Faz muita diferenca usar letra 
 * maiuscula e letra minuscula nos nomes das variaveis.
 * 
 * 48. Fim da Aula 02.001. Variaveis e Hoisting.
 * 
 */
