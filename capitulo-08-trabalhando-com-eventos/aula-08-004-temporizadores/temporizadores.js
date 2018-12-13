/**
 *     Aula 08.004. Temporizadores.
 * 
 * 11. Ai, existe, aqui, no Javascript, oh, 
 * 
 * setTimeout
 * 
 * , onde eu vou passar, aqui, uma funcao,
 * 
 * setTimeout(function () {});
 * 
 * e, depois, virgula, o tempo que eu quero que essa funcao seja executada,
 * 
 * 
 * setTimeout(function () {},   );
 * 
 * , ou seja, a gente esta falando em eventos, se eu colocar aqui oh, isso aqui esta em milissegundos, se eu colocar 3000, ou seja, depois de 3 segundos, esse evento aqui sera chamado, sera lancao.
 * 
 * setTimeout(function () {
 * 
 * 
 * }, 3000);
 * 
 * 
 * , okay?
 * 
 * 12. Entao, eu vou colocar, aqui, eu posso pegar o botao, 
 * 
 * $('#botao-clique-aqui').show();
 * 
 * , okay? So fazer isso,
 * 
 * setTimeout(function () {
 *      
 * }, 3000);
 * 
 * , vamos Recarregar a pagina e Re-testar.
 * 
 * 13. Olha la, apareceu o botao, entao, jamos mais uma vez? Nao esta o botao aparecendo, depois de 3 segundos, apareceu o botao.
 * 
 * 14. Beleza? Entao, essa eh a ideia, ainda, dessa ultima parte que eu queria te mostrar, do setTimeout, onde voce passar uma funcao, okay?
 * 
 * 15. Oh, repara bem, deixa eu apagar aqui de novo, 
 * 
 * setTimeout(function () {}, 3000);
 * 
 * , oh, eh a funcao inteira, virgula, o tempo que eu quero esperar. Okay?
 * 
 * 16. Fim da Aula 08.004. Temporizadores.
 *  
 */
$(function () {

    setTimeout(function () {

        $('#botao-clique-aqui').show();
    }, 3000);

});