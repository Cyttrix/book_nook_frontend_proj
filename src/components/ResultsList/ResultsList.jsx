import React from "react";
import "./ResultsList.css";

const ResultsList = ({ searchResults }) => {
    return (
        <div className="resultsList">
            <h2>Search Results:</h2>
            {searchResults.map((singleBook, index) => (
                <div key={index}>
                    <h3>
                        {singleBook.volumeInfo.title} 
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default ResultsList;