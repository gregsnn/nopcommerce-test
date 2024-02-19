export const formatarSeletor = (input, tipo) => {
  return input.replace("*", tipo);
};

export const random = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
