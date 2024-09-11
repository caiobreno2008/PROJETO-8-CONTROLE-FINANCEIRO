
function main() {
    let initialAmount = parseFloat(prompt("Digite a quantidade inicial de dinheiro disponível:"))
        if (initialAmount < 0) {
        alert("Quantidade inicial inválida. O programa será encerrado.");
        return
    }
    while (true) {
                let action = prompt(`Quantidade de dinheiro: R$${initialAmount.toFixed(2)}\nEscolha uma opção:\n1. Adicionar dinheiro\n2. Remover dinheiro\n3. Sair`)
        if (action === "1") {
           
            let amountToAdd = parseFloat(prompt("Digite a quantidade a ser adicionada:"))
            if (amountToAdd > 0) {
                initialAmount += amountToAdd
            } else {
                alert("Quantidade inválida. Tente novamente.");
            }
        } else if (action === "2") {
           
            let amountToRemove = parseFloat(prompt("Digite a quantidade a ser removida:"));
            if (amountToRemove > 0 && amountToRemove <= initialAmount) {
                initialAmount -= amountToRemove;
            } else {
                alert("Quantidade inválida ou insuficiente. Tente novamente.");
            }
        } else if (action === "3") {
            
            alert("voce encerrou o calculo.")
            break;
        } else {
            alert("Opção inválida. Tente novamente.")
        }
    }
}
main()
