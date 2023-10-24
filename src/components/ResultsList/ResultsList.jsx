import React from "react";
import "./ResultsList.css";
import { Link } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
    return (
        <div className="resultsList">
            <h2>Search Results:</h2>
            {searchResults.map((singleBook, index) => (
                <Link to={`/${singleBook.volumeInfo.title}`} key={index}>
                <div>
                    <h3>
                        {singleBook.volumeInfo.title} 
                    </h3>
                </div>
                </Link>
            ))}
        </div>
    );
};

export default ResultsList;