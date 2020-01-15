import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
    return <List />
};

ReactDOM.render(<App />, document.getElementById('root'));

