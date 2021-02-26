# Move.It

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/arthur-lage/moveit/blob/main/LICENSE)

# Sobre o projeto

O projeto move.it foi desenvolvido durante a quarta edição do evento Next Level Week ( 22 de fevereiro de 2021 até 28 de fevereiro de 2021 ). O intuito da aplicação é ajudar as pessoas que trabalham muito tempo em frente ao computador, gerando aleatoriamente alongamentos para o corpo.

## Como funciona

A aplicação conta com um timer de 25 minutos, e ao clicar no botão "Iniciar um ciclo", o timer começará a descer. Quando o contador chega em 00:00, o sistema seleciona aleatoriamente um alongamento, que está no arquivo [challenges.json](https://github.com/arthur-lage/moveit/blob/main/challenges.json)

![Imagem IniciarCiclo](https://github.com/arthur-lage/moveit/blob/main/assets/Screenshot_44.png)

Após iniciar um novo ciclo, o botão de "Iniciar um ciclo" se transforma em "Abandonar ciclo", o qual cancela o timer atual.

![Imagem EncerrarCiclo](https://github.com/arthur-lage/moveit/blob/main/assets/image_2021-02-26_165533.png)

A aplicação também possui uma barra de experiência, que vai sendo preenchida conforme o usuário completa os desafios.

![Imagem XPBar](https://github.com/arthur-lage/moveit/blob/main/assets/image_2021-02-26_165952.png)

## Lembre-se de ativar as notificações da aplicação para receber os avisos do contador.

# Sistema de Level

Ao conseguir experiência suficiente para subir de nível, uma janela parabenizando o usuário aparecerá, mostrando o novo level na tela.

# Sons

O aplicativo possui um som de notificação quando o timer chega em 0.

# Quais tecnologias foram utilizadas?

Foram utilizados: React.js, Next.js, Typescript, HTML, CSS.

![GIF](https://github.com/arthur-lage/moveit/blob/main/assets/2021-02-26%2017-37-07.gif)

# Como usar o projeto sem baixar?

[CLIQUE AQUI](https://moveit-hrnepn47a-arthur-lage.vercel.app) Este é o link do site. Deploy feito em: [Vercel](https://vercel.com).

# Como posso baixar o projeto?

Para baixar você vai precisar do Git, Node.js, e Yarn instalados em sua maquina. Caso precise de ajuda para baixar o Yarn e o Node.js, [CLIQUE AQUI](https://www.youtube.com/watch?v=CD_GC1kvWAA) para acessar um vídeo tutorial no youtube. Créditos do video: [Cubic Code](https://www.youtube.com/channel/UCDhy8vAYoTFmi3ZSwokRaEg).

1- Abra seu terminal.

2- Depois disso, use o comando: git clone https://github.com/arthur-lage/moveit.git.

3- Utilize o comando: cd nomedodiretório até chegar no diretório do projeto.

4- Digite: "yarn dev" (sem áspas) e o projeto será aberto em uma nova aba de seu navegador.
