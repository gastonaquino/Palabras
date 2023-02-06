let dados = [
  ["T", "L", "A", "B", "A", "I"],
  ["G", "U", "O", "E", "R", "L"],
  ["P", "S", "M", "H", "E", "I"],
  ["F", "A", "H", "M", "E", "I"],
  ["E", "N", "I", "T", "V", "G"],
  ["D", "E", "N", "A", "Z", "V"],
  ["S", "A", "H", "O", "M", "R"],
  ["T", "A", "C", "O", "I", "A"],
  ["X", "R", "B", "F", "O", "I"],
  ["R", "D", "N", "S", "O", "E"],
  ["A", "M", "E", "D", "C", "P"],
  ["E", "C", "A", "S", "R", "L"],
  ["S", "U", "T", "E", "P", "L"],
  ["N", "O", "D", "U", "T", "C"],
  ["J", "R", "L", "G", "U", "I"],
  ["J", "Q", "B", "M", "O", "A"],
];

function mezclarDados(dados) {
  let m = dados.length;
  let t;
  let unDado;

  // While there remain elements to shuffle…
  // Mientras queden elementos por mezclar...
  while (m) {
    // Pick a remaining element…
    // Tomo un elemento restante
    // y resto la cantidad de restantes
    unDado = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    // Tomo el dado en la útlima posición sin mezclar
    t = dados[m];
    // Guardo en la última posición el dado
    // en la posición tomada al azar
    dados[m] = dados[unDado];
    // En la posición tomada al azar guardo el último dado
    dados[unDado] = t;
  }

  return dados;
}

console.log(dados);

document.getElementById("tirar").addEventListener("click", function () {
  // let letra = dado1[Math.floor(Math.random() * 6)];
  // document.getElementById("u1").innerText = letra;
  stopTimer();
  contador.innerText = timeLeft;

  mezclarDados(dados);
  startTimer();

  let cuadros = document.getElementsByClassName("dado");

  for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].innerHTML = dados[i][Math.floor(Math.random() * 6)];
  }
  console.log(dados[1]);
});
document.getElementById("tiempo").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

// Start with an initial value of 20 seconds
// Defino el valor del temporizador
let TIME_LIMIT = 60;

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;

let contador = document.getElementById("contador");

let interval = null;

function startTimer() {
  TIME_LIMIT = 60;
  timePassed = 0;
  timeLeft = TIME_LIMIT;

  interval = setInterval(() => {
    if (timeLeft === 1) {
      document.getElementById("modal").style.display = "flex";
      stopTimer();
    }
    // The amount of time passed increments by one
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;

    // The time left label is updated
    contador.innerText = timeLeft;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  // liberar nuestro inervalId de la variable
  interval = null;
}
