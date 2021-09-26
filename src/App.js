import React from 'react';
import './App.css';
import SearchBar from './Components/Search';
import BookData from './Components/Data/data.json';


const App = () => {
    return (
        <div className="container">
            <SearchBar placeholder="Search..." data={BookData}/>
        </div>
    )
}

export default App
