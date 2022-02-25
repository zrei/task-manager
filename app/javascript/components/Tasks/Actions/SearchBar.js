
import React, { useState, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './Actions.css';

const searchBarReducer = (state, event) => {
    if (event.clear) {
        return {
            searchData: ''
        };
    }
    return {
        ...state,
        [event.name]: event.value
    };
};

const SearchBar = (props) => {
    const message = props.message;
    let navigate = useNavigate();
    const [searchBarData, setSearchBarData] = useReducer(searchBarReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchBarData({
            clear: true
        });
        setSubmitting(true);
        const url = '/search/' + searchBarData.searchData.toLowerCase();
        navigate(url);
    };
    const handleChange = (event) => {
        setSearchBarData({
            name: event.target.name,
            value: event.target.value
        });
    };
    return (
        <form disabled={submitting}>
            <input
                type="text"
                className="search-bar"
                id="header-search"
                placeholder={message}
                name="searchData" 
                onChange={handleChange}
                value={searchBarData.searchData || ''}
            />
            <button 
                type="submit"
                onClick={handleSubmit}
                disabled={searchBarData.searchData === undefined ||
                            searchBarData.searchData === ''
                        }
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar; 
