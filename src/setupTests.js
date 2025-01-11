import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

configure({ adapter: new Adapter() });
