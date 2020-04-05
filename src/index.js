import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

// Matrix gets values props of pattern1
// pattern1 is in data.js as a nested array
ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
