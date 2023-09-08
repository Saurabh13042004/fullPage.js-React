/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Section from './components/Section';
const App = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1500} /* Options here */
    navigation={true}
    navigationTooltips={['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5']}
    showActiveTooltip={false}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {Array.apply(null, { length: 5 }).map((e, i) => (
            <Section className="section" id={i+1} fullpageApi={fullpageApi} key={i} url={
              (i)%2===0 ? 'https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif' : 'https://miro.medium.com/v2/resize:fit:960/1*5CZwLt-HSxgaztHi-lxs3g.gif'
            }>
              id:{i+1}, fullpageApi: fullpageApi,
            </Section>
          ))}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;