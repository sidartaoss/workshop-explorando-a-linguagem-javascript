/**
 * Aula 02.013. Estrutura de Controle While
 * 
 * 1. Vamos falar sobre a estrutura de controle while. Ela eh bem simples, nos escrevemos while, abre/fecha parenteses, abre/fecha chaves e, aqui, dentro dos parenteses, nos vamos colocar uma condicao que, enquanto o que estive aqui dentro for verdadeiro, ele vai ficar executando codigo entre essas chaves,
 * 
 * while () {
 * 
 * }
 * 
 * 2. Entao, imaginemos que facamos assim, 
 * 
 * var numero = 1;
 * 
 * , por exemplo, e nos vamos vamos ficar aqui, enquanto o numero for menor do que 10,
 * 
 * , entao, o numero comecou com 1, o numero eh menor do que 10? Eh, entao, nos podemos mostrar o numero, e nos podemos ir incrementando esse numero,
 * 
 * var numero = 1;
   while (numero < 10) {
    console.log('numero', numero);
    numero++;    
  }

  * , e vamos executar.

  3. Comecou no 1 e foi ate o 9. Por que ate o 9? Quando ele foi para 10, 10 eh menor do que 10? Nao, entao, ele saiu desse while.

  4. Ah, mas quando que a gente usa ele? Bom, isso vai aparecer regras em nosso sistema, quando estivermos programando, e nos vamos sentir a necessidade de percorrer algum elemento, vamos imaginar que estejamos trabalhando ja no Browser, e nos tenhamos varios checkboxes, por exemplo, e nos queremos percorrer todos eles, acessando atraves de um indice, alguma coisa assim, entao, nos pegariamos, por exemplo, o numero total de checboxes que nos temos no nosso html, por exemplo, aqui seria o indice dele, ou seja, numero, e, aqui, nos acessariamos atraves do indice, e iria incrementando, por exemplo.

  5. Mas nao daria para fazer com um for? Da, tambem, mas sao maneiras diferentes, o while, o instrutor gosta de usar quando esta preocupado mais na condicao, vai ficar incrementando ate acontecer determinada situacao, por exemplo, se o numero for igual a 5, dependendo do que estivesse acontecendo, vamos supor nos buscariamos aqui uma informacao, e essa informacao deu verdadeira, neste momento, entao, nos quermos sair desse while, eh so usar um break, quando nos damos um break, o comando break, nos saimos do loop,

   var numero = 1;
 while (numero < 10) {
    console.log('numero', numero);
    if (numero === 5) {
        break;
    }
 }

  6. Esse break tambem funciona para o for, para qualquer loop que nos estivermos executando, se nos dermos um break, nos conseguimos sair, entao, se mandarmos executar aqui, o ultimo numero que ele vai imprimir vai ser o 5, porque ele vai sair no 5. 

  7. Deu loop infinito, porque removemos o numero++, tem que continuar incrementando,

   var numero = 1;
   while (numero < 10) {
    console.log('numero', numero);
    if (numero === 5) {
        break;
    }
    numero++;    
 }

 8. Okay, ao executar, apareceu 1, 2, 3, 4, 5. 

 9. Entao, com o while, nos tambem conseguimos fazer o loop infinito. Se nos fizermos 
 while(true) {}, isso aqui eh um loop infinito, ele vai ficar aqui para sempre,

 while (true) {
     console.log('Fica aqui para sempre');
 }

 10. Entao, se quisermos criar um loop infinito, ate que uma condicao aconteca, e depois, dar um break, poderia ser feito assim, 
 
 while (true) {

 }

 , ou,

 while (1) {

 }

 , eh a mesma coisa.

 11. Sao situacoes que nos usamos pouco. While eh muito usado? Razoavelmente, em determinadas situacoes, nos vamos sentir a necessidade. 

 12. Devemos lembrar dele e, na hora da necessidade, eh so usar.

 */
 var numero = 1;
 while (numero < 10) {
    console.log('numero', numero);
    if (numero === 5) {
        break;
    }
    numero++;    
 }

 /**
 while (true) {
     console.log('Fica aqui paa sempre');
 }
 */