/**
 * 
 *     Aula 06.004. Objeto Window
 * 
 * 3. O instrutor vai usar aqui a pagininha que a gente tinha feito do ultimo exemplo, aqui, que a gente estava fazendo os testes de debug, so para nos termos o Console do Google DevTools aberto aqui e o instutor poder nos mostrar algumas coisas do que o instrutor fez aqui no Javascript, para nos ja ficarmos atentos, que, quando a gente remover esse tipo de coisa, que ainda nao esta legal, isso aqui, okay? o instrutor ja nos disse, mas o instrutor vai nos mostrar o por que isso nao esta legal.
 * 
 * 4. Bom, quando a gente carrega aqui, uma pagina, o Browser fornece para a gente ja um objeto, no Javascript, chamado window.
 * 
 * 5. Dentro desse objeto, eh que existem varias das funcoes que a gente usou. Por exemplo, sabe essa funcao aqui oh, parseFloat()?
 * 
 * 6. Ela esta la no objeto window. Entao, vamos abrir a pagina, o Chrome DevTools, na Guia Console, vamos escrever window.parseFloat. Eh que nos nao precisamos escrever window. para acessar as funcoes, propriedades do window, nos podemos acessar diretamente.
 * 
 * 7. Entao o parseFloat, oh, se nos colocarmos, aqui, uma string, por exemplo, '3.4', ele vai fazer o parse disso aqui e transformar num number,
 * 
 * > window.parseFloat('3.4')
 * 
 * , retornou: <. 3.4
 * 
 * 8. Okay?
 * 
 * 9. Entao, olha so, esse window, ele esta la disponivel para a gente. E, quando nos criamos uma varivel solta, assim oh, 
 * 
 * var valorElement = document.getElementById('valor');
 * var totalElement = document.getElementById('total');
 * 
 * , onde esta direto no Javascript, nao esta dentro de uma funcao, por exemplo, o total, aqui, esta dentro de uma funcao,
 * 
 * valorElement.addEventListener('keyup', function(e) {
    var total = 0;
 * 
 * 
 * , nao eh?
 * 
 * 10. O valorElement nao, esta solto aqui. Quando nos criamos isso daqui, mesmo que seja com var, pode ser com var ou sem var, essa variavel vai para dentro de window.
 * 
 * 11. Quer ver? Como que o instrutor sabe disso, Normandes?
 * 
 * 12. Oh, valorElement. Vamos voltar aqui no Console do Chrome DevTools. Vamos digitar: window.valorElement,
 * 
 * > window.valorElement
 * 
 * , vamos dar um <ENTER> aqui, olha la, apareceu: <input type="text" class="form-control" id="valor">, ou seja, nos conseguimos acessar o input atraves aqui do valorElement, okay?
 * 
 * 13. Entao, isso aqui nao eh legal, por que?
 * 
 * 14. Imaginemos que nos tenhamos aqui, nos podemos carregar, na nossa pagina aqui, varios arquivos Javascript. A gente poderia ter varios aqui,
 *  <body>
 *         <div>
 *         </div>
 *      <script src="total.js"></script>
 *      <script src="calculo2.js"></script>
        <script src="validacao.js"></script>
    </body>
</html>
 * 
 * , e, ai, imagina, nos, nesse primeiro, aqui, total.js, nos definimos uma variavel chamada valorElement. Esse valorElement vai estar disponivel para os arquivos calculo2.js e validacao.js tambem, por que? Porque ele esta la dentro do objeto window, okay?
 * 
 * 15. Entao, isso nao eh legal de jeito nenhum a gente adicionar valores aqui no window. E, quando a gente faz isso, a gente esta falando que nos estamos adicionando uma variavel global no Javascript, esse valorElement virou uma variavel global. 
 * 
 * 16. Diferente de total, por exemplo, que eh uma variavel local, que esta dentro dessa funcao 'keyup', nos nao vamos conseguir acessar o valor dessa variavel total aqui atraves do window.
 * 
 * 17. Se nos formos colocar, aqui, no Console do Chrome DevTools, window.total, eh possivel, ate, que ele consiga recuperar pelo ID, ele pode fazer o getElementById() aqui, mas nos vamos ver que ele vai recuperar eh o totalElement aqui, vai ser o input,
 * 
 * <input type="text" class="form-control" id="valor">
 * 
 * , mas nao o valor 0, esse valor aqui oh, que a gente declarou,
 * 
 * valorElement.addEventListener('keyup', function(e) {
    var total = 0;
    ...
 *
 * , essa variavel total, com o valor 0. 
 * 
 * 18. Essa variavel total, aqui, esta protegida, okay? Entao, isso eh muito importante nos prestarmos atencao nisso, nao adicionar nada em window, okay?
 * 
 * 19. Window eh para deixar ele do jeito que ele veio, nao devemos tentar adicionar nada la nao, como o instrutor ja disse, a nao ser que nos tenhamos um motivo muito forte para fazermos isso, mas a maioria das vezes nos nao precisamos adicionar uma variavel, adicionar funcoes aqui, okay?
 * 
 * 20. Nos podemos ate brincar aqui, no Console do Chrome DevTools, se nos escrevermos uma variavel aqui, por exemplo, var nome = 'Joao';
 * 
 * > var nome = 'Joao';
 * 
 * , essa variavel nome, nos adicionamos ela solta aqui, nao foi? Entao, 
 * 
 * > window.nome
 * 
 * , aparece: 'Joao'. Nos adicionamos, ela, na verdade, dentro de window, okay? Agora, se nos criarmos uma funcao, vamos chamar essa funcao, sei la, de teste(), aqui, que, entao, ela vai ter uma variavel aqui, var codigo = 10;, por exemplo, vamos fechar aqui chaves, okay?
 * 
 * 21. Entao, nos temos essa funcao teste(). La dentro tem a declaracao da variavel codigo.
 * 
 * 22.
 * 
 * > window.codigo
 * 
 * , retorna undefined
 * 
 * 23. Mesmo se nos chamarmos a funcao, e, depois, window.codigo,
 * 
 * > teste()
 * 
 * > window.codigo
 * 
 * , continua dando undefined, porque essa variavel codigo esta protegida dentro do escopo dessa funcao. La na frente, o instrutor vai nos falar mais sobre isso, como a gente consegue proteger mais o nosso codigo assim. Okay? 
 * 
 * 24. Era isso que o instrutor queria nos mostrar sobre o objeto window, e eh muito importante nos conhecermos e evitarmos colocar elementos no escopo global.
 * 
 * 25. Fim da Aula 06.004. Objeto Window.
 *   
 */
console.log('Iniciando...');

var valorElement = document.getElementById('valor');
var totalElement = document.getElementById('total');

/** console.log('valorElement', valorElement); **/

valorElement.addEventListener('keyup', function(e) {
    /** console.log('valor', valorElement.value); **/
    var total = 0;
    /**  *var valor = valorElement.value; **/
    var valor = parseFloat(valorElement.value ? valorElement.value : 0);

    /**  *total = valor; **/
    if (valor > 0 && valor < 10) {
        total = valor + valor * 0.3 + 5;
                //  1   +   0.3     +   5   = 6.3                   
                // "1"  +   1 * 0.3     +   5 = "1"     + 0.3   + 5 = "10.3"    +   5      = "10.35"
    } else if (valor >= 10 && valor < 50) {
        total = valor + valor * 0.1 + 2;
    } else {
        total = valor;
    }

    totalElement.innerHTML = total;
    
});
