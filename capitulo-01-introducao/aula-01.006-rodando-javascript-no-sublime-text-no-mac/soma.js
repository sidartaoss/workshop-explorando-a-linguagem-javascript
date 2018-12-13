/** 

Aula 01.006. Rodando JavaScript no Sblime Text no Mac

16. Vamos criar umavvariavel chamada x, que recebe o valor 10,

var x = 10;

, x vai receber o que esta em x + 5 

e, console.log('Resultado', x);

, alguma coisa assim. 

Vamos fazer diferente,

var a = 10;
var b = 5;
var resultado = a + b;

console.log('Resultado', resultado);

*/

/** Version 1.
var a = 10;
var b = 5;
var resultado = a + b;

console.log('Resultado', resultado);
*/

/**

16. Depois, a gente ainda vai ver essas funcoes, mas o que o instrutor que mostrar eh, vamos imprimir Resultado:, e vai mostrar o resultado dessa variavel, ou seja, deve aparecer 15 na tela.

17. Vamos salvar, chamando o arquivo de soma.js, um arquivo js que estamos criando. Quando ja salvamos, o Sublime ja colore aqui com com a cor do Javascript. O instrutor tem, aqui, um outro plugin, que eh o JavaScriptNext, que ja da suporte para EcmaScript 6, eh esse aqui que ele aplicou, mas, se colocarmos em JavaScript apenas, tambem vai funcionar.

18. Vejamos o que o instrutor vai fazer agora. Ele esta no console, ja esta com o node instalado, a versao v4.4.4, acessou o lugar onde esta localizado o arquivo soma.js. Se ele fizer:

node soma.js

, o node executa esse arquivo javascript., aparece Resultado: 15.

19. E foi o que aconteceu aqui, programinha simples, mas ele executou aquilo la. Ah, Normandes, mas voce nao ensinou que eu posso executar direto aqui pelo console do node? 

20. Pode, mas concordemos que, se for alguma coisa mias complexa, um pouquinho maior, vai ficar chato no cnsole do node, porque a gente nao consegue voltar, digitou aqui no console, var a = 10; ai, depois, a gente nao consegue subir ali, tem que colocar a setinha para cima para tentar ir alterando.

21. Entao, assim, eh legal o node aqui no Console? Eh, mas para fazer algum testezinho rapido, para tentar descobrir alguma coisinha rapida, mas para um testezinho um pouco maior, vamos escrever no arquivo, porque se quisermos aqui, ah, eu nao quero colocar 10 para atribuir para a, eu quero mudar o valor para 8, eh so salvar o arquivo e, no console, executar o arquivo, e, ai, ja mudou o resultado,

*/


var a = 8;
var b = 5;
var resultado = a + b;

console.log('Resultado', resultado);


/**
22. Mas nao eh so isso. Mas da para melhorar ainda mais. Com o Sublime, nos conseguimos ir aqui em Tools, Build System, e vamos criar um novo Build System..., esse New Build System... que nos vamos criar, eh, justamente, para o Node.js.

23. Entao, o instrutor vai ensinar o Sublime como executar este arquivo com o Node.js, o que estiver escrito aqui com o Node.js.

24. Entao, vamos criar um novo Build System. Ai, ele abre o arquivo untitled.sublime-build para nos escrevermos,

{
	"shell_cmd": "make"
}

e vamos colar, aqui:

{
	"cmd": "[node, $file]",
	"selector": "source.js",
	"working_dir": "${project_path:${folder}}",
	"path": "/usr/local/bin"
}

25. Entao, so para nos entendermos, ele vai executar um comando chamado node, onde esse comando esta, no Mac, da forma que o instrutor instalou, ele colocou em /usr/local/bin, entao, se formos, no console, e dermos o comando ls em /usr/local/bin/node, 


ls /usr/local/bin/node

vemos que o programinha do node esta la.

26. Caso tenhamos instalado em outro lugar, nos temos que trocar esse path. Entao, o comando node, 

"cmd": "[node, $file]",

, file eh o arquivinho que ele esta trabalhando aqui. O seletor,

"selector": "source.js",

, o instrutor acha que ele deve dar um nome ficticio, qual que eh o diretorio que ele esta trabalhando,

"working_dir": "${project_path:${folder}}",

, eh o diretorio atual, se estivermos trabalhando aqui em soma.js, eh esse diretorio aqui do arquivo soma.js. Be precisamos salvar esse cara aqui, ele ja vai trazer aqui para a pasta certinha, eh onde instalamos o Sublime 3 / Packages / User, ai vamos chamar o arquivo como node.sublime-build. 

27. Agora, nos vamos em Tools - Build System - node, e, ai, nos conseguimos, agora, vamos clicar em Tools - Build System - node, nos conseguimos mandar ele executar esse cara, sabe como? em Tools - Build, no caso do Mac, eh o Command + B, vamos clicar aqui em Tools - Build, e vai executar embaixo o JavaScript, aparece: Resultado: 13

28. Entao, se nos alterarmos para 10 e salvarmos, Command + B, e ele ja vai executar, ele ja vai tocando, aqui. Entao, essa eh a ideia. Entao, estamos fazendo alguns testes aqui, para sair dessa telinha, eh so apaertar Esc, Command + B, executa, Esc sai, entao, agora, com esse novo Build System do node aqui, se nos deixarmos Automatico, ele tambem consegue descobrir que eh o node, apertando Command + B, pela extensao do arquivo js, ele ja consegue descobrir que eh o node tambem. Entao, podemos deixar automatico, o instrutor nunca troca isso, entao, pode-se deixar Automatico, que vai executar tambem.

29. E, ai, fica uito mais facil, mais rapido, de nos testarmos, e nos vamos usar, nos vamos fazer os exemplos todos, em grande parte dos exemplos, no Sublime, ou, aqui, no console do Node.js, para a gente ir aprendendo as caracteristicas da linguagem. 

**/
