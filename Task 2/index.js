let maze = [
  ['#','#','#','#','#','#','#','#','#'],
  ['#','+','+','+','#','+','+','+','#'],
  ['#','+','#','+','#','+','#','+','#'],
  ['+','+','#','+','0','+','#','+','#'],
  ['#','#','#','+','#','#','#','#','#'],
  ['#','#','+','+','#','#','#','#','#'],
  ['#','#','+','#','#','#','#','#','#'],
  ['#','#','#','#','#','#','#','#','#'],
];

function checkPath(start, end) {
  maze[start.y][start.x] = 1;

  let siblings = getValidSib(start);

  if (siblings.length > 0) {
    for (let i = 0; i < siblings.length; i++) {
      const current = siblings[i];

      const isSolved = current.x === end.x && current.y === end.y;
      const notVisited = maze[current.y][current.x] !== 1;

      if (isSolved || (notVisited && checkPath(current, end))) {
        return true;
      }
    }
  }
  return false;
}

function getValidSib(cord) {
  const { x, y } = cord;

  let cords = [];
  let steps = [];

  if (maze[y - 1] !== undefined) {
    cords.push({ x: x, y: y - 1, val: maze[y - 1][x] });
    steps.push("top");
  }
  if (maze[y + 1] !== undefined) {
    cords.push({ x: x, y: y + 1, val: maze[y + 1][x] });
    steps.push("bottom");
  }
  if (maze[y][x - 1] !== undefined) {
    cords.push({ x: x - 1, y: y, val: maze[y][x - 1] });
    steps.push("left");
  }
  if (maze[y][x + 1] !== undefined) {
    cords.push({ x: x + 1, y: y, val: maze[y][x + 1] });
    steps.push("right");
  }

  return cords.filter((crd) => crd.val === 0);
}

console.log(checkPath({ x: 3, y: 4 }, { x: 3, y: 0 }));
console.log(maze);
