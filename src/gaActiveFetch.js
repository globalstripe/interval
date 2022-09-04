// gaActiveFetch.js

import { useEffect, useState} from "react";

let timerInterval = 10000 // ms

export const GACounterFetch = (props) => {

    const [GACounter, setGACounter] = useState(0);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        // Inside setInterval!!
        setInterval(() => {

        // Needs CORS fixed
        fetch('https://europe-west1-the-new-vibe.cloudfunctions.net/gaRealtimeData')
            .then(resp => resp.json())
            .then(data => 
                {   

                        console.log(data)
                        // Tip - do not put - chars in JSON keynames!
                        // Otherwise have to use [] syntax to access!
                        setGACounter(data['GA-Activeusers'])
                    
                }
            )  
       

        },
        timerInterval // setInterval execution interval
        ,);
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [GACounter]);

    // The second argument here is the dependancy array,
    // useEffect checks to see if these values have changed 
    // If they have - the function is executed, if not 


    return (
        
        <div className="timer">
        <div className="col-4">
        <h1 className="header">GA Active: </h1>
        <div className="box2"><p>{GACounter} </p>
        </div>


        </div>
        </div>
        
    );

};

export default GACounterFetch;