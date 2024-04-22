import React from 'react'
import Slider from './Components/ImageSlider/Slider'
// import Accordion from './Components/Accordion/Accordion'
// import RandomColor from './Components/RandomColor'
// import StarRating from './Components/StarRating'

export default function App() {
  return (
    <div>
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating/> */}
      <Slider url={ 'https://picsum.photos/v2/list'} limit={4}/>
      </div>
  )
}
