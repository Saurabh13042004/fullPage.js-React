import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const App = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed={2500} /* Options here */
    navigation={true}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <img src='https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif' />
            <div id="upar">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
            </div>

          </div>
          <div className="section">
            <img src='https://media.tenor.com/2nKSTDDekOgAAAAC/coding-kira.gif' />
            <div id="upar">
            <p>Section 2 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
            </div>

          </div>
          <div className="section">
            <img src='https://miro.medium.com/v2/resize:fit:1358/1*mB6YLIGqIk1hTzU6Fb12zQ.gif' />
            <div id="upar">
            
           
            </div>

          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;