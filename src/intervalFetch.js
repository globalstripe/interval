// intervalFetch.js

import { useEffect, useState} from "react";

let timerInterval = 10000 // ms

export const IntervalFetch = (props) => {

    const [ActiveCounter, setActiveCounter] = useState(0);
    const [EliminatedCounter, setEliminatedCounter] = useState(0);
    const [count, setCount] = useState(0);
    const[now, setNow] = useState('Not Set');

    function logger(msg) {
        console.log(msg)
    }

    // Use Effect takes 2 arguments 
    // 1. a function (in this case setInterval
    //    useEffect exectutes this function after the 
    //    componenet renders.
    //    You will see ActiveCounter and Eliminated Counter 
    //    Initially render wit the default values of 0 then update
    //    When the 'Effect' runs

    //    Inside this function we can perform multiple side effects

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        // Inside setInterval!!
     
        setInterval(() => {


        fetch('https://europe-west1-the-new-vibe-staging.cloudfunctions.net/getActiveUsersCounterTotal')
            .then(resp => resp.json())
            .then(data => 
                {   
                    //console.log('Getting new Active User Data')
                    //console.log(data.Count)
                    if (ActiveCounter !== data.Count) {
                        setActiveCounter(data.Count)

                const newdata = new Date();
                console.log('String',newdata.toString())
              
                setNow(newdata.toString())
                    }
                }
            )  
            
        fetch('https://europe-west1-the-new-vibe-staging.cloudfunctions.net/getEliminatedUsersCounterTotal')
            .then(resp => resp.json())
            .then(data => 
                {   
                    //console.log('Getting new Eliminated User data')
                    //console.log(data.Count)

                    if (EliminatedCounter !== data.Count) {
                        setEliminatedCounter(data.Count)

                    }
                }
            )

        setCount(count + 1)

        },
        timerInterval // setInterval execution interval
        ,);
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [ActiveCounter, EliminatedCounter,count]);

    // The second argument here is the dependancy array,
    // useEffect checks to see if these values have changed 
    // If they have - the function is executed, if not 


    return (
        
        <div className="timer">
        <div className="col-4">
        <h1 className="header">{props.active}: </h1>
        <div className="box2"><p>{ActiveCounter} </p>
        </div>

        <h1 className="header">{props.eliminated}: </h1>
        <div className="box2"><p>{EliminatedCounter} </p>
        </div>

        <h1 className="header">Runs </h1>
        <div className="box2"><p>{count} </p>
        </div>
  
        <h1 className="header">Last Run </h1>
       <div className="box1"><p>{now}</p>
        </div>

        </div>
        </div>
        
    );

};

export default IntervalFetch;