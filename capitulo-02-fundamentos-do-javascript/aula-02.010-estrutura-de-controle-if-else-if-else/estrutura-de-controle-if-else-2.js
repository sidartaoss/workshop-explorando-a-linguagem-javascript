/**
 * Aula 02.010 Estrutura de Controle If, Else If, Else
 * 
 * 13. Vamos usar este novo arquivo para o instrutor nos apresentar,
 * talvez possa ser um segredinho aqui para nos.
 * 
 * 14. Imaginemos, aqui, que tenhamos uma variavel valor, qie p isiarop 
 * vai informar um determinado valor na tela para nos e nos queremos
 * validar esse valor para mostrar alguma mensagem para ele.
 * 
 * var valor = 0;
 * 
 * 15. Bom, nos nao queremos que esse valor seja 0. Se ele informar um
 * valor 0, nos vamos mostrar uma mensagem para ele de erro.
 * 
 * 16. Entao, o que que nos poderiamos colocar aqui? Se o valor for ===
 * a 0, por exemplo, ai, nos poderiamos colocar aqui, 'Valr deve ser maior
 * que zero.',
 * 
 * if (valor === 0) {
 *      console.log('Valor deve ser maior que zero!');
 * }
 * 
 * , alguma coisa assim.
 * 
 * 17. Okay? Vamos executar aqui para ver. Retornou:
 * 'Valor deve ser maior que zero!'.
 * 
 * 18. Por que? Porque o valor que informamos, aqui, eh igual a zero.
 * Mas, ai, devemos lembrar daqueles detalhezinhos que o instrutor
 * nos falou que, no Javascript, os valores, eles tem uma representacao
 * true/false. Entao, nos nao precisamos fazer isso aqui,
 * 
 * if (valor === 0) {
        console.log('Valor deve ser maior que zero!');
   }

   , dessa forma, comparar === a 0. Vamos so lembrar aqui, estamos no 
   console do Node, se nos colocarmos dois sinais de onto de exclamacao,
   nos vamos estar afirmando, entao, vamos descobrir o valor booleano
   do que nos colocarmos aqui na frente,

   >!!0

   , entao, o zero eh false. Okay?

   19. E qualquer valor numerico, 3, por exemplo,

   >!!3

, eh true, 6, por exemplo,

>!!6

, eh true. Qualquer valor que nos colocarmos diferente de 0 vai ser true,
sempre. Okay?

19. Entao, o que que nos podemos fazer aqui?,

if (valor === 0) {
    console.log('Valor deve ser maior que zero!');
}

, o Javascipt nos permite colocarmos assim,

if (!valor) {
    console.log('Valor deve ser maior que zero!');
}

, ai, nos podemos negar, se o valor for igual a zero, vai ser false,
valor zero eh false, nega, fica true, entao, entraria dentro desse if,

if (!valor) {
    console.log('Valor deve ser maior que zero!');
}

20. Entao, nos executando aqui, continua mostrando essa mensagem,
'Valor deve ser maior que zero!'.

21. Entao, neste caso, o valor deve ser maior que zero para nao 
entrar nessa condicao, por exemplo, se nos colocarmos, aqui, 2,

var valor = 2;

, ai, ele ja nao entra ali e nao mostra aquila mensagem ali para nos.
 * 
 * 22. E, Normandes, e, se nos tivermos algum valor, por exemplo, idade,
 * que nao queremos que a idade tenha que ser, para o Usuario informar
 * e nos aceitarmos, a idade tem que ser um valor diferente de zero, 
 *
 * var idade = 10;
 * 
 * 23. Entao, vamos supor, se ele informar uma idade valida, ai, nos vamos
 * mostrar aqui algo assim, 
 * 
 * if (idade) {
 *      console.log('Daqui a 5 anos, voce tera', )
 * }
 * 
 * e, ai, vamos somar aqui, por exemplo, idade + 5.
 * 
 * if (idade) {
 *      console.log('Daqui a 5 anos, voce tera', idade + 5, 'anos')
 * }
 * 
 * 24. Okay? Vamos ver isso daqui. Retornou, 'Daqui a 5 anos, voce tera 15 anos'.
 * 
 * 25. So para brincar. So que nos so queremos mostrar essa mensagem se
 * ele informar uma idade. 
 * 
 * 26. Entao, nos poderiamos colocar, aqui, se nos colocarmos 0,
 * 
 * var idade = 0;
 * 
 * , por exemplo, 0 eh false, entao, ele nao entra no if, nao vai 
 * mostrar essa mensagem. Executamos e vemos que nao entrou no if, nao
 * exibiu a mensagem.
 * 
 * 27. -1 funciona, Normandes?
 * 
 * 28. Nos podemos ver no console do Node,
 * 
 * >!!-1
 * 
 * , -1 eh true ou false? Lembremos que o instrutor falou para nos que sao
 * so 6 casos que precisa lembrar, tirando o false, que eh sempre false,
 * entao, o zero eh o unico que eh false. No caso, -1 vai dar true, okay?
 * 
 * 29. Entao, no caso, aqui,
 * 
 * var idade = -1;
 * 
 * , vai mostrar, aqui, vai dar um valor estranho, porque, em 5 anos,
 * nos teremos 4 anos, porque ele tem -1 de idade,
 * 
 * 'Daqui a 5 anos, voce tera 4 anos.'
 * 
 * 30. Mas, o objetivo, aqui, nao eh validar isso. Poderiamos usar o 
 * operador de comparacao, 
 * 
 * if (idade > 0) {}
 * 
 * , mas o instrutor queria nos mostrar, aqui, que a idade, nos podemos 
 * usar direto aqui, para um cara do tipo number,
 * 
 * var idade = 10;
 * if (idade) {}
 * 
 * , vamos colocar, aqui, console.log(typeof idade), entao, aqui, vai
 * mostrar 'number',
 * 
 * var idade = 10;
 * console.log(typeof idade);
 * if (idade) {...}
 * 
 * , retorna que eh do tipo number e colocamos esse tipo number dentro
 * do if. Entao, isso eh bemdiferente do Java, se estivermos acostumados
 * com Java, entao, o instrutor queria nos mostrar isso para nos
 * podermos lembrar e ficarmos atentos que nos nao precisamos ficar
 * colocando === 0, == a algum valor, se nos queremos o valor true ou false
 * daquilo la.
 * 
 * 
 * 

 * 
 */

/** var valor = 0; **/
var valor = 2;

/**Version 1
if (valor === 0) {
    console.log('Valor deve ser maior que zero!');
}
*/
if (!valor) {
    console.log('Valor deve ser maior que zero!');
}

var idade = 10;
/** var idade = 0; **/
/** var idade = -1; **/
console.log(typeof idade);
if (idade) {
    console.log('Daqui a 5 anos, voce tera', idade + 5, 'anos');
}

