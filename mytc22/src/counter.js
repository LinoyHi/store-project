import {useState} from 'react'

function Counter(){
    const [counter, setCounter]= useState(0)
    const addOne= e => {setCounter(counter+1)}
    return (
        <div>
            <h2>counter: {counter}</h2>
            <button onClick={addOne}>add one</button>
        </div>
    )
}

export default Counter