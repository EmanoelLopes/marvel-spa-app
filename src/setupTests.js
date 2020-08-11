const configure = require('enzyme').configure;
const Adapter = require('enzyme-adapter-react-16');

require('jest-enzyme');
require('jest-styled-components');

const rootDir = process.cwd();

configure({ adapter: new Adapter() });

module.exports = {
  verbose: true,
  rootDir,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    'node_modules/**',
  ],
};