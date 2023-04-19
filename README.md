# Ultracar-Challenge
Desafio de front end da Ultracar

Para rodar a apliacação localmente faça:
- o clone do repositório;
- acesse a raíz do projeto;
- rode o comando npm run dev;

Optei por apresentar pelo menos um layout funcional da solução, prototipando os componentes no figma
https://www.figma.com/file/xa5a4o8C2cs5iwCQOZuqP9/Untitled?t=flK3wow2gTUiw2MB-1

![image](https://user-images.githubusercontent.com/103835965/232917834-30c52982-3091-4cd7-8418-03bb533977a5.png)

Prints da aplicação final:

![image](https://user-images.githubusercontent.com/103835965/232918615-364ebd36-a50d-4f42-b265-a0282f0f9e10.png)

Página principal:

![image](https://user-images.githubusercontent.com/103835965/232918811-311074cb-6586-4fa6-b1ff-6a9229047c0e.png)

![image](https://user-images.githubusercontent.com/103835965/232918845-04fbd145-dde2-40c7-986d-e609a7c01c14.png)

Pagina colaboladores: 

![image](https://user-images.githubusercontent.com/103835965/232918895-5d289549-8be3-4756-aba3-a56d8504c9b5.png)


Usei apenas React TS e React BootStrap para montagem e exibição do layout

Imprevistos ocorreram, porém, deixo aqui o máximo de código que consegui fazer, adicionei o Redux com as atualizações da versão 8.0..

Importante ressaltar que, para a aplicação estar completa, eu refatoraria uma série de componentes e separaria estilos em mais arquivos .css, no tempo diponível que tive, tentei implementar o Redux pois além do site da ultracar utilizar tal tecnologia é uma ótima opção para persistir os dados na navegação.
Outra solução mais simples seria salvando os dados do formulário em um localStorage, facilmente daria para renderizar as informações.

Poderia ir além, criando um banco de dados com entidades das quais a aplicação poderia escalonar ainda mais, pensando no contexto de uma mecânica, teríamos:
-Clientes -> endereços -> veiculos -> histórico de serviços -> revisoes futuras
-Funcionários -> Endereço -> horas trabalhadas -> serviços realizados -> metricas de atendimentos
-Peças em estoque -> preços

Por aí vai.. 
Peço desculpas por não conseguir mostrar tudo que poderia fazer, coincidiu mais desafios com maior lista de resuisitos por ser full stack. Mas obrigado pela oportunidade!
