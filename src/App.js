import './App.css';
import  filmData  from './film-data.json';
import { useState } from 'react';
import BasicExample from './dropdown.js'


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
  function slide1() {
    setIndex(0)
  }
  function slide2() {
    setIndex(1)
  }
  function slide3() {
    setIndex(2)
  }
  function slide4() {
    setIndex(3)
  }
  function slide5() {
    setIndex(4)
  }
  function slide6() {
    setIndex(5)
  }
  function slide7() {
    setIndex(6)
  }
  function slide8() {
    setIndex(7)
  }

  let data = filmData[index];
  return (
    <>
    <div className='all'>
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
    <div className='sorts'>
      <Sort setIndex={setIndex}/>
      <GoTo setIndex={setIndex}/>
    </div>
    <div className='all-buttons'>
      <div class='btn-group' className='button-box'>
        <button class="btn btn-secondary btn-lg" onClick={handleBackClick} disabled={index === 0}>
          Back
        </button>
        <button class="btn btn-secondary" id='slide' onClick={slide1}>
          1
        </button>
        <button class="btn btn-secondary" id='slide' onClick={slide2}>
          2
        </button>
        <button class="btn btn-secondary" id='slide' onClick={slide3}>
          3
        </button>
        <button class="btn btn-secondary" id='slide' onClick={slide4}>
          4
        </button>
        <button class="btn btn-secondary" id='slide' onClick={slide5}>
          5
        </button>
        <button class="btn btn-secondary" id='slide' onClick={slide6}>
          6
        </button>
        <button class="btn btn-secondary" id='slide' onClick={slide7}>
          7
        </button>
        <button class="btn btn-secondary" id='slide' onClick={slide8}>
          8
        </button>
        <button class="btn btn-secondary btn-lg" onClick={handleNextClick} disabled={index === filmData.length - 1}>
          Next
          </button> 
        <button class="btn btn-secondary btn-lg" onClick={handleRestartClick} disabled={index === 0}>
          Restart
          </button> 
      </div>
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
  <div class="dropdown" className='ddm'>
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <div><button class="btn btn-secondary btn-lg"  onClick={sortReleaseNewOld}>Sort by newest to oldest</button></div>
    <div><button class="btn btn-secondary btn-lg"  onClick={sortReleaseOldNew}>Sort by oldest to newest</button></div>
    </div>
  </div>
  </>
  )
}

function GoTo({setIndex}) {
  function submitName(event) {
    let submission = event.target.value
    console.log(event)
    if (submission === '1') {
      return setIndex(0)}
      
      else if (submission === '2'){
        return setIndex(1)}
  }
  return (
  <form onSubmit={submitName}>
    <label className='goto' for='GoTo'>Go to: </label>
    <input type='film' class="form-control-lg" placeholder="Which movie?"></input>
    <button type="submit" class="btn btn-secondary">Submit</button>
  </form>
  )
}

export default App;
