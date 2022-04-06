"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arreglo = [1];
  let divisor = 2;
  while (num !== 1) {
    if (num % divisor == 0) {
      arreglo.push(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }
  return arreglo;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let contador = 0;
  let memoria = 0;
  do {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        memoria = array[i];
        array[i] = array[i + 1];
        array[i + 1] = memoria;
      }
    }
    contador++;
  } while (contador < array.length);

  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    let aux = array[i];
    for (let j = 0; j < i; j++) {
      if (aux < array[j]) {
        aux = array[j];
        array[j] = array[i];
        array[i] = aux;
      }
    }
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let current = i;
    for (let j = i + 1; j < array.length; j++) {
      if (min > array[j]) {
        min = array[j];
        current = j;
      }
    }
    if (current != i) {
      array[current] = array[i];
      array[i] = min;
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
