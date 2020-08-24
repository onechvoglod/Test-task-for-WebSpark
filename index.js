function minWalk(gridList, startX, startY, endX, endY) {
  const firstStep = [];
  let count = 1;
  const strFromArray = gridList.join("");

  if (
    gridList.length === 0 ||
    strFromArray.length > 100 ||
    strFromArray === ""
  ) {
    alert("Введите допустимый размер сетки 10х10 ячеек");
    return;
  }

  if (endX >= gridList.length || endY >= gridList[0].length) {
    alert("Введите допустимые координаты");
    return;
  }
  gridList.forEach((item, index) => {
    for (let i = 0; i < item.length; i++) {
      if (item[i].toUpperCase() != "X") {
        firstStep.push([index, i]);
      }
    }
  });

  let nextStep = firstStep.filter(
    (item) =>
      item[0] <= startX + 1 &&
      item[0] >= startX - 1 &&
      item[1] <= startY + 1 &&
      item[1] >= startY - 1
  );

  while (!nextStep.some((item) => item[0] === endX && item[1] === endY)) {
    count++;
    nextStep.forEach((item) => {
      firstStep.forEach((value) => {
        if (
          value[0] <= item[0] + 1 &&
          value[0] >= item[0] - 1 &&
          value[1] <= item[1] + 1 &&
          value[1] >= item[1] - 1 &&
          !nextStep.some((i) => i[0] === value[0] && i[1] === value[1])
        ) {
          nextStep.push([value[0], value[1]]);
        }
      });
    });
  }

  return `Минимальное количество шагов: ${count}`;
}

const result = minWalk(
  [
    ".X.......",
    ".X.......",
    ".....X...",
    ".X.......",
    ".X.......",
    ".....X...",
    ".X.......",
    ".X.......",
  ],
  0,
  0,
  7,
  7
);

$("#result").text(result);
