/**
 * Aula 05.002. Criando Arrays
 * 
 * 1. Vamos comecar, bem devagarzinho, com arrays, para ele ficar bem fixo na nossa cabeca.
 * 
 * 2. Entao, vamos la. Como nos criamos arrays? Vamos criar, aqui, uma variavel? Vamos chama-la de emails e vamos inicializar um array aqui, criar um array, na verdade.
 * 
 * 3. Como que nos fazemos isso? Usando colchetes. Abrimos e fechamos colchetes, pronto, esse cara aqui eh um array,
 * 
 * var emails = [];
 * 
 * 4. Vamos ver o tipo dele aqui, no console? Vamos ver, se nos criarmos, aqui,
 * 
 * > var emails = [];
 * 
 * > typeof emails
 * 
 * , retorna 'object'. Eh um object. Entao, o array eh um tipo object, so que eh um cara especial, que a gente consegue acessar atraves de indices.
 * 
 * 5. Vamos dar uma olhada aqui? Nos podemos colocar, aqui, por exemplo,
 * 
 * emails[0] = 'joao@email.com';
 * 
 * , vamos colocar na posicao 0, vamos colocar o 'joao@email.com'. Na posicao 1, vamos colocar 'maria@email.com',
 * 
 * emails[1] = 'maria@email.com';
 * 
 * Okay? Entao, nos podemos fazer isso aqui. Se nos quisermos acessar, vamos colocar o emails na posicao 0, vamos ler isso, emails na posicao 0,
 * 
 * console.log('emails[0]', emails[0]);
 * 
 * 6. Vamos acessar o emails na posicao 5, vamos ver o que vai sair aqui?, emails na posicao 5, vamos ver o que que acontece,
 * 
 * console.log('emails[5]', emails[5]');
 * 
 * 7. Retornou:
 * emails[0] joao@email.com
   emails[5] undefined
 * 
 * 8. Olha la, emails na posicao 0, que ele imprimiu aqui para nos, foi o joao@email.com, ta certo. 
 * 
 * 9. Agora, na posicao 5, nos colocamos alguma coisa na posicao 5? 
 * 
 * 10. Nao, entao, retornou undefined. 
 * 
 * 11. Nao da erro, reparemos que nao da erro. Ele simplesmente retorna undefined, porque nao tem essa posicao, retornou, para a gente, undefined.
 * 
 * 12. Normandes, tem como criar e declarar o array ao mesmo tempo?
 * 
 * 13. Tem sim, vamos supor que nos criamos um array de nomes. Aqui, entao, vamos abrir chaves, aqui, e nos vamos coloar aqui, o 'Joao'
 * , e a 'Maria'.
 *
 * var nomes = ['Joao', 'Maria'];
 * 
 * , por exemplo. Okay? Aqui, nos estamos fazendo a mesma coisa que em:
 * 
 * var emails = [];

   emails[0] = 'joao@email.com';
   emails[1] = 'maria@email.com';
 * 
 * , nos estamos criando e declarando ao mesmo tempo. Entao, nomes eh um array com duas posicoes, e 'Joao' eh a posicao 0 e 'Maria' eh a posicao 1.
 *  
 * 14. Quantos nomes tem nesse array? Vamos ver?
 * 
 * console.log('Quantos nomes?', nomes.length);
 * 
 * 15. Retornou: 'Quantos nomes? 2', ou seja, o tamanho desse array eh 2. 
 * 
 * 16. E olha so que coisa interessante, em nomes[4] e colocar, aqui, o 'Jose',
 * 
 * nomes[4] = 'Jose';
 * 
 * , agora, o que nos vamos fazer aqui,
 * 
 * console.log('Quantos nomes depois do Jose?', nomes.length);
 * 
 * , vamos ver o que que ele vai imprimir?
 * 
 * 17. Retornou: 
 * 
 * 'Quantos nomes depois do Jose? 5'
 * 
 * , entao, nos colocamos 'Joao' na posicao 0, 'Maria' na posicao 1 e, depois, nos fomos para a posicao 4. O que que tem na posicao, entao, 2 e 3?
 * 
 * 18. Nada. Okay? Oh:
 * 
 * console.log('nomes[3]', nomes[3]);
 * 
 * , retornou: 'nomes[3] undefined', ou seja, ficou undefined.
 * 
 * 19. Ou seja, ele inicializa, se nos colocarmos, aqui, na posicao 4, o 0 e o 1, o 2 e o 3 nos nao colocamos nada, entao, vai ficar undefined, mas o tamanho do array eh 5.
 * 
 * 20. Entao, 1 e 2 para 'Joao' e 'Maria', 3 e 4 sao para os undefined, e 5 eh na posicao 4.
 * 
 * 21. Okay? Entao, esse eh um comportamento meio estranho do array, no Javascript, nos da muita flexibilidade, nos conseguimos fazer um monte de coisas, mas tem essas questoes meio inseguras, nos temos que tomar cuidado com isso, porque isso pode inserir bugs no nosso codigo, se nos nao estivermos controlando muito bem os indices, ali, no array, nos vamos ver o tamanho dele, achando que tem, vamos supor que essa lista aqui, nomes, o total de usuarios ali que estao comprando alguma coisa, uma lista qualquer de nomes, e, ai, nos nao controlamos muito bem os indices, nos achamos que tem 5 nomes ali, sendo que, na verdade, tem 3.
 * 
 * 22. Entao, tem que tomar cuidado com isso ai do array. 
 * 
 * 23. Fim da Aula 05.002. Criando Arrays.
 * 
 */

var emails = [];

emails[0] = 'joao@email.com';
emails[1] = 'maria@email.com';

console.log('emails[0]', emails[0]);
console.log('emails[5]', emails[5]);

var nomes = ['Joao', 'Maria'];
console.log('Quantos nomes?', nomes.length);

nomes[4] = 'Jose';

console.log('Quantos nomes depois do Jose?', nomes.length);

console.log('nomes[3]', nomes[3]);