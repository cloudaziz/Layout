let boxes = document.querySelectorAll('.box');
// console.log(boxes);

let player_x = 'X';
let player_y = 'O';
let currentPlayer = player_x;

let boxid = [];
const winingScores = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener(
    'click',
    (e) => {
      let id = e.target.id;
      if (!boxid[id]) {
        boxid[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        console.log(boxid);
        for (score of winingScores) {
          // console.log(score);
          let [a, b, c] = score;
          if (boxid[a] && boxid[a] == boxid[b]) {
            console.log('true');
          }
        }

        currentPlayer = currentPlayer == player_x ? player_y : player_x;
      }
    },
    { once: true }
  );
});
