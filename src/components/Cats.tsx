import React, { useState } from 'react'
import { useFetchCatBreedsQuery } from '../features/cats/cats-api-slice'

const Cats = () => {

  const [numCats, setNumCats] = useState(10);
  const { data = [], isFetching } = useFetchCatBreedsQuery(numCats);

  const handleCatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isNaN(Number(value)) && value.trim() !== "") {
      setNumCats(Number(value));
    } else {
      alert('Enter a valid number');
    }
  }

  return (
    <>
      <div id="cats-input" >
        <p>how many do you want ? </p>
        < input type='number' value={numCats} onChange={handleCatChange} />
      </div>

      {
        isFetching ? <p>getting the cats....</p> :
          <div id="cats" >
            {
              data.map((breed) => (
                <table key={breed.id} style={{ display: 'inline-block', margin: '22px' }}>
                  <thead>
                    <tr>
                      <th>Name & Picture </th>
                    </tr>
                  </thead>
                  < tbody >
                    <tr>
                      <td>
                        <img src={breed.image?.url} alt={breed.name} height='250' width='250' />
                        <div>{breed.name} </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))
            }
          </div>
      }
    </>
  )
}

export default Cats