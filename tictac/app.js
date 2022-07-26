let boxes = Array.from(document.getElementsByClassName('box'));

const playText = document.getElementById('playText');

let restartBtn = document.getElementById('restartBtn');

// const spaces = [null, null, null, null, null, null, null, null, null];
// const spaces = [];
const spaces = Array(9).fill(null);
// console.log(spaces);
const O_TEXT = '0';
const X_TEXT = 'X';
let currentPlayer = O_TEXT;

// let drawBoard = () => {
boxes.forEach((box, index) => {
  box.addEventListener(
    'click',
    (event) => {
      const id = event.target.id;

      if (!spaces[id]) {
        spaces[id] = currentPlayer;
        event.target.innerText = currentPlayer; // 0

        playerHasWon();

        //   if (playerHasWon()) {
        //     playText.innerText = `${currentPlayer} has won!`;
        //   }

        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
      }
    },
    { once: true }
  );
});
// };

// showing result
// const playerHasWon = () => {
//   if (spaces[0] === currentPlayer) {
//     if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
//       playText.innerText = `${currentPlayer} wins up top.`;
//     }
//     if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
//       playText.innerText = `${currentPlayer} wins on the left.`;
//     }
//     if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
//       playText.innerText = `${currentPlayer} wins on the Diagonal.`;
//     }
//   }
// };

// reset the gama
restartBtn.addEventListener('click', (e) => {
  //   spaces.forEach((space, index) => {
  //     spaces[index] = null;
  //   });
  spaces.fill(null);
  boxes.forEach((box) => {
    box.innerText = '';
  });
  currentPlayer = O_TEXT;
  playText.innerText = "Let's Play";
});
// drawBoard();

// showing result
const playerHasWon = () => {
  const winingScore = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const condition of winingScore) {
    let [a, b, c] = condition;
    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      playText.innerText = `${currentPlayer} wins on the game.`;
    }
  }
};

// const root = document.documentElement;
// console.log(root);
