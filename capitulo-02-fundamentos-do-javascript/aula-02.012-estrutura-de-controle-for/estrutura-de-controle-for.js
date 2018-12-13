/**
 * Aula 02.012. Estrutura de Controle For
 * 
 * 1. Vamos ver, agora, sobre o for. Criamos um arquivinho aqui chamado
 * estrutura-de-controle-for.js, e vamos la.
 * 
 * 2. Vamos brincar. A primeira forma eh a forma mais simples, onde nos
 * temos a declaracao, separa, coloca um ponto e virgula, onde nos
 * vamos fazer a comparacao, entao, vamos supor, se for menor do que
 * 5, i++, e um incremento.
 * 
 * 3. Entao, o for eh sempre dividido nessas 3 partes, inicializacao,
 * comparacao, e incremento.
 * 
 * 4. Ele executa a primeira vez a inicializacao, so uma vez, depois, vai
 * verificar a comparacao, se deu true, ele executa. Apos a execucao,
 * ele vai incrementar e fazer a comparacao novamente, ate essa comparacao
 * ser false. Quando a comparacao for false, ele encerra o for.
 * 
 * 5. Okay? Para a gente brincar aqui, vamos colocar aqui o i aqui na 
 * frente, para a gente ver,
 * 
 * for (var i = 0; i < 5; i++) {
 *      console.log('i', i);
 * }
 * 
 * 6. Por que que foi ate o 4, Normandes, nao foi ate o 5? Porque comecou 
 * no zero, 0 eh menor do que 5? Eh, entao, a gente mostrou 0. Incrementamos
 * fomos para 1, 2, 3, 4, na hora que verificou 5 < 5?, ai deu false,
 * e ele saiu, entao, ele nao mostra o 5.
 * 
 * 7. Mas, o for, aqui, no Javascript, tem alguns segredinhos, algumas
 * coisas diferentes. 
 * 
 * 8. O instrutor, particularmente, nao gosta, o instrutor acha que o 
 * codigo fica meio confuso, mas valmos la, o intrutor ira mostrar.
 * 
 * 9. Imaginemso que temos uma string,
 * 
 * var s = 'AlgaWorks';
 * 
 * , e, ai, nos querremos, a gente vai colocar assim,
 * 
 * for (var k = 0, tamanho = s.length; k < tamanho; k++) {
 * 
 * }
 * 
 * , vamos por partes, aqi, o que o instrutor fez. Reparemos que, aqui, 
 * na primeira expressao, porque o for eh separdo por 3 expressoes,
 * a antes do primeiro ponto e virgula, entre os dois pontos e virgulas
 * e depois do ultimo ponto e virgula.
 * 
 * 10. Reparemos que, aqui, nos fizemos duas inicializacoes, nos podemos
 * fazer isso,
 * 
 * for (var k = 0, tamanho = s.length; ...) {}
 * 
 * 11. Nos podemos declarar, aqui, varias inicializacoes, e colocar, 
 * aqui, o tamanho. Entao, vamos la,
 * 
 * var s = 'AlgaWorks';
 * for (var k = 0, tamanho = s.length; k < tamanho; k++) {
 *     console.log('k', k);
 * }
 * 
 * , vamos colocar k para a gente ir separando e ir vendo cada um.
 * 
 * 12. Aqui, ele vai de 0 a 8, porque AlgaWorks tem 9 caracteres. Por que
 * nao aparece o 9? Porque aqui,
 * 
 * k < tamanho
 * 
 * , esta menor, <.
 * 
 * 13. Entao, 'AlgaWorks' tem 9 caracteres, entao, tamanho vai ser inicializado
 * com 9, quando 9 < 9, ele sai, por isso que nao mostra o 9.
 * 
 * 14. O instrutor nao gosta disso daqui,
 * 
 * tamanho = s.length;
 * 
 * , eh uma opcao do instrutor, pois o instrutor preferiria definir assim,
 * 
 * for (var k = 0; k < s.length; k++) {}
 * 
 * 15. Ah, Normandes, mas toda hora voce esta chamando .length aqui na
 * String.
 * 
 * 16. Eh verdade, mas, por causa de 0,0001 milissegundos, o instrutor
 * nao sabe se valeria definir assim,
 * 
 * tamanho = s.length;
 * 
 * , para prejudicar a legibilidade do codigo. Depende. Eh bom saber que
 * existe, pode ser que, em determinado momento, nos precisemos usar
 * isso. 
 * 
 * 17. Entao, nos nao precisamos inicializar so uma variavel, podemos
 * inicializar mais do que uma e, se quisermos inicializar por fora,
 * eh possivel tambem, nos podemos colocar,
 * 
 * var j = 5;
 * 
 * , vamos inicializar com 5. Ai, nos poderiamos colocar aqssim,
 * 
 * for (;)
 * 
 * , iniciando por ponto e virgula, porque o j aqui vai ser inicializado
 * por fora, entao, nos nao precisamos colocar,
 * 
 * for (; j < 9; j++) {
 *      console.log('j', j);
 * }
 * 
 * 18. Executamos, e exibiu, no console, 5, 6, 7, 8.
 * 
 * 19. Entao, nao somos obrigados a definir a primeira expressao, de
 * inicializacao.
 * 
 * 20. Da mesma forma que nao somos obrigados a colocar a ultima expressao,
 * de incremento, entao,
 * 
 * var z = 0;
 * for (; z < 4; )  {
 *      console.log('z', z);
 * }
 * 
 * , podemos fazer isso aqui tambem. Faltou incrementar o z, ao executar, entrou
 * no loop infinito. Como nos fazemos para sair do loop infinito? CTRL+C.
 * 
 * 21. Aqui em Tools - Cancel Build, no Sublime Text, nos conseguimos
 * ver.
 * 
 * 22. Entao, faltou nos incrementarmos z,
 * 
 * var z = 0;
 * for (;z < 4;) {
 *      console.log('z', z);
 *      z++;
 * }
 * 
 * , ao executar, deu 0, 1, 2, 3.
 * 
 * 23. E se nos nao quisermos colocar nada, eh possivel tambem? Nos
 * podemos colocar dessa forma,
 *
 * for (;;) {
 *      console.log('infinito');
 * }
 * 
 * 24. Isso aqui eh  que? Um loop infinito.
 * 
 * 25. Vamos declarar uma variavel aqui, so para a gente,
 * 
 * l = 0;
 * for (;;) {
 *      console.log('->', l++);
 * }
 * 
 * , so para a gente ver que esta em um loop infinito. Vamos mandar executar,
 * CTRL+C para cancelar.
 * 
 * 26. Se quisermos sair desse loop infinito, nos podemos colocar alguma
 * coisa assim,
 * 
 * var l = 0;
 * if (;;) {
 *      console.log('->', l++);
 *      if (l === 100) {
 *          break;
 *      }
 * }
 * 
 * , vamos ver, chegou ate 99, incrementou, foi para 100, deu 100, 
 * ele saiu, foi ate o 99, entao.
 * 
 * 27. Normandes, voce usa isso aqui dess forma? O instrutor nao lembra
 * a ultima vez que usou, mas eh bom saber que existe essa forma,
 * pode ser que uma determinada logica que estejamos fazendo, nos precisemos
 * inicializar coisas antes, mas, o instrutor, normalmente, nao usa
 * isso aqui,
 * 
 * // loop infinito
 * var l = 0;
 * for (;;) {}
 * 
 * , mas eh bom saber que existe.
 * 
 * 28. Fim da Aula 02.012. Estrutura de Controle For.
 */

for (var i = 0; i < 5; i++) {
    console.log('i', i);
}

var s = 'AlgaWorks';
for (var k = 0, tamanho = s.length; k < tamanho; k++) {
    console.log('k', k);
}

var j = 5;
for (; j < 9; j++) {
    console.log('j', j);
}

var z = 0;
for (;z < 4;) {
    console.log('z', z);
    z++;
}

/** Loop Infinito */
var l = 0;
for (;;) {
    console.log('->', l++);
    if (l === 100) {
        break;
    }
}
