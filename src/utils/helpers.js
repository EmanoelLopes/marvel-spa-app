export const httpsTransform = (str) => str.replace('http', 'https');

export const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export const sortByName = (array) => {
  return array.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });
};

export const isContainedById = (array, id) => array.some((element) => element.id === id);
