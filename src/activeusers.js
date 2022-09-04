// activeusers.js

import { useEffect, useMemo, useState } from "react";

let users = 2112

export const ActiveUsers = () => {
    const [time, setTime] = useState(Date.now());
    let [users, setUser] = useState(2112);
   
    console.log('Check Active Count ', time )
    console.log('Users:', users)

    useEffect(() => {
        const interval = setInterval(
            () => setTime(Date.now()
            ),
            15000,
        );
        setUser(users+1)
    }, []);


    return (
        <div className="activeusers">


                    <div className="box">
                        <p>{users}</p>
    
                    </div>
           
            
        </div>
    );
};
export default ActiveUsers;