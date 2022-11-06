import React from 'react'
import {Routes, Route} from 'react-router-dom'

/* import every pages corresponding to all elements */
import About from '../pages/About'
import Artists from '../pages/Artists'
import Gallery from '../pages/Gallery'
import GallerySearch from '../pages/GallerySearch'
import GallerySearchBar from '../pages/GallerySearchBar'
import Home from '../pages/Home'
import Research from '../pages/Research'
import DetailArt from '../pages/DetailArt'

function AllRoutes({searchValue, setSearchValue,resultsSearch, getResult}) {


  return (
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/gallery/search/" element={<GallerySearchBar resultsSearch={resultsSearch} searchValue={searchValue} setSearchValue={setSearchValue} getResult={getResult} />} />
    <Route path="/artists/gallery/:id" element={<GallerySearch />} />
    <Route path="/gallery/detail/:id" element={<DetailArt />} />
    <Route path="/artists" element={<Artists />} />
    <Route path="/about" element={<About />} />
    <Route path="/research" element={<Research />} />
    </Routes>
  )
}

export default AllRoutes;