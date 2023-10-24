import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetailsPage = () => {
    const { bookTitle } = useParams();
    //TODO:
    //Capture book name from url
    //Use book Name to fetch Book Details
    //Save the results, then map them to display
    useEffect(() => {
        fetchBookDetails();
    }, []);


    const fetchBookDetails = async () => {
        try {
            let response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookTitle}`
            );
            console.log(response.data);
        } 
        catch (error) {
            console.log("Error in fetchBookDetails: ", error);
        }
    }
    return (
        <div className="container">
            <h1>Details Page Of "{bookTitle}"</h1>
        </div>
    );
};

export default BookDetailsPage;