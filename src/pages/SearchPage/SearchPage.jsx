import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import ResultsList from "../../components/ResultsList/ResultsList"
import "./SearchPage.css";
import axios from "axios";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
   

    const fetchBooks = async () => {
        try {
        let lowerCaseSearch = searchTerm.toLowerCase();
        let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${lowerCaseSearch}`
        );
        console.log(response.data.items);
        setSearchResults(response.data.items)
        } catch (error) {
            console.log("Error in fetchBooks: ", error)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        fetchBooks();
    };

    return (
        <div className="constainer search">
            <h1>Search Page</h1>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSubmit={handleSubmit}
            />
             <ResultsList searchResults={searchResults} /> 
        </div>
    );
};

export default SearchPage;