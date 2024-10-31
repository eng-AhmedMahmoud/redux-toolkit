import { useFetchDogBreedsQuery } from '../features/dogs/dogs-api-slice'
import { useState } from 'react'


const Dogs = () => {

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchDogBreedsQuery(numDogs);

  const handleDogChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isNaN(Number(value)) && value.trim() !== "") {
      setNumDogs(Number(value));
    } else {
      alert('Enter a valid number');
    }
  }

  return (
    <>
      <div id="dogs-input">
        <p>how many do you want?</p>
        <input type='number' value={numDogs} onChange={handleDogChange} />
      </div>

      {isFetching ? <p> getting the dogs....</p> :
        <div id="dogs">
          {data.map((breed) => (
            <table key={breed.id} style={{ display: 'inline-block', margin: '22px' }}>
              <thead>
                <tr>
                  <th>Name & Picture</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height='250' width='250' />
                    <div>{breed.name}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>}
    </>
  )
}

export default Dogs