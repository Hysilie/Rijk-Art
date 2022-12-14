import React from 'react'
import {Link} from 'react-router-dom'



function Searchbar({searchValue, setSearchValue, getResult}) {
/* Function to press enter key and reset the */
   const handleKeyPress = (event) => {
    if(event.key ===  'Enter'){ 
        setSearchValue(event.target.value);
        getResult();
        setSearchValue('');
    }}


return (
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
   <form className="relative flex items-center "> 
    <div className="grid place-items-center h-full w-12 text-gray-300">
        
    <Link to='/gallery/search/'>
        <button onClick={() => {
            getResult(); 
            setSearchValue('')}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg></button>
    </Link>
</div>

    <input
    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
    type="text"
    id="search"
    placeholder="Search something.." 
    onChange={(e) => setSearchValue(e.target.value)}
    onKeyPress={(e) => handleKeyPress(e)}
	value={searchValue}/> </form>
</div>



  )
}
export default Searchbar