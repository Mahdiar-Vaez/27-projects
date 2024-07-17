import React from 'react'
import LoadMoreProducts from './Components/LoadMoreProducts/LoadMoreProducts'
import QrScanner from './Components/QrCode/QrScanner'
import LightDarkMode from './Components/LighDarkMode/LightDarkMode'
import ScrollIndicator from './Components/ScrollIndicator'
import TabTest from './Components/tabComponents/Tab-Test'
import ModalTest from './Components/Modal/Modal-test'
import GitHubUserFinder from './Components/GitHubUserFinder/GitHubUserFinder'
import SearchAutoComplete from './Components/SearchAutoCompelete/SearchAutoComplete'
import TicTacToe from './Components/Tic-Tac-Toe'
import FeaturesFlags from './Components/Features-Flags'
import FeaturesFlagglobalState from './Components/Features-Flags/Context'
// import Slider from './Components/ImageSlider/Slider'
// import Accordion from './Components/Accordion/Accordion'
// import RandomColor from './Components/RandomColor'
// import StarRating from './Components/StarRating'
import UseFetchHookTest from './Components/CustomeHooks/Fetch/test'
export default function App() {
  return (
    <div>
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating/> */}
      {/* <Slider url={ 'https://picsum.photos/v2/list'} limit={4}/> */}
      {/* <LoadMoreProducts /> */}
      {/* <QrScanner/> */}
      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator/> */}
      {/* <TabTest/> */}
      {/* <ModalTest/> */}
      {/* <GitHubUserFinder/> */}
      {/* <SearchAutoComplete/> */}
      {/* <TicTacToe/> */}
      {/* <FeaturesFlagglobalState >
        <FeaturesFlags/>
      </FeaturesFlagglobalState> */}
      <UseFetchHookTest/>
      </div>
  )
}
