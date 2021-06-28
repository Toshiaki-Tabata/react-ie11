//import 'react-hot-loader/patch';
import 'core-js/stable/promise';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import App from './App';

ReactDOM.render(<AppContainer><App/></AppContainer>, document.getElementById("root"));

