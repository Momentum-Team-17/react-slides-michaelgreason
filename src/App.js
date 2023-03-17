import './App.css';
import  filmData  from './film-data.json';
import { useState } from 'react';


function App() {
  return (
    <div className='section'>
      <div>
        <div>
      {
        <Gallery/>
        }
        </div>
      </div>
    </div>
    );
}

function Gallery() {
  let [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex(index + 1)
}
  function handleBackClick() {
    setIndex(index - 1)
  }
  function handleRestartClick() {
    setIndex(0)
  }

  let data = filmData[index];
  return (
    <>
    <div className='all'>
      <h1>
        {data.title}
      </h1>
        <div class="card-group" className='below-title'>
          <div>
            <div class='card' className='image-box' width='80%' height='80%'>
              <img class='card-body' className='image' src={data.image} alt='cover art'></img>
            </div>
            <div class='card' className='side-card'>
              <div class='card-body'>
              <h2>
                {data.original_title}
              </h2>
              <div>
                {data.release_date}
              </div>
                <p>{data.description}</p>
                </div>
            </div>  
          </div>
        </div>
      </div>
    <div className='button-box'>
        <button onClick={handleBackClick} disabled={index === 0}>
          Back
        </button>
        <button onClick={handleNextClick} disabled={index === filmData.length - 1}>
          Next
          </button> 
        <button onClick={handleRestartClick} disabled={index === 0}>
          Restart
          </button> 
    </div>
      

    </>
  )
}



export default App;
