import React from 'react';
//import one method from whole package - es6
import { render } from 'react-dom';

import GitRepoWrapperComponent from './components/GitRepoWrapperComponent';
import GitRepoComponent from './components/GitRepoComponent';
import GoogleChartComponent from './components/GoogleChartComponent';
import ExampleChartComponent from './components/exampleChartComponent';
import style from './css/style.css';
//JSx
render(<GitRepoWrapperComponent/>, document.querySelector('#main'));
