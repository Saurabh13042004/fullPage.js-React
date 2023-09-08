import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

function Section({id, onclick}) {
  return (
    <div id="upar">
    <p>Section {id} (welcome to fullpage.js)</p>
    <button onClick={{onclick}}>
      Click me to move down
    </button>
    </div>  )
}

export default Section