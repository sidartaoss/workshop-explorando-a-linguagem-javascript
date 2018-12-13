/** 
 * Aula 02.002. Tipagem Dinamica
 * 
 * 1. No Javascript, a tipagem eh dinamica. Vamos ver alguns exemplos 
 * aqui e conversar um pouco sobre isso tambem.
 * 
 * 2. Para declarar uma variavel no Javascript, entao, a gente vai usar
 * a palavrinha-chave var, enao, 
 * 
 * var idade = 25;
 * 
 * console.log(idade);
 * 
 * , vamos mandar mostrar so o valor da variavel e mais nada.
 * 
 * 2. Mostra 25.
 */

/**Version 1.
var idade = 25;
console.log(idade);
**/


/**
 * 3. Okay, nao tem problema nenhum, mas vamos continuar brincando. Nos
 * podemos fazer o seguinte, 
 * 
 * idade += ' anos';
 * 
 */


/**Version 1.
idade += ' anos';
console.log(idade);
**/

/**
 * 
 * 4. O que nos achamos que vai acontecer? Qual eh o tipo de dado da variavel
 * idade? 
 * 
 * 5. Aqui,
 * var idade = 25;
 * console.log(idade);
 * 
 * , ele mostrou 25. Depois, nos egamos o que estava em idade, que, no 
 * caso, seria 25, e concatenamos com uma string ' anos', e ele vai 
 * mostrar essa mesma variavel idade em console.log().
 * 
 * 6. Ou seja, nos estamos egando uma variavel que nos colocamos um
 * numero e, depois, nos estamos transformando-a em uma string, porque,
 * se nos concatenarmos um numero com uma string, a ideia eh virar uma
 * string.
 * 
 * 7. Mas nos podemos atribuir para a mesma variavel idade, qe fo
 * criada commo um numero?
 * 
 * 8. Sim. Isso aqui vai funcionar,
 * 
 * idade += ' anos';
 * console.log(idade);
 * 
 * 9. Entao, o tipo de dado aqui do Javascrit muda, reparemos que
 * nao colocamos aqui falando que esse cara seria um numero inteiro,
 * 
 * var idade = 25;
 * 
 * , de repente, ele mudou para uma string. Eh diferente do Java, se 
 * estivermos acostumados com o Java, no Java, a gente declara
 * assim, 
 * 
 * int i = 25;
 * 
 * e pronto, esse i vai ser um inteiro para o resto da vida dele.
 * 
 * 10. Se declararmos,
 * 
 * String s = ""
 * 
 * , no Java, teriamos que declarar com aspas duplas. no Javascript, o 
 * instrutor costuma declarar com aspas simples. 
 * 
 * 11. A string,
 * 
 */

/** Java */
 /**
 int i = 25;
 String s = "AlgaWorks";

/*


/**
 * 
 * String s = "AlgaWorks";
 * 
 * , por exemplo, no Java, essa variavel s vai ser String para o resto da vida,
 * entao, esse i vai ser inteiro para o reesto da vida.
 * 
 * 12. Diferente do Javascript, onde nos declaramos idade,
 * mas nos nao falamos nem qual eh o tipo var, nao esta falando que
 * tem que ser inteiro, nada, var eh so par falar que eh uma variavel.
 * 
 * 13. Entao, idade eh igual a 25. Entao, ele assume que essa variavel
 * aqui eh do tipo number. 
 * 
 * 14. Depois, ele troca-a para o tipo string. Vamos ver? tem jeito de a
 * gente ver isso. Nos vamos colocar assim, nde nos vamos usar o 
 * operador typeof, que nos diz qual eh o tipo da variavel que 
 * nos vamos colocar aqui na frente, qual eh o tipo de dado dessa
 * variavel. Entao, aqui, nos vamos ver que vai dar number,
 * 
 * var idade = 25;
 * console.log(typeof idade);
 * 
 * 15. E, aqui, 
 * 
 * idade += ' anos';
 * console.log(typeof idade);
 * 
 * , vai mudar, ele vai passar a ser uma string. Vamos ver?
 * 
 * var idade = 25;
 * console.log(typeof idade);
 * console.log(idade);
 * 
 * idade += ' anos';
 * 
 * console.log(typeof idade);
 * console.log(idade);
 * 
 */

/**Version 2.
 var idade = 25;
 console.log(typeof idade);
 console.log(idade);
  
 idade += ' anos';
 
 console.log(typeof idade);
 console.log(idade);
**/


/**
 * 16. Retornou: 
 * number 
 * 25
 * string
 * 25 anos
 * 
 * 17. Primeiro, ele mostrou que eh um number e mostrou 25. Depois,
 * mostrou uma string e '25 anos'.
 * 
 * 18. Ou seja, o tipo de dado da variavel idade mudou. Isso significa
 * a tipagem dinamica. 
 * 
 * 19. E, ai, nos podemos perguntar, Ah, Normandes, e isso eh bom ou isso
 * eh ruim? 
 * 
 * 20. Bom e ruim, ao mesmo tempo. Nos temos vantagens e desvantagens
 * como sempre. No podemos ter vantagens aqui em relacao a flexibilidade,
 * nos podemos criar algum sistema mais complexo, claro que para 
 * sistemas mias simples, mais curtos, isso nao vai ser tao importante
 * assim, nao vai fazer tanta diferenca, mas, em sistemas mais complexos,
 * nos temos uma flexibilidade melhor, usando a tipagem dinamica.
 * 
 * 21. E a desvantagem eh que nos podemos perder o controle, nos podemos
 * cometer erros aqui que nos vamos descobrir so em tempo de execucao,
 * ou traz uma certa inseguranca, dependendo do tamanho do programa,
 * nao em um programinha desse tamanhozinho aqui, mas, imaginemos um
 * programa grande, enorme, onde nos nao sabemos de onde veio aquela
 * variavel, que tipo que ela eh, nos recebemos-na em uma funcao, eh
 * um inteiro, eh um numero, eh uma string? O que que eh essa variavel?
 * 
 * 22. Entao, existe esse contra ai. 
 * 
 * 23. Entao, eh isso ue o instrutor queria mostrar sobre a 
 * tipagem dinamica. A gente pode colocar, vamos fazer aqui, por ultimo,
 * vamos passar idade para receber um tipo boolean,
 * 
 * idade = false;
 * console.log(typeof idade);
 * console.log(idade);
 */
 var idade = 25;
 console.log(typeof idade);
 console.log(idade);
  
 idade += ' anos';
 
 console.log(typeof idade);
 console.log(idade);

 idade = false;
 console.log(typeof idade);
 console.log(idade);

/**
 * 24. Okay, vamos mandar exevcutar. Retornou:
 * number
 * 25
 * string
 * 25 anos
 * boolean
 * false
 * 
 * 25. Depois, nos transformamos-na para boolean, atribuimos um valor
 * falso, e imprimimos esse valor falso. Entao, aqui, nos vimos tres
 * tipos de dados. nos vamos ver, agora, esses dados mais em detalhe,
 * nas proximas aulas, mas a variavel assumiu tres tipos de dados diferentes
 * number, string, boolean, mas a mesma variavel idade.
 * 
 * Fim da Aula 02.002. Tipagem Dinamica.
 */


