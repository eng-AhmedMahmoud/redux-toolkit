import { useState } from 'react';
import Cats from '../components/Cats';
import Dogs from '../components/Dogs';

const Battle = () => {
  const [choice, setChoice] = useState('cats')

  return (
    <> 
        <h1>Cats VS Dogs App</h1>
        <p>choose your favorite</p>
        <button onClick={() => setChoice('cats')}>Cats</button> &nbsp;
        <button onClick={() => setChoice('dogs')}>Dogs</button>
        {choice == 'cats' ? <Cats /> : <Dogs />}
    </>
  )
}

export default Battle