// Make async/awiat awialable in tests
require('babel-polyfill');
require('raf/polyfill');

const enzyme = require('enzyme');

const { configure } = enzyme;
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
