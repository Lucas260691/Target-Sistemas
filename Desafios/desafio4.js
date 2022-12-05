const distribuidorasFaturamentos = [
    { estado: "São Paulo", valor: 67836.43 },
    { estado: "Rio De Janeiro", valor: 36678.66 },
    { estado: "Minas Gerais", valor: 29229.88 },
    { estado: "Espirito Santo", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 }
]

const sumBilling = distribuidorasFaturamentos.reduce((currentSum, currente) => {
    return currentSum + currente.valor
}, 0)
console.log(`A soma mensal de vendas de todas as regiões ${sumBilling.toFixed(2)}R$`)

const percentageCalculation = (amount, percentageValue) => {
    const amountPercentage = 100;
    const results = (amountPercentage * percentageValue) / amount
    return `${results.toFixed(2)}%`
}

const billingAvaregePercentage = distribuidorasFaturamentos.map((billing) => {
    const results = percentageCalculation(sumBilling, billing.valor)
    return `O estado de ${billing.estado} representa ${results} do valor total de faturamento`
})
console.log(billingAvaregePercentage)

