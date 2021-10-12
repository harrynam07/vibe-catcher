import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return(
        <div>
            <h1>VibeCheck</h1>
            <h3>Find a vibe</h3>
        </div>
    )
};

ReactDom.render(<App />, document.getElementById("root"));