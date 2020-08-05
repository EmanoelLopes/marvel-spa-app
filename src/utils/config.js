const KEYS = [
  'NODE_ENV',
  'REACT_APP_MARVEL_SERVICE_ENDPOINT',
  'REACT_APP_MARVEL_API_KEY',
];

const config = Object.entries(process.env).reduce((acc, [key, value]) => {
  const keyName = KEYS.find((item) => key.includes(item));
  if (keyName) return { ...acc, [keyName]: value };
  return acc;
}, {});

export default { ...config };
