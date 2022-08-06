// step one
let boxes = document.querySelectorAll('.box');
let player_x = '0';
let player_y = 'X';
let currentPlayer = player_x;

// step two
let spaces = [];

boxes.forEach((box) => {
  box.addEventListener(
    'click',
    (event) => {
      let id = event.target.id;

      // step two
      if (!spaces[id]) {
        spaces[id] = currentPlayer;
        event.target.innerText = currentPlayer;

        // Step Four
        // Starting wining score
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
        for (const winingScore of winingScores) {
          let [a, b, c] = winingScore;
          if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
            playText.innerText = `${currentPlayer} wins on the game.`;
          }
        }
        // Ending wining score

        // step three
        currentPlayer = currentPlayer === player_x ? player_y : player_x;
        console.dir(spaces[id]);
      }
    },
    { once: true }
  );
});
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
