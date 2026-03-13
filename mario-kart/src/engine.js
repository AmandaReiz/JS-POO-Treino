async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRace(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    let dice1 = await rollDice();
    let dice2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = dice1 + character1.VELOCIDADE;
      totalTestSkill2 = dice2 + character2.VELOCIDADE;
      await logRollResult(character1.NOME, "velocidade", dice1, character1.VELOCIDADE);
      await logRollResult(character2.NOME, "velocidade", dice2, character2.VELOCIDADE);
    }
    if (block === "CURVA") {
      totalTestSkill1 = dice1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = dice2 + character2.MANOBRABILIDADE;
      await logRollResult(character1.NOME, "manobrabilidade", dice1, character1.MANOBRABILIDADE);
      await logRollResult(character2.NOME, "manobrabilidade", dice2, character2.MANOBRABILIDADE);
    }
    if (block === "CONFRONTO") {
      let powerResult1 = dice1 + character1.PODER;
      let powerResult2 = dice2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);
      await logRollResult(character1.NOME, "poder", dice1, character1.PODER);
      await logRollResult(character2.NOME, "poder", dice2, character2.PODER);

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`);
        character2.PONTOS--;
      }
      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`);
        character1.PONTOS--;
      }
      console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum ponto perdido" : "");
    } else {
      if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
      } else if (totalTestSkill2 > totalTestSkill1) {
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
      } else {
        console.log("Empate nesta rodada! Ninguém pontuou.");
      }
    }
    console.log("-----------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n🏆 O vencedor é ${character1.NOME} 🏆`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n🏆 O vencedor é ${character2.NOME} 🏆`);
  else console.log("\nA corrida terminou em empate");
}

module.exports = {
  rollDice,
  getRandomBlock,
  playRace,
  declareWinner,
};