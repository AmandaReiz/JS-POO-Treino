const readline = require("readline");
const player = require("./player.js");
const engine = require("./engine.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function chooseCharacter(playerNum, availableCharacters) {
  console.log(`\nEscolha o Jogador ${playerNum}:`);
  availableCharacters.forEach((char, index) => {
    console.log(`${index + 1}. ${char.NOME}`);
  });

  while (true) {
    const answer = await askQuestion(`\nDigite o número do personagem (1-${availableCharacters.length}): `);
    const choice = parseInt(answer) - 1;

    if (choice >= 0 && choice < availableCharacters.length) {
      // Retorna um novo objeto para garantir que os pontos comecem zerados e sejam independentes
      return { ...availableCharacters[choice], PONTOS: 0 };
    }
    console.log("❌ Opção inválida. Tente novamente.");
  }
}

(async function main() {
  const characterList = Object.values(player);

  const player1 = await chooseCharacter(1, characterList);
  const player2 = await chooseCharacter(2, characterList);

  console.log(`\n🏁🚨 Corrida iniciada! ${player1.NOME} vs ${player2.NOME} 🚨🏁\n`);

  await engine.playRace(player1, player2);
  await engine.declareWinner(player1, player2);
  rl.close();
})();