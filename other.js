const findNumber = (number) => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  return array.find((n) => n === number);
};

console.log(findNumber(3));
