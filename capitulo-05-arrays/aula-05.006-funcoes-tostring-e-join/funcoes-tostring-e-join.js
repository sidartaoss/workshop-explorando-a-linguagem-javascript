/**
 * Aula 05.006. Funcoes toString() e Join()
 * 
 * 1. Tem duas funcoes aqui que eh toString() e join(), no array, que sao bastante usadas tambem, nos vamos ver que, em varias situacoes, nos podemos resolver utiliza-las, que eh o seguinte.
 * 
 * 2. Nos temos um array la, chamado carros aqui, com varios carros selecionados, imaginemos que o usuario, na tela, selecionou varios checkboxes, alguma coisa assim, e, em determinado momento, nos surgimos com um array de carros.
 * 
 * 3. E, ai, nos precisamos mostrar isso na tela de volta atraves de uma string, por exemplo.
 * 
 * 4. Entao, o que que nos podemos fazer?
 * 
 * 5. Nos podemos usar o metodo, a funcao toString() ou usar a funcao join().
 * 
 * 6. Qual a diferenca das duas?
 * 
 * 7. Vamos la,
 * 
 * console.log(carros)
 * 
 * , se nos pegarmos, aqui, carros.toString(), 
 * 
 * console.log(carros.toString());
 * 
 * olha so o que que ele vai fazer, ele vai pegar o array, vai gerar uma string, obviamente, mas como que ele vai juntar esses elementos? O que que ele vai utilizar para juntar esses elementos?
 * 
 * 8. Virgula! Se nos mandarmos executar aqui, ele vai gerar uma nova string, so para nos vermos,
 * 
 * var c = carros.toString();
 * console.log(c);
 * console.log(typeof c);
 * 
 * , retornou:
 *  Fox,Celta,Gol
    string
 * 
 * , a string eh 'Fox,Celta,Gol' e o typeof eh string, ou seja, eh uma string separada por virgulas. 
 * 
 * 9. Eh isso que o toString() faz.
 * 
 * 10. Ah, Normandes, mas so que eu nao queria separados por virgula, eu queria colocar de outra forma, eu queria colocar um tracinho, queria colocar um espaco a mais.
 * 
 * 11. Ai que o join() vai nos ajudar. Nos podemos colocar, aqui, carros.join(), que tambem vai nos devolver uma string, so que, aqui, nos passamos o que nos queremos separar,
 * 
 * console.log(carros.join(''));
 * 
 * 12 Imaginemos que nos queremos separar por espaco, tracinho, espaco, ' - '. Okay? Vamos mandar executar,
 * 
 * , retornou: 'Fox - Celta - Gol'.
 * 
 * 13. Isso aqui tambem que gerou, foi uma string, uma unica string, onde ele fez o join de todos os elementos do array, separando por tracinho/espaco, colocando isso aqui, ' - ', entre os elementos.
 * 
 * 14. Entao, isso eh bastante util, podemos ter certeza que, em um determinado momento, em alguma logica nossa, nos vamos precisar usar o join().
 * 
 * 15. O join() eh bem mais usado do que o toString(), porque o toString nos limita a ser separado por virgula, tudo junto. 
 * 
 * 16. O join nao, o join nos podemos, queremos separar por virgula, so que com espacos, entao, coloca assim,
 * 
 * console.log(carros.join(', '));
 * 
 * , retornou: 'Fox, Celta, Gol'. 
 * 
 * 17. Entao, o join() eh bem mais usado do que o toString(), mas eh bom saber que existem os dois.
 * 
 * 18. Fim da Aula 05.006. Funcoes toString() e Join().
 * 
 */
var carros = ['Fox', 'Celta', 'Gol'];

var c = carros.toString();
console.log(c);
console.log(typeof c);

console.log(carros.join(' - '));

console.log(carros.join(', '));