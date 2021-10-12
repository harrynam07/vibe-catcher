import React from 'react';
import ReactDom from 'react-dom';

import MainContainer from './components/containers/mainContainer';
// import Button from './components/button.js';

const App = () => {
    return(
        <div>
            <h1>Vibe Check</h1>
            <MainContainer/>
        </div>
    );
};

ReactDom.render(<App />, document.getElementById("root"));