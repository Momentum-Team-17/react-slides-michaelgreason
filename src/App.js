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
    setIndex(index + 1);
    if (index > (filmData.length))
    {
      setIndex = 0
    }
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
    <button onClick={handleBackClick}>
      Back
    </button>
    <button onClick={handleNextClick}>
      Next
      </button> 
    <button onClick={handleRestartClick}>
      Restart
      </button> 
      
      <h1>
        {data.title}
      </h1>
      <div>
        <dive>
          <img src={data.image} alt='cover art'></img>
        </dive>
      <h2>
        {data.original_title}
      </h2>
      <div>
        {data.release_date}
      </div>
      <p>{data.description}</p>
      </div>
      

    </>
  )
}



export default App;
