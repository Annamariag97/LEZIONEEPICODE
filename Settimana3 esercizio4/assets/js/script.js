
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Funzione per verificare se il numero è già stato estratto
  function isDuplicate(number, array) {
    return array.includes(number);
  }
  
  // Funzione ricorsiva per estrarre un numero non ripetuto
  function extractUniqueNumber(array) {
    const randomNumber = getRandomNumber(1, 90);
    if (isDuplicate(randomNumber, array)) {
      return extractUniqueNumber(array);
    } else {
      return randomNumber;
    }
  }
  function createTable() {
    const gridTable = document.getElementById('gridTable');
    for (let i = 1; i <= 9; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td');
        cell.textContent = (i - 1) * 10 + j + 1;
        row.appendChild(cell);
      }
      gridTable.appendChild(row);
    }
  }
  
  // Event listener per il click sul pulsante
  document.getElementById('generateButton').addEventListener('click', function() {
    const extractedNumbers = [];
    const randomNumber = extractUniqueNumber(extractedNumbers);
    highlightNumber(randomNumber);
    console.log('Numero Estratto:', randomNumber);
  });
  
  // Creare la tabella quando la pagina si carica
  createTable();
  // Funzione per evidenziare il numero estratto
function highlightNumberInTable(number) {
    const cells = document.querySelectorAll('#gridTable td');
    cells.forEach(cell => {
      if (cell.textContent === number.toString()) {
        cell.style.backgroundColor = 'lightgreen';
      }
    });
  }
  
  // Event listener per il click sul pulsante "Genera Numero Casuale"
  document.getElementById('generateButton').addEventListener('click', function() {
    const extractedNumbers = [];
    const randomNumber = extractUniqueNumber(extractedNumbers);
    highlightNumberInTable(randomNumber);
    console.log('Numero Estratto:', randomNumber);
  });

  