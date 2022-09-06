// intervalFetch.js

import { configure } from "@testing-library/react";
import { useEffect, useState} from "react";

let timerInterval = 5000 // ms

export const  IntervalFetchCount = (props) => {


    const [UserCount, setUserCount] = useState(0);
    const [count, setCount] = useState(0);
    const [now, setNow] = useState('Never Run');
    const [timerSet, setTimer] = useState(false)


    const main = () => {
        console.log('Increment Count')
       
        fetch('https://europe-west1-the-new-vibe-staging.cloudfunctions.net/getActiveUserTotal')
            .then(resp => resp.json())
            .then(data => 
               {   
                    console.log(data)
                    console.log('Fetching Count Total')
                    setUserCount(data.count)

                    const newdate = new Date();
                    console.log('Last Run: ', newdate.toString())
                    setNow(newdate.toString())
                    setCount(count => count + 1)
                }
            )

        console.log('Sleep ', timerInterval)
    }

   

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
    
        main()
     
     if (timerSet === false ) {  // prevent the interval timer being set more than once
        
        setTimer(true)
        
        setInterval(() => {

        console.log('Interval Timer Ran')

        main()

        },
        timerInterval // setInterval execution interval
        );

     } else {
        console.log('Ran Effect: But didnt re-init the timer') 
     }
        // end if
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    },[]);




    return (
        
        <div className="timer">
        <div className="col-4">
   
        <h1 className="header">Counter Total: </h1>
        <div className="box2"><p>{UserCount} </p>
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

export default IntervalFetchCount;