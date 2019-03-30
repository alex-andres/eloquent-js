const printAlternateChar = (string, char1, char2, index) => {
  if (index % 2 === 0) {
    string += char1;
  } else {
    string += char2;
  }
  return string;
};

const chessBoard = size => {
  let line = '';
  for (let i = 1; i <= size; i++) {
    line = '';
    for (let j = 1; j <= size; j++) {
      if (i % 2 === 0) {
        line = printAlternateChar(line, ' ', '#', j);
      } else {
        line = printAlternateChar(line, '#', ' ', j);
      }
    }
    console.log(line);
  }
};

chessBoard(20);
