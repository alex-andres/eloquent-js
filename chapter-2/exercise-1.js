const loopTriangle = base => {
  let level = '#';
  for (let i = 0; i <= base; i++) {
    console.log(level);
    level += '#';
  }
};
