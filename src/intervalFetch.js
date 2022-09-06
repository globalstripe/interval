// intervalFetch.js

import { useEffect, useState} from "react";

let timerInterval = 10000 // ms

export const  IntervalFetch = (props) => {

    const [ActiveCounter, setActiveCounter] = useState(0);
    const [UserCount, setUserCount] = useState(0);
    const [EliminatedCounter, setEliminatedCounter] = useState(0);
    const [count, setCount] = useState(0);
    const [now, setNow] = useState('Never Run');
    const [timerSet, setTimer] = useState(false)

    // Use Effect takes 2 arguments 
    // 1. a function (in this case setInterval
    //    useEffect exectutes this function after the 
    //    componenet renders.
    //    You will see ActiveCounter and Eliminated Counter 
    //    Initially render witj the default values of 0 then update
    //    When the 'Effect' runs

    //    Inside this function we can perform multiple side effects

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        // Inside setInterval!!
        // Use Effect will get called again when any of the data in it needs 
        // Re-rendered
        // The interval timer running ... if it updates values will cahase useeffect to run again
        // But you want to ensure it doesnt start another timer

        console.log('Run Use Effect Once - Setup Interval Timer')
        console.log('Timer Interval Set ', timerInterval)
        console.log('Timer Set ', timerSet)
    
     
     if (timerSet === false ) {  // prevent the interval timer being set more than once
        
        setTimer(true)
        
        setInterval(() => {

        console.log('Interval Timer Ran')
        console.log('Increment Count')
       
              
        fetch('https://europe-west1-the-new-vibe-staging.cloudfunctions.net/getActiveUsersCounterTotal')
            .then(resp => resp.json())
            .then(data => 
                {   
                    //console.log('Getting new Active User Data')
                    //console.log(data.Count)
                    // console.log('Fetched Counter' + countvar + ' times')
                
                    console.log('Fetching Active Users')
                    setActiveCounter(data.Count)
  
                    const newdate = new Date();
                    console.log('Last Run: ', newdate.toString())
                    setNow(newdate.toString())
                    setCount(count => count + 1)
                 
                }
            )  
            
       fetch('https://europe-west1-the-new-vibe-staging.cloudfunctions.net/getEliminatedUsersCounterTotal')
            .then(resp => resp.json())
            .then(data => 
               {   
                    //console.log(data.Count)
                    console.log('Fetching Eliminated Users')
                    setEliminatedCounter(data.Count)
                   
                }
            )

        fetch('https://europe-west1-the-new-vibe-staging.cloudfunctions.net/getActiveUserTotal')
            .then(resp => resp.json())
            .then(data => 
               {   
                    console.log(data)
                    console.log('Fetching Count Total')
                    setUserCount(data.count)
                }
            )

        console.log('Sleep ', timerInterval)

        },
        timerInterval // setInterval execution interval
        );

     } else {
        console.log('Ran Effect: But didnt re-init the timer') 
     }
        // end if
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    },[]);

    // [ActiveCounter, EliminatedCounter,count]
    // The second argument here is the dependancy array,
    // useEffect checks to see if these values have changed 
    // If they have - the function is executed, if not 


    return (
        
        <div className="timer">
        <div className="col-4">
        <h1 className="header">{props.active} Distributed: </h1>
        <div className="box2"><p>{ActiveCounter} </p>
        </div>

        <h1 className="header">Counter Total: </h1>
        <div className="box2"><p>{UserCount} </p>
        </div>

        <h1 className="header">Eliminated: </h1>
        <div className="box2"><p>{EliminatedCounter} </p>
        </div>

        <h1 className="header">Runs </h1>
        <div className="box2"><p>{count} </p>
        </div>
  
        <h1 className="header">Last Run </h1>
       <div className="box2"><p>{now}</p>
        </div>

        </div>
        </div>
        
    );

};

export default IntervalFetch;