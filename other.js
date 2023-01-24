const findNumber = (number) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return array.find((n) => n === number);
};

console.log(findNumber(3));
console.log(findNumber(4));
console.log(findNumber(1));

