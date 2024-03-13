// En lugar de usar un array de numeros se crea una clase que represente un objeto
// "Nota" y almacenar instancias de esa clase 


class Nota {
    constructor(valor) {
        this.valor = valor;
    }
}

let array = [new Nota(7), new Nota(4), new Nota(8), new Nota(9), new Nota(6)];
let ocultar = document.getElementById('miDiv').style.display = "none";

function listarNotas() {
    let lista = document.getElementById("listaNotas");

    for(let nota of array) {
        let item = document.createElement("li");
        item.innerText = nota.valor;
        lista.appendChild(item);
    }
}

function calcularPromedio() {
    let suma = 0;

    for (let nota of array) {
        suma += nota.valor;
    }

    let promedio = suma / array.length;
    document.getElementById("promedio").textContent = promedio;
}

function notaMasAlta() {
    let notaAlta = 0;

    for (let nota of array) {
        if (nota.valor > notaAlta) {
            notaAlta = nota.valor;
        }
    }
    document.getElementById("nota").textContent = notaAlta;
}

function hayAplazo() {
    let aplazo = "No";

    for (let nota of array) {
        if (nota.valor < 4) {
            aplazo = "Sí";
            break;
        }
    }
    document.getElementById("aplazo").textContent = aplazo;
}

function validarCredenciales() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // lógica de validación.
    if ((username === 'Carrizo'|| username === 'carrizo') && password === '7849+Coderhouse') {
        alert('Inicio de sesión exitoso');
        ocultar = document.getElementById('miDiv').style.display = "block";
    } else {
        alert('Credenciales incorrectas');
    }
}

function ocultarDiv() {
    let div = document.getElementById('miDiv');
    div.style.display = 'hide';
}


