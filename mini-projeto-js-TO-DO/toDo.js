// Tarefas To-Do no backend
let lista = [
  { tarefa: "limpar a casa", status: "pendente" },
  { tarefa: "lavar o cabelo", status: "feito" },
  { tarefa: "entregar projeto dev", status: "pendente"}
]

const comPendente = lista.filter(item => item.status === "pendente")
console.log("status: pendente", comPendente)

lista.push({ tarefa: "decorar acordes com 7 no violão", status: "pendente" })

console.log("🔄 Atualizada:")
lista.forEach(item => console.log(item))