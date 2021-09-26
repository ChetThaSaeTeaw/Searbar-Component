import React , { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function SearchBar({ placeholder , data }) {
    const [filterData ,setFilterData ] = useState([]);
    const [ wordEnterd , setWordEnterd ] = useState("");

    const handleFillter = e => {
        const searchWould = e.target.value;
        setWordEnterd(searchWould)
        const newFilter = data.filter(value => {
            return value.title.toLowerCase().includes(searchWould.toLowerCase());
        });
        searchWould === "" || searchWould === 0 ? setFilterData([]) : setFilterData(newFilter);
    }

    const clearInput = () => {
        setFilterData([]);
        setWordEnterd("");
    }

    return (
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder={placeholder} onChange={handleFillter} value={wordEnterd}/>
                <div className="searchIcon">
                    {filterData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
                </div>
            </div>
            {filterData.length !== 0 && (
                <div className="dataResult">
                    {filterData.slice(0,15).map((value , key) => {
                    return  <a className="dataItems" href={value.link} rel="noreferrer" target="_blank">
                                <p key={key}>{value.title}</p>
                            </a>
                   })}
               </div>
            )}
        </div>
    )
}

export default SearchBar;
