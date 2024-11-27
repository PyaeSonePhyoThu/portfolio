import React from 'react';
import { Home } from './Home';
import { About } from './About';
// import { Skills } from 'Skills';
// import { Projects } from 'Projects';
// import { Contact } from 'Contact';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #0d1117;
  color: #c9d1d9;
  font-family: 'Arial', sans-serif;
  padding: 0;
  margin: 0;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Home />
      <About />
      {/* <Skills />
      <Projects />
      <Contact /> */}
    </AppContainer>
  );
}

export default App;
