let currentInput = '';

const appendNumber = (number) => {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

const deleteOneToOne = () => {
    // Convertimos la cadena currentInput en un array "12345" a ['1', '2', '3', '4', '5'].
    let eliminarUnoAUno = currentInput.split('');
    // Eliminamos un elemento del array con el ultimo 1, y lo eliminamos de la ultima
    // posición con el eliminarUnoAUno.length -1.
    eliminarUnoAUno.splice(eliminarUnoAUno.length -1, 1);
    // Por último hacemos el reverso convertimos el array ['1', '2', '3', '4'] con los
    // elementos eliminado a una cadena "1234".
    currentInput = eliminarUnoAUno.join('');
    document.getElementById('result').value = currentInput;
}

const appendOperation = (operation) => {
    currentInput += ` ${operation} `;
    document.getElementById('result').value = currentInput;
}

const percent = () => {
    let parts = currentInput.split(' ');

    
    if (parts.length === 3) {

        let base = parseFloat(parts[0]);
        let percentage = parseFloat(parts[parts.length - 1]) / 100;
        
        switch (parts[1]) {
            case '+':
                currentInput = (base + base * percentage).toString();
                break;
            case '-':
                currentInput = (base - base * percentage).toString();
                break;
            case '*':
                currentInput = (base * base * percentage).toString();
                break;
            case '/':
                currentInput = (base / (base * percentage)).toString();
                break;
            default:
                currentInput = 'Error';
                break;
        }

        document.getElementById('result').value = currentInput;
        
    } else if(parts.length === 1) {
        currentInput = parseFloat(currentInput / 100);
        document.getElementById('result').value = currentInput;
    }else{
        document.getElementById('result').value = 'Error';
        currentInput = "";
    }
}

const calculate = () => {
    try {

        let output = Function(`"use strict"; return(${currentInput});`)();
        // Toma el valor absoluto del resultado evitando numero negativos.
        // pero ahora output no puede ser una constante y hay que declararla
        // con let en lugar de const.
        output = Math.abs(output);
        document.getElementById('result').value = output;
        currentInput = output.toString();
        
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}

const screenClear = () => {
    currentInput = '';
    document.getElementById('result').value = currentInput;
}