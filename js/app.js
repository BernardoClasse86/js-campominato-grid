console.log('Campo minato')

// Chiedo all'utente di inserire un numero da 1 a 10
    // controllo con un cliclo do while che il numero sia valido e che entri nel range dei numeri richiesti
let generatingCell

do {

    generatingCell = parseInt(prompt('Insert a number for the number of rows and columns that you want to play with, for example 8 will generate 8 rows and 8 columns for a total of 64 cells! Than Press Play! NOTE: The number must be between 2 and 10!'))

}while (isNaN(generatingCell) || generatingCell > 10 || generatingCell < 1)
console.log(generatingCell)

// invoco la funzione che moltiplica il numero inserito dall'utente per se stesso
totalCell = cellGenerator(generatingCell)
console.log(totalCell)

// recupero il div con classe "grid" dall'HTML
const gridElement = document.querySelector('.grid')
console.log(gridElement)

// recupero il button con id "generateGrid" dall'HTML
const btnElement = document.getElementById('generateGrid')
console.log(btnElement)

//aggiungo al button la funzione che al click lo faccia sparire e generi al suo posto la griglia
btnElement.addEventListener ('click', function(){

    // nascondo il bottone al click
    btnElement.classList.add('hidden')

    // creo un ciclo che a sua volta crei un elemento 'div' per ogni iterazione che effettura in base al risultato di totalCell
    for (let i = 0; i < totalCell; i++) {

        // incremento di uno l'indice per far si che non parta da 0
        let cellNumbers = i + 1
        console.log(cellNumbers)

        // creo un elemento 'div'
        let cellElement = document.createElement('div')

        // appendo il div creato all'elemento gridElement
        gridElement.append(cellElement)

        // aggiungo ad ogni elemento 'div' il suo corrispettivo numero seguendo l'indice
        cellElement.innerHTML = cellNumbers

        // aggiungo all'elemento 'div' la classe "cell" gia presente nel foglio di stile
        cellElement.classList.add('cell')

        // calcolo la dimensione delle mie celle in base al numero inserito dall'utente
        cellElement.style.width = "calc(100% / " + generatingCell + ")";
        
        console.log(cellElement)
    }


})
























/********
FUNZIONI
********/

// creo funzione per moltiplicare il numero inserito dall'utente

function cellGenerator(cellToGenerate){

    const fullGrid = cellToGenerate**2

    return fullGrid
}