import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import '@testing-library/jest-dom';

beforeAll(async () => {
    global.TextEncoder = require('util').TextEncoder;
    global.TextDecoder = require('util').TextDecoder;
});

configure({ adapter: new Adapter() });