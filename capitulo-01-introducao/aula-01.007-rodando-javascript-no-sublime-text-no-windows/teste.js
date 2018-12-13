/** 

	Aula 01.007. Rodando Javascript no Sublime Text no Windows

1. Nesta aula aqui, agora, o instrutor quer nos mostrar como executar Javascript direto com editor de texto, que eh o Sublime Text no Windows

2. Entao, o instrutor ja tinha falado em outra aula, o instrutor baixou uma versao do Windows 10, eh a versaso que o instrutor esta usando, uma licenca de teste, porque ele nao tem Windows 10 aqui.

3. Ate agora, aqui, no Windows, nos instalamos o node.js, na versao v4.4.4, e nos queremos, agora, executar o codigo javascript a partir do editor de texto, que eh o Sublime Text.

4. Eh um editor que o instrutor gosta bastante, usa muito, ah, Normandes, eu quero usar outro, posso? Pode usar, fique a vontade, podemos usar o editor que quisermos. O instrutor vai fazer muita coisa aqui no Sublime, entao, quer deixar aqui a dica como ele monta o ambiente para nos.

5. Mas o Sublime eh bem iteressante, o instrutor acha que vale a pena nos darmos uma olhada nele. Se clicarmos, no site sublimetext.com, em Download, eh so baixar o Windows64 bits, ele instalou o Sublime, pronto, agora, o Sublime esta aberto na tela do instrutor. Ele fica, normalmente, com a telinha preta, so que, para a aula, o instrutor acha que fica mais interessante mostrar com o fundo branco.

6. Entao, vamos la, o instrutor vai nos mostrar o que que nos vamos fazer aqui. Primeiro, depois de instalado aqui o Sublime, nos vamos criar, qual que eh a ideia? Primeiramente, o instrutor vai nos mostrar o que o Node.js eh capaz de fazer. 

7. Nos podemos criar, aqui, um arquivo javascript e vamos colocar, aqui, 

var a = 10;
var b = 5;

var resultado = a + b;

console.log('Resultado:', resultado);

*/

var a = 10;
var b = 5;

var resultado = a + b;

console.log('Resultado:', resultado);


/**
8. Vamos salvar esse arquivo como teste.js. 

9. Entao, salvamos um arquivo javascript que tem declarado duas variaveis, somando-as e entegando a variavel resultado e ostrando na tela.

10. Bem simples, bem simples. No propmpt de comando, se entrarmos no local onde esta salvo o arquivo, 

10.1. cd C:\Users\SEMPR\workshop-explorando-a-linguagem-javascript\capitulo-01-introducao\aula-01.007-rodando-javascript-no-sublime-text-no-windows

10.2. dir

, vemos que tem um arquivinho teste.js. Se fizermos node teste.js, o Node.js vai executar esse arquivo aqui e mostrar o resultado, que eh 'Resultado: 15', na tela para nos.

11. Entao, esse codigo que nos fizemos neste arquivo nos conseguimos executar 	ele atraves do node. 

12. Bom, Normandes, mas voce nao ensinou para a gente que nos podemos vir aqui e executar a partir do console aqui? Sim, nos podemos ir no console e colocarmos>

12.1. node

12.3. var a = 10;

, so que, assim, se nos precisarmos voltar aqui em cima e alterar esse valor, nos nao conseguimos, nos nao conseguios editar, nos temos que colocar a setinha para cima, ali, alterar, entao, nao eh tao pratico, eh bem legal este console aqui, mas nao eh tao pratico para arquivos maiores, quando a gente esta fazendo algum teste maior.

13. Entao, para arquivos maiores, nos vamos preferir usar, salvar aqui no Sublime, e executar aqui com o Node.js.

14. Se fosse so executar assim, no prompt do Windows, ja estaria bem legal, nos ja podemos salvar aqui um arquivo, ir no prompt de comando do Windows, dar o comando do node e ver o resultado.

15. Mas nao eh so isso nao. Da para a gente melhorar e executar a partir de dentro do Sublime Text. Ele tem um negocinho aqui chamado de build system, em Tools - Build System, New Build System..., entao, nos vamos criar um novo Bukld System, , que sera o node.

16. Nos vamos criar esse Buyild System aqui. Vai abrir o arquivo untitled.sublime-build. O que que esta fazendo esse esse arquivo aqui? Primeiro, ele vai executar o comando node em cima do arquivo que a gente tiver aqui, entao, 

"selector": "source.js",
	"working_dir": "${project_path:${folder}}",

, ele deve usar para saber o diretorio que ele esta, qual o formato do arquivo, entao, termina com js, source.js, ele vai usar esse build system aqui. E, aqui, o path, ele esta falando onde esta esse comando node. No Mac, esta e /usr/local/bin. No caso do Windows, nao esta aqui, entao, vamos descobrir onde esta no Windows. O instrutor imagina que deve ser em C:\Program Files\nodejs, colocando, no arquivo, duas contra-barras,

C:\\Program Files\\nodejs


17. Nos estamos tentando dizer aqui onde esta o Node.js, onde nos instalamos. Vamos salvar, ele ja vai colocar la na pasta certa do Sublime Text, e nos vamos chamar, aqui, de node.sublime-build.

18. Se voltarmos aqui no teste.js, e viermos aqui em Tools, deve aparecer, aqui, em Build System, o novo Build System que eh o node, entao, vamos selecionar esse cara aqui, que eh o node.

19. Entao, para executarmos esse cara aqui, nos vamos usar o node. Ai, nos vamos em Tools - Build, no caso, no Windows, eh CTRL + B, e vamos ver se vai dar certo.


**/