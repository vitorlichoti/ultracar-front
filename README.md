# Ultracar-Challenge
Desafio de front end da Ultracar

Para rodar a apliacação localmente faça:
- o clone do repositório;
- acesse a raíz do projeto;
- rode o comando npm run dev;

Optei por apresentar pelo menos um layout funcional da solução, prototipando os componentes no figma
https://www.figma.com/file/xa5a4o8C2cs5iwCQOZuqP9/Untitled?t=flK3wow2gTUiw2MB-1

![image](https://user-images.githubusercontent.com/103835965/232917834-30c52982-3091-4cd7-8418-03bb533977a5.png)

Usei apenas React TS e React BootStrap para montagem e exibição do layout

Imprevistos ocorreram, porém, deixo aqui o máximo de código que consegui fazer nas últimas 2 horas..

Importante ressaltar que, para a aplicação estar completa, eu usaria Redux como estado global da aplicação, pois além do site da ultracar utilizar tal tecnologia
é uma ótima opção para persistir os dados na navegação.
Outra solução mais simples seria salvando os dados do formulário em um localStorage, facilmente daria para renderizar as informações.

Poderia ir além, criando um banco de dados com entidades das quais a aplicação poderia escalonar ainda mais, pensando no contexto de uma mecânica, teríamos:
-Clientes -> endereços -> veiculos -> histórico de serviços -> revisoes futuras
-Funcionários -> Endereço -> horas trabalhadas -> serviços realizados -> metricas de atendimentos
-Peças em estoque -> preços

Por aí vai longe.. 
Peço desculpas por não conseguir mostrar tudo que poderia fazer. Mas obrigado pela oportunidade!
