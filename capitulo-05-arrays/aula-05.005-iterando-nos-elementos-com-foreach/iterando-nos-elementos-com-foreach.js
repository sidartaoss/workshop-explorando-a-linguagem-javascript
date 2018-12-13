/**
 * Aula 05.005. Iterando nos Elementos com ForEach
 * 
 * 1. Vamos la, nos temos um array de nomes,
 * 
 * var nomes = ['Joao', 'Pedro', 'Maria', 'Jose'];
 * 
 * , e nos queremos percorrer esse array, iterando sobre cada um dos elementos dentro dele.
 * 
 * 2. Existe a forma mais tradicional, usando o for normal, o instrutor vai fazer aqui, depois, o instrutor mostra com forEach, que, talvez, seja a forma mais direta, mais facil, rapida de colocar, okay?
 * 
 * 3. Vamos la, com for normal,
 * 
 * for (var i = 0; )
 * 
 * , porque nos precisamos de uma variavel que va percorrer os indices desse array, a posicao 0, 1, 2, 3, entao, nos comecamos do zero,
 * 
 * for (var i = 0; i < nomes.length; i++)
 * 
 * , ou seja, ele vai ate o tamanho do array, no caso, esse array tem 4, entao, comeca no 0, e vai ate o 3, nao eh? E, ai, nos vamos colocar, aqui, assim,
 *  
 * for (var i = 0; i < nomes.length; i++) {
 *      console.log('nomes[', i, ']=', nomes[i]);
 * }
 * 
 * , ou seja, logar nomes na posicao i.
 * 
 * 4. Entao, o i vai de 0 a 3, entao, esta certo e vai imprimir, para a gente, nomes dessa forma.
 * 
 * 5. Okay? Porem, essa forma aqui,
 * 
 * for (var i = 0; i < nomes.length; i++) {
 *      console.log('nomes[', i, ']=', nomes[i]);
 * }
 * 
 * , eh muito grande, e se nos nao quisermos, ou nao precisar desse indice aqui, nos so queremos os valores mesmo, e nao criar essas variaveis extras aqui, nao precisa.
 * 
 * 6. Entao, existe uma forma de nos acessarmos direto aqui, na API do array, existe o metodo, a funcao forEach(),
 * 
 * nomes.forEach();
 * 
 * , e olha so, vamos fazer ela bem devagar aqui, porque isso confunde bastante os programadores iniciantes em Javascript, e, principalmente, os que vem, as vezes, do Java, ali, nao sabem muito bem como colocar aqui, por que que abre e fecha parenteses, fecha chaves em lugares diferentes.
 * 
 * 7. Entao, olha so, o forEach eh uma funcao, entao, tem que abrir/fechar parenteses dessa funcao, okay?
 * 
 * 8. E, aqui dentro, o forEach() recebe uma nova funcao, okay? E, nessa funcao, eh que vai receber o elemento do array.
 * 
 * 9. Entao, nos temos que criar, aqui dentro, uma nova funcao,
 * 
 * nomes.forEach(function);
 * 
 * 10. E como que nos criamos uma nova funcao?
 * 
 * 11. function, abre/fecha parenteses desssa function, e abre/fecha chaves dessa function,
 * 
 * nomes.forEach(function() {});
 * 
 * 12. Okay? Vamos ate criar aqui do lado de fora,
 * 
 * function() {
 * 
 * }
 * nomes.forEach();
 * 
 * 13. Nao eh assim que nos criamos uma funcao?
 * 
 * 14. E, aqui, nos podemos escrever os dados dessa funcao, claro que ela poderia ter um nome aqui, mas nos nao vamos colocar, vai ser uma funcao anonima, okay?
 * 
 * 15. O que nos estamos fazendo, aqui, agora, eh isso aqui,
 * 
 * function() {}
 * nomes.forEach();
 * 
 * , e isso daqui que nos colocamos dentro do forEach(),
 * 
 * nomes.forEach(function() {});
 * 
 * , okay?
 * 
 * 16.  E, aqui, nos podemos dar um <ENTER> aqui, 
 * 
 * nomes.forEach(function() {
 * 
 * });
 * 
 * , por isso que termina aqui com a chaves, depois o parenteses, esse parenteses eh do forEach, dentro do forEach, tem uma funcao.
 * 
 * 17. E essa funcao vai receber o elemento do array.
 * 
 * 18. Esse e aqui, nos podemos chamar de qualquer nome esse parametro, elemento, e, alguma coisa assim,
 * 
 * nomes.forEach(function(e) {
 *      
 * });
 * 
 * , vamos chamar aqui de 'e' so. Okay? Eh o elemento aqui desse array. Entao, agora, nos podemos simplesmente colocar aqui, console.log(e),
 * 
 * nomes.forEach(function(e) {
 *    console.log(e);  
 * });
 * 
 * , por exemplo, okay?
 * 
 * 19. Esse e vai ser Joao, Pedro, Maria, e Jose.
 * 
 * 20. Vamos mandar executar, para ver? Retornou:
 *  Joao
    Pedro
    Maria
    Jose
 * 
 * 21. O instrutor acha essa forma aqui, com forEach, mais direta, mais facil do que ter que escrever tudo isso daqui,
 * 
 * for (var i = 0; i < nomes.length; i++) {
        console.log('nomes[', i, ']=', nomes[i]);
   }
 * 
 * , depois, na hora de acessar, nos temos que pegar o nome do array, aqui, nao, nos vamos direto no elemento. Se nos precisamos, vamos supor que, aqui, fosse fazer alguma conta, concatenar com alguma coisa desses elementos, nos poderiamos, ja, acessar direto cada um desses elementos do array.
 * 
 * 22. Entao, devemos lembrar do forEach, qe ele existe, e como ele funciona.
 * 
 * 23. Fim da Aula 05.005. Iterando nos Elementos com ForEach.
 * 
 * 
 */

var nomes = ['Joao', 'Pedro', 'Maria', 'Jose'];
for (var i = 0; i < nomes.length; i++) {
    console.log('nomes[', i, ']=', nomes[i]);
}

nomes.forEach(function(e) {
    console.log(e);
});