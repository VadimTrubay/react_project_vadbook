import './index.css';
import reportWebVitals from './tests/reportWebVitals';

import {rerenderEntireTrie} from "./render";
import state from "./Redux/state";



rerenderEntireTrie(state);

reportWebVitals();
