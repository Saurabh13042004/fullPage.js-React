/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Section({ id, fullpageApi,url }) {

    
    return (
        <div className='section'>
             <img src={url} />
            <div id="upar">
                <p>Section {id} (welcome to coding.js)</p>
                { console.log(fullpageApi)}
                <button onClick={() => fullpageApi.moveSectionDown() }>
                    Click me to move down
                </button>
            </div>

            </div>)
}

export default Section