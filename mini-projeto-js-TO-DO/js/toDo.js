// Tarefas To-Do no backend
let lista = [
  { tarefa: "limpar a casa", status: "pendente" },
  { tarefa: "lavar o cabelo", status: "feito" },
  { tarefa: "entregar projeto dev", status: "pendente" }
];

// Exibir tarefas pendentes
const comPendente = lista.filter(item => item.status === "pendente");
console.log("✓ Status: pendente", comPendente);

// Adicionar nova tarefa
lista.push({ tarefa: "decorar acordes com 7 no violão", status: "pendente" });

console.log("🔄 Atualizada:");
lista.forEach(item => console.log(item));

// Armazenar no localStorage
localStorage.setItem("lista", JSON.stringify(lista));