let lista = []

const manejarFomulario = (event) => {
    event.preventDefault();
    const numero = document.getElementById("numero");
    let valor = numero.value;
        lista.push(valor);
        Mostrar()
          maximo()
    minimo()
    promedio()
}

function  Mostrar() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    lista.forEach((element, index) => {
      tbody.innerHTML += `
          <tr>
          <th scope="row">${index + 1}</th>
          <td>${element}</td>
          </tr>
          `;
    });
  
  };

  function maximo() {
    let numeromaximo = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > numeromaximo) {
            numeromaximo = lista[i];
        }
    }
    return numeromaximo;
}

function minimo() {

    let numerominimo = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < numerominimo) {
            numerominimo = lista[i];
        }
    }
    return numerominimo;
}
let suma = 0;


function promedio() {
 
    for (let i = 0; i < lista.length; i++) {
        suma = lista[i]+ suma;
    }
    const promedio = suma / lista.length;
    return promedio;
}

function  Procesos () {
        const resultadoMaximo = maximo();
        const resultadoMinimo = minimo();
        const resultadoPromedio = promedio();

        const Nmaximo = document.getElementById("Nmaximo");
        Nmaximo.innerText = resultadoMaximo;
        const Nminimo = document.getElementById("Nminimo");
        Nminimo.innerHTML = resultadoMinimo;
        const Tpromedio = document.getElementById("Tpromedio");
        Tpromedio.innerHTML = resultadoPromedio;
    
}
