# 🏎️ Mario Kart.JS

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## 📖 Sobre o Projeto

Este projeto é um simulador de lógica de corridas inspirado no universo de **Mario Kart**, desenvolvido inteiramente em **JavaScript (Node.js)**.

O foco da aplicação não é a interface gráfica, mas sim a **lógica de backend** e a manipulação de objetos. O sistema simula interações entre personagens, pistas aleatórias e disputas de poder, rodando diretamente no terminal (CLI).

## ⚙️ Funcionalidades

-   **Seleção de Personagens**: O jogador pode escolher entre personagens clássicos (Mario, Luigi, Peach, Bowser, etc.) via menu interativo.
-   **Atributos Únicos**: Cada personagem possui status base de:
    -   ⚡ Velocidade
    -   🔄 Manobrabilidade
    -   💪 Poder
-   **Pistas Dinâmicas**: A cada rodada, o motor do jogo sorteia um tipo de terreno:
    -   *Reta* (Testa Velocidade)
    -   *Curva* (Testa Manobrabilidade)
    -   *Confronto* (Testa Poder - quem perde pode perder pontos!)
-   **Sistema de Sorte (RNG)**: Uso de dados virtuais para somar aos atributos base, garantindo que nenhuma corrida seja igual à outra.

## 🚀 Como Rodar

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

1.  Clone o repositório ou baixe os arquivos.
2.  Abra o terminal na pasta do projeto.
3.  Execute o comando:

```bash
npm start
```

Siga as instruções no terminal para escolher os pilotos e assista à simulação!

## 🛠️ Estrutura do Projeto

-   `src/index.js`: Ponto de entrada. Gerencia a interação com o usuário (CLI).
-   `src/modules/engine.js`: O "motor" do jogo. Contém a lógica de dados, sorteio de blocos e cálculo de vitórias.
-   `src/modules/player.js`: Banco de dados dos personagens e seus atributos.

## 👨‍💻 Autor

Desenvolvido para fins de estudo em Lógica de Programação e POO com JavaScript.

---

*“It's-a me, Mario!”* 🍄