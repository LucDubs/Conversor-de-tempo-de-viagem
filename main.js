let departureDateEntry = prompt("Digite a data de partida (formata DD/MM/YYYY) com ou sem '/' ")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4-Dias\n5-Meses\n6-Anos")

if(chosenOption == "1") {
    let secondsofDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo " + secondsofDeparture + " segundos")
} else if (chosenOption == "2") {
    let minutsOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo " + minutsOfDeparture + " minutos")
} else if (chosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo " + hoursOfDeparture + " horas")
}  else if (chosenOption == "4") {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo " + daysOfDeparture + " dias")
}  else if (chosenOption == "5") {
    let monthsOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24 / 30)
    alert("Tempo de vôo " + monthsOfDeparture + " meses")
} else if (chosenOption == "6") {
    let yearsOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24 / 30 /12)
    alert("Tempo de vôo " + yearsOfDeparture + " anos")
} else {
    alert("Opção inválida!")
}
