import React from "react";

function Filter({ currentGenre, setCurrentGenre, popular, setFilteredData }) {

    React.useEffect(() => {
        if (currentGenre === 0) {
            setFilteredData(popular);
            return;
        }
        setFilteredData(popular.filter(movie => movie.genre_ids.includes(currentGenre)));
    }, [currentGenre])

    return (
        <div className="button-container">
            <button
                onClick={() => setCurrentGenre(0)}
                className={`${currentGenre === 0 ? "active" : ""}`}
            >
                All
            </button>
            <button
                onClick={() => setCurrentGenre(35)}
                className={`${currentGenre === 35 ? "active" : ""}`}
            >
                Comedy
            </button>
            <button
                onClick={() => setCurrentGenre(28)}
                className={`${currentGenre === 28 ? "active" : ""}`}
            >
                Action
            </button>
        </div>
    );
}

export default Filter;
