import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const favoritePageName = "Bob";

const FavoritesPage = async () => {
    return (
        <div className="container">
            Favorites Page of {favoritePageName}
        </div>
    );
};

export default FavoritesPage;