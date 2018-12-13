/**
 * Aula 02.011. Operador Ternario
 * 
 * 1. Para explicar sobre o operador ternario, vamos precisar usar um 
 * pouquino a imaginacao aqui.
 * 
 * 2. Pensemos com o instrutor que, em determinado momento, nos vamos
 * no servidor buscar um objeto. A gente ainda vai ver sobre objetos
 * mais para frente, ainda, ainda vamos ver como a gente consegue 
 * um servidor via AJAX, okay?
 * 
 * 3. Mas vamos imaginar, so para a gente aprender esse operador
 * ternario, para vermos um exemplo um pouco mias real, de aonde nos usariamos isso.
 * 
 * 4. e, ai, nesse objeto, teria algumas variaveis dentro dele, iremos
 * colocar variaveis soltas aqui. Entao, teria la uma propriedade dentro
 * desse objeto chamada temFoto, com o valor true, para falar que tem uma
 * foto.
 * 
 * var temFoto = true;
 * 
 * 5. Que foto eh essa, Normandes? Imaginemos que nos estamos montando uma 
 * pagina dentro de um sistema, e, ai, no sistema, existe uma area que nos
 * podemos mostrar a foto do perfil do usuario, tem varios sistemas que 
 * funcionam assim.
 * 
 * 6. Mas, so que, normalmente, nao eh obrigatorio nos informarmos. E ai, 
 * se nao eh obrigatorio nos informarmos, a gente pode mostar que ela
 * aquela foto mockizinho, uma foto que um cara, um desenho de um boneco,
 * vamos chamar aquilo la de mock, eh um mock da foto do perfil do usuario.
 * 
 * 7. Entao, vai vir aqui o temFoto. E, ai, se tier a foto, a gente vai
 * buscar o perfil.jpg.
 * 
 * 8. var temFoto = true;
 * // se tem: perfil.jpg
 * // se nao tem foto: mock-perfil.jpg
 * 
 * 9. Buscar isso onde, Normandes? Nos poderiamos colocar isso, em algum
 * momento, na tag <img src"...">, o que nos colocarmos dentro de src,
 * o proprio browser ja vai la buscar, fazer a requisicao e desenhar essa foto
 * pra gente na  tela.
 * 
 * 10. Entao, eh isso que nos queremos fazer aqui, colocar, aqui, o path
 * da foto,
 * 
 * // se tem: perfil.jpg
 * // se nao tem foto: mock-perfil.jpg
 * // <img src="pathFoto">
 * 
 * 11. Entao, vamos la, como eh que nos poderiamos fazer isso aqui?
 * 
 * 12. Vamos criar essa variavel aqui, pathFoto e, ai, nos vamos ter alguma 
 * coisa aqui nela,
 * 
 * var pathFoto = '';
 * 
 * 13. Nos poderiamos ter, por exemplo, se tem foto, ai, nos poderiamos
 * colocar pathFoto vai ser igual a 'perfil.jpg'. Todas as fotos salvas
 * aqui teriam esse nome, ou colocaria o nome do usuario, maria-perfil.jpg,
 * alguma coisa assim, senao, o pathFoto vai ser mock-perfil.jpg
 * 
 * var pathFoto = '';
 * if (temFoto) {
 *      pathFoto = 'maria-perfil.jpg';
 * } else {
 *      pathFoto = 'mock-perfil.jpg';
 * 
 * }
 * 
 * 14. E ai, na hora em que renderizassemos la a tag <img>, apareceria
 * a imagem.
 * 
 * 15. Vamos colocar so um log aqui para vermos, 
 * console.log('path da foto', pathFoto).
 * 
 * 16. Vamos la, neste caso aqui, se esta falando que temFoto, o path da foto
 * vai receber esse valor maria-perfil.jpg, entao, tem que aparecer,
 * no console, maria-perfil.jpg.
 *
 */
/** var temFoto = true; **/
/** var temFoto = false; **/
/** var temFoto = 1; **/
/** var temFoto = 0; **/
/** var temFoto = ''; **/
var temFoto = ' ';
// se tem: perfil.jpg
// se nao tem foto: mock-perfil.jpg

/**Version 1.
if (temFoto) {
    pathFoto = 'maria-perfil.jpg';
} else {
    pathFoto = 'mock-perfil.jpg';
}

console.log('path da foto', pathFoto);

**/

/**
 * 17. Okay, apareceu path da foto maria-pefil.jpg. Se nao tivesse
 * informado a foto,
 * 
 * var temFoto = false;
 * 
 * , iria aparecer, no console, path da foto mock-perfil.jpg.
 * 
 * 18. So que, quando a gente um if-else assim bem simples, como esse,
 * se, baseado em uma condicao, true ou false, booleano, aqui, bem simples,
 * nos atribuimos um valor ou atribuimos outro, o instrutor prefere 
 * muito mais reduzir daqui para colocar em uma linha so, usando o 
 * operador ternario.
 * 
 * 19. Sabe como?
 * 
 * 20. var pathFoto, vai receer uma expressao booleana,
 * 
 * var pathFoto = temFoto
 * 
 * , no caso aqui, temFoto vai ser true ou false,
 * 
 * var pathFoto = temFoto , colocamos um onto de interrogacao,
 * 
 * var pathFoto = temFoto ? , entao, caso for true, 'maria-perfil.jpg',
 * dois pontos, :, caso for false, 'mock-perfil.jpg'.
 * 
 * 21. Vamos executar? Continua funcionando da mesma forma. Se mudarmos
 * temFoto para true, muda o retorno no console para maria-perfil.jpg.
 * 
 * 22. Entao, nos reduzimos 5 linhas de codigo para uma linha de codigo.
 * Mas podemos usar isso muito, Normandes?
 * 
 * 23. Sim, o instrutor usa bastante, mas, apenas quando a condicao eh
 * uma condicao simples, e o retorno eh um retorno simples, porque nos
 * poderiamos encadear no retorno tambem, por exemplo, dentro do retorno,
 * nos poderiamos colocar uma outra expressao, um outro operador ternario
 * tambem, poderia colocar uma outra condicao, so que comeca a ficar
 * muito ruim para ler. E, ai, o instrutor prefere nao fazer,
 * ai, o instrutor vai para os if-else's da vida, por exemplo.
 * 
 * 24. Se for uma condicao simples, beleza. Ah, Normandes, aqui em
 * temFoto,
 * 
 * var pathFoto = temFoto ? 'maria-perfil.jpg' : 'mock-perfil.jpg';
 * 
 * , so pode ser true ou false?
 * 
 * 25. Sim, tem que retornar true ou false, mas nao, necessariamente,
 * false, pode ser, por exemplo, 1,
 * 
 * var temFoto = 1;
 * var temFoto = '';
 * 
 *  pode ser um numero, pode ser uma 
 * string qualquer, lembremos, vale a regra la do que eh false e do que
 * eh true no Javascript.
 * 
 * 
 */
var pathFoto = temFoto ? 'maria-perfil.jpg' : 'mock-perfil.jpg';

console.log('path da foto', pathFoto);

