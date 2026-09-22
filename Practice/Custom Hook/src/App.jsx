import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import useCounter from "./useCounter";

function App() {

    const { count, increase } = useCounter();

    return (
        <>
            <h1>{count}</h1>

            <button onClick={increase}>
                Increase
            </button>
        </>
    );
}

export default App;
