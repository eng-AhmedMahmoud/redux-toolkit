import { useState } from 'react';
import Counter from './components/Counter';
import Battle from './components/Battle';
import './App.css'

function App() {
  const [appChoice, setAppChoice] = useState('counter')
  
  return (
    <>
        <p>choose your app</p>
        <button onClick={() => setAppChoice('counter')}>Counter</button> &nbsp;
        <button onClick={() => setAppChoice('battle')}>Battle</button>
        {
          appChoice == 'counter' ? <Counter /> : <Battle />

        }

    </>
  )
}

export default App
