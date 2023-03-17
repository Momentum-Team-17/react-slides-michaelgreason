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
    <Sort setIndex={setIndex}/>
      <h1>
        {data.title}
      </h1>
        <div class="card-group" className='below-title'>
            <div class='card' className='image-box'>
              <img class='card-body' className='image' src={data.image} alt='cover art'></img>
            </div>
            <div class='card' className='side-card'>
              <div class='card-body'>
              <h2>
                {data.original_title}
              </h2>
              <div className='rd' >
                {data.release_date}
              </div>
                <p class='des'>{data.description}</p>
                </div>
            </div>  
        </div>
    </div>
    <div class='btn-group' className='button-box'>
        <button class="btn btn-secondary" onClick={handleBackClick} disabled={index === 0}>
          Back
        </button>
        <button class="btn btn-secondary" onClick={handleNextClick} disabled={index === filmData.length - 1}>
          Next
          </button> 
        <button class="btn btn-secondary" onClick={handleRestartClick} disabled={index === 0}>
          Restart
          </button> 
    </div>
      

    </>
  )
}

function Sort({setIndex}) {
  function sortReleaseNewOld () {
    setIndex(0)
    filmData.sort(
      (film1, film2) => {
         return film2.release_date - film1.release_date 
      }
    )
  }
  function sortReleaseOldNew () {
    setIndex(0)
    filmData.sort(
      (film1, film2) => {
         return film1.release_date - film2.release_date 
      }
    )
  }
  return (
    <>
  <div>
    <button onClick={sortReleaseNewOld}>Sort by newest to oldest</button>
  </div>
  <div>
    <button onClick={sortReleaseOldNew}>Sort by oldest to newest</button>
  </div>
  </>
  )
}

export default App;
