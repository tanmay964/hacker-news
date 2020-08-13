import React , {useState, useEffect} from 'react';

import StoriesContainer from './containers/StoriesContainer'
import {Header} from './components/Header'
function App() {
  
  return (
    <div className="App">
      <Header/>
    <StoriesContainer/>        
    </div>
  );
}

export default App;
