import { useState } from 'react';
import FirstContext from './FirstContext';

const FirstState = (props) => {
    const s1 = {
        "Name" : "Himanshu",
        "Job" : "Developer"
    }
    const [state, setState] = useState(s1);
    const update = ()  => {
        setTimeout(() => {
            setState({
                "Name" : "Lucifer",
                "Job" : "King of my own world"
            })
        }, 3000);
    }
    return (
        <FirstContext.Provider value={{state, update}}>
            {props.children}
        </FirstContext.Provider>
    )
}

export default FirstState;