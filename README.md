<h1 align=center><img src="https://github.com/arthur-lage/moveit/blob/main/assets/logo.svg" /></h1>

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

# Project Exemple:

[Click Here](https://moveit-hrnepn47a-arthur-lage.vercel.app)

# How can i download the project?

```bash
  $ git clone https://github.com/arthur-lage/moveit.git
  
  $ cd moveit
  
  $ yarn install
  
  $ yarn start
```
