PrepTorrada("Amanda", "queijo", 5.50) //exe
function PrepTorrada (nome,complemento,preco) { //() função: ação e dentro de () fica os paramêtros
    console.log("A torrada da", nome,"está sendo preparada...")
    console.log("torrada de", complemento,"está pronta!") 
    console.log("valor total é:", preco)
}

function insistirLigacao (tentativas) {
    for (tentativa = 1; tentativa <= 3; tentativa++) {
        console.log("Minha tentativa de ligação é:", tentativa)

    let atender = false // caso ela atenda. pq o for é o "true"
    if (atender) {
        console.log("Ela, atendeu a ligação!")
        break;
        } 
    }console.log("fim das tentativas");
}

insistirLigacao()



