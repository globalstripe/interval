import './App.css';
import Timer from './timer.js'
import IntervalFetchCount from './intervalFetchCount.js'
import IntervalFetchDistributedCounter from './intervalFetchDistributedCounter'
import GACounter, { GACounterFetch } from './gaActiveFetch.js';
import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 5px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;



Button.defaultProps = {
  theme: "blue"
};

async function zero() {

  fetch('https://europe-west1-the-new-vibe-staging.cloudfunctions.net/zeroAllCounters?override=yes')
  .then(resp => resp.json())
  .then(data => 
     {   
          console.log(data)
          alert("Zero Counters!", data);
      }
  )
}

async function executeupdate() {

  fetch('https://europe-west1-the-new-vibe-staging.cloudfunctions.net/executeUpdateActiveUserCount')
  .then(resp => resp.json())
  .then(data => 
     {   
          console.log(data)
          alert("Updated Actuals", data);
      }
  )
}

async function inrement() {

  fetch('https://europe-west1-the-new-vibe-staging.cloudfunctions.net/executeUpdateActiveUserCount')
  .then(resp => resp.json())
  .then(data => 
     {   
          console.log(data)
          alert("Updated Actuals", data);
      }
  )
}

async function decrement() {

  fetch('https://europe-west1-the-new-vibe-staging.cloudfunctions.net/executeUpdateActiveUserCount')
  .then(resp => resp.json())
  .then(data => 
     {   
          console.log(data)
          alert("Updated Actuals", data);
      }
  )
}







function App() {
  return (
    <div className="App">
      <div className="container">

      <div>
        <Button onClick={zero}>Zero All</Button>
        <Button onClick={executeupdate}>Update Active</Button>
        <Button onClick={executeupdate}>Increment</Button>
        <Button onClick={executeupdate}>Decrement</Button>
      </div>

      <header className="App-header">

        {/* <h1 className="header">Next Live Show </h1> */}
           
        {/* <Timer deadline="December, 31, 2022" /> */}
      
        {/* <h1 className="header">Counters: </h1> */}
        
        <IntervalFetchCount active='Active' />

        <IntervalFetchDistributedCounter active='Active' />

    
        </header>

      </div>
    </div>
  );
}

export default App;
