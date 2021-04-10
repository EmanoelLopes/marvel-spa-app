const httpsTransform = (str) => str.replace('http', 'https');

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export { range, httpsTransform };
