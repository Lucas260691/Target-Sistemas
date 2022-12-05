let dataBase = require('../arquivo.json');

const filterData = dataBase.filter((billing) => billing.valor > 0)
console.log(filterData);

const lowerBilling = filterData.reduce((prev, current) =>{
    return(prev.valor < current.valor) ? prev : current
})
console.log(` O menor valor de faturamento foi ${lowerBilling.valor.toFixed(2)}R$, no dia ${lowerBilling.dia}`);


const highestBilling = filterData.reduce((prev, current) =>{
    return(prev.valor > current.valor) ? prev : current
})
console.log(` O maior valor de faturamento foi ${highestBilling.valor.toFixed(2)}R$, no dia ${highestBilling.dia}`);


const filterBilling = filterData.reduce((currentSum, currentBilling) => {
    const results = (currentSum + currentBilling.valor)

    return results
},0)


const billingAvarege = (filterBilling / filterData.length)
console.log(`A média mensal de faturamento é ${billingAvarege.toFixed(2)}$RS`)


const compareValues = filterData.filter((billing) => {
    return billing.valor > billingAvarege
})
console.log(`Em ${compareValues.length} dias do mês que o faturamento diário ultrapassou o faturamento mensal`)