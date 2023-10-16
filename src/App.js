import react from 'react';
import Wordcounter from './Wordcounter';
import "./App.css";

function App() { 
  return ( 
      <div className="App"> 
          <h1 id="top"> 
          Responsive Paragraph Word Counter
          </h1> 
          <Wordcounter /> 
      </div> 
  ); 
} 

export default App;
