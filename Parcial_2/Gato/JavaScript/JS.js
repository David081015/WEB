const EstadoGato = document.querySelector('.Estado');

let JuegoActivo = true;
let JugadorActual = "X";
let EstadoJuego = ["", "", "", "", "", "", "", "", ""];

const MensajeGanador = () => `¡¡Jugador ${JugadorActual} ha ganado!!`;
const MensajeEmpate = () => `¡¡Empate!!`;
const Turnos = () => `Turno de ${JugadorActual}`;

EstadoGato.innerHTML = Turnos();

const Formas_De_Ganar = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    EstadoJuego[clickedCellIndex] = JugadorActual;
    clickedCell.innerHTML = JugadorActual;
}

function handlePlayerChange() {
    JugadorActual = JugadorActual === "X" ? "O" : "X";
    EstadoGato.innerHTML = Turnos();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = Formas_De_Ganar[i];
        let a = EstadoJuego[winCondition[0]];
        let b = EstadoJuego[winCondition[1]];
        let c = EstadoJuego[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        EstadoGato.innerHTML = MensajeGanador();
        JuegoActivo = false;
        return;
    }

    let roundDraw = !EstadoJuego.includes("");
    if (roundDraw) {
        EstadoGato.innerHTML = MensajeEmpate();
        JuegoActivo = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('index'));

    if (EstadoJuego[clickedCellIndex] !== "" || !JuegoActivo) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function ReiniciarJuego() {
    JuegoActivo = true;
    JugadorActual = "X";
    EstadoJuego = ["", "", "", "", "", "", "", "", ""];
    EstadoGato.innerHTML = Turnos();
    document.querySelectorAll('.celda').forEach(cell => cell.innerHTML = "");
}


document.querySelectorAll('.celda').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.Reiniciar').addEventListener('click', ReiniciarJuego);