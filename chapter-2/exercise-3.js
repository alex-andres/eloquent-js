const chessBoard = size => {
  let line = '';
  for (let i = 1; i <= size; i++) {
    line = '';
    for (let j = 1; j <= size; j++) {
      if (i % 2 === 0) {
        if (j % 2 !== 0) {
          line += '#';
        } else {
          line += ' ';
        }
      } else {
        if (j % 2 === 0) {
          line += '#';
        } else {
          line += ' ';
        }
      }
    }
    console.log(line);
  }
};
