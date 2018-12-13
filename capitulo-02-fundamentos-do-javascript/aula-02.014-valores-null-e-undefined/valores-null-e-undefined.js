/**
 * Aula 02.014. Valores Null e Undefined.
 * 
 * 1. Vamos falar sobre dois valores bem especiais, no Javascript, que eh o null e o undefined.
 * 
 * 2. O null nos vamos ver mais detalhes sobre ele a medida que quando nos estudarmos sobre objetos, por enquanto, nos so precisamos pensar que existem esses dois casos especiais, de null e undefined, e que ambos indicam a ausencia de um valor com significado.
 * 
 * 3. Entao, existem o null e o undefined, e ambos existem paa isso, quando tem uma variavel , se ela esta apontando para null,se ela esta apontando para undefined, significa que aquela variavel nao tem um valor util para a gente, do tipo, se nos temos uma variavel x, por exemplo, e essa variavel tem um valor 5, ela tem um valor 5,
 * se ela esta apontando para null u undefined, nao tem um valor ali com significado.
 * 
 * 4. E esse comportamento, esses dois caras do null e o undefined do Javascript, tem gente que fala que isso foi meio que um erro no design do Javascript. Bem, nao vamos entrar no merito da questao, mas eh importante a gente tentar entende-los um pouquinho mais, saber como, por que que aparece o undefined, por que que aparece o null, e como trabalhar com eles. 
 * 
 * 5. Como o instrutor ja nos disse, o null nos vamos ver mais para a frente, quando vermos mais sobre objetos. Primeiro, vamos ver quando ele aparece.
 * 
 * 6. Entao, vamos so criar aqui uma variavel x, por exemplo, 
 * 
 * var x;
 * 
 * , sem inicializa-la, o que que vai sair aqui se nos mandarmos imprimir?
 * 
 * var x;
 * console.log(x);
 * 
 * 7. A saida disso aqui vai ser undefined. E isso eh bem diferente do Java, ne, se estivermos acostumados com o Java, se nos inicializamos uma propriedade de um objeto no Java, essa propriedade vai ser inicializada com null e, aqui no Javascript, eh undefined.
 * 
 * 8. E, alguns outros casos, tambem, quando o Javascript nao conseguir, precisa retornar alguma coisa, nao tem nada para retornar, ele vai retornar undefined, nos vamos ver mais exemplos, a medida que o curso avanca tambem.
 * 
 * 9. Mas uma coisa importante que o instrutor quer nos mostrar aqui eh quando a gente compara null com undefined e isso pode ser util em determinadas situacoes.
 * 
 * 10. Vamos voltar, entao, para o console do node, para a gente brincar com isso.
 * 
 * 11. Entao, olha so, nos temos, nos vamos comparar, aqui, null com undefined,
 * 
 * >null === undefined
 * 
 * , usando o operador longo com 3 iguais.
 * 
 * 12. Isso aqui vai resultar o que?
 * 
 * 13. Vamos dar um CTRL+C aqui e dar um typeof de null,
 * 
 * >typeof null
 * 
 * , que retorna 'object', nao eh um tipo null, eh um tipo object. E typeof undefied,
 * 
 * 
 * >typeof undefined
 * 
 * , eh do tipo 'undefined'. Entao, voltando, 
 * 
 * >null === undefined
 * 
 * , usando os 3 iguais aqui, ele vai verificar os tipos, os tipos sao diferentes?
 * 
 * 14. Sim, sao diferentes. Entao, eles nao sao iguais. Isso vai dar: false.
 * 
 * 15. Entao, se nos usarmos 3 iguais para comparar determinada variavel com null ou undefined, o resultado eh diferente. Vamos pensar um exemplo?
 * 
 * 16. Imaginemos que tenhamos uma variavel x, okay, nao vaos inicializa-la, x esta como undefined,
 * 
 * >var x; 
 * 
 * >x
 * 
 * , que resulta undefined. Entao, se compararmos x, usando 3 iguais, com undefined, beleza, isso vai dar true,
 * 
 * >x === undefined
 * 
 * 17. Mas x, usando 3 iguais, para null, vai dar false,
 * 
 * >x === null
 * 
 * , resulta false.
 * 
 * 18. Entao, nos podemos falar, 'Entao, se eu quiser sempre verificar se uma variavel eh null ou undefined, eu preciso comparar com os dois?'. Bom, sim, mas tem um macetinho aqui que o instrutor vai nos explicar.
 * 
 * 19. O instrutor vai comparar, agora, null e undefined usando o operador curto, com 2 iguais apenas, okay? Vamos ver o que que isso aqui vai sair?
 * 
 * >null == undefined
 * 
 * 20. Vai sair true. Olha so. Entao, se isso daqui retornar no true, significa o que? O Javascript faz uma conversao interna para tentar descobrir se os valores convertidos sao iguais. Como null e undefined, teoricamente, representam a mesma coisa, ou seja, a ausencia de um valor, entao, eles sao iguais, comparados com 2 iguais apenas. 
 * 
 * 21. Entao, isso eh importante e nos da um macetinho aqui para a gente comparar se um valor existe ou nao. 
 * 
 * 22. So para lembrar essa questao da comparacao, se compararmos 5 == '5', iso da true,
 * 
 * > 5 == '5'
 * 
 * , isso da true, porque o Javascript tenta converter os dados para comparar.
   
 23. Agora, 5 === '5', da false, porque ele coparar os tipos,

 >5 === '5'

 , retorna false.

 24. Voltando aqui, o que que pode ser util isso daqui para a gente,

 > null == undefined

 , ou seja, comparar null e undefined com 2 iguais?

 25. Entao, a varaivel x nos atribuimos 10,

 >var x = 10;

 >x

 , x esta valendo 10.

 26. Nos podemos, agora, comparar x usando dois iguais, com null, isso aqui vai dar false,

 >x == null

 , que retorna false, e com undefined,

 >x == undefined

 , que retorna false tambem. 

 27. Mas, ai, se, em determinado momento, o valor x for igual, por exemplo, a null,

 >x = null

 >x

 , inicializamos, agora, com null, o x, quando nao mostra nada, esta null.

 28. Se fizermos x == null, vai dar true,

 >x == null

 , retorna true. x == undefined vai dar true,

 >x == undefined

 , retorna true tambem.

 29. Vamos pegar x e esta recebendo, agora, eh so declarar, para x ficar undefined,

 >var x;

 >x

 , retorna null. Entao, vamos crir outra variavel, y,

 >var y;

 >y

 , que retorna undefined. 

 30. Se nos pegarmos y == null,

 >y == null

 , isso vai dar true. 

 31. y == undefined tambem vai dar true,

 >y == undefined

 , retorna true. Significa o que? Que nos podemos, entao, usar essa questao do null e do undefined serem iguais com o operador curto e criar algo do tipo assim, ter uma regrinha, vamos voltar aqui para o arquivo Javascript, poderia ter uma regrinha do tipo, if x for diferente de null, ai nos vamos colocar aqui, 'Existe um valor em x', senao, logamos x eh null/undefined.

 var x;
 console.log(x);

 if (x != null) {
    console.log('Existe um valor em x:', x);
 } else {
    console.log('x nao tem um valor util');
 }

 32. O que vai acontecer aqui? Vai aparecer 'x nao tem um valor util', porque ele ficou undefined aqui, incializado com undefined.

 33. Se colocarmos um valor em x, por exemplo, 10, exibe 'Existe um valor em x', que eh 10.

 34. Se inicializarmos com null,

 var x = null;

 , exibe: 'x nao tem um valor util'. 
 
 35. Entao, a ideia eh usar um operador curto para comparar com null quando nos queremos verificar se um determinado valor tem alguma coisa, nao eh null e nem undefined, tem alguma coisa, como eh que eu verifico? Coloca um operador curto.

 36. Mas devemos usar so neste caso aqui, e devemos usar sempre com bastante cuidado, lembrando que o operador curto so compara os valores, ele nao compara os tipos, entao se nos esquecermos e comecarmos a usar muito esse operador curto, para varios outros casos, pode aparecer bug no nosso programa.

 37. Fim da Aula 02.014. Valores Null e Undefined.

 */
/** var x; **/
/**  *var x = 10; **/
var x = null;
console.log(x);

if (x != null) {
    console.log('Existe um valor em x:', x);
 } else {
    console.log('x nao tem um valor util');
 }