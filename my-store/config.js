// import {createStore} from "redux";
// import reducer from "./src/reducers";

// const config_Redux = () => createStore(reducer);

// export default config_Redux;

import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers';
import thunk from 'redux-thunk';

const config_Redux = () => createStore(reducer, applyMiddleware(thunk));

export default config_Redux;
