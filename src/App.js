import './App.css';
import Timer from './timer.js'
import IntervalFetch from './intervalFetch.js'
import GACounter, { GACounterFetch } from './gaActiveFetch.js';

function App() {
  return (
    <div className="App">
      <div className="container">

      <header className="App-header">
        <h1 className="header">Next Live Show </h1>
           
        {/* <Timer deadline="December, 31, 2022" /> */}
      
        <h1 className="header">Counters: </h1>
        
        <IntervalFetch active='Active' />
    
        </header>

      </div>
    </div>
  );
}

export default App;
