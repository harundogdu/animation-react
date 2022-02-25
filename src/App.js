import React from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "./app.css";
import Movie from "./components/Movie";
import Filter from "./components/Filter";

function App() {
    const [popular, setPopular] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState([]);
    const [currentGenre, setCurrentGenre] = React.useState(0);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchPopular();
    }, []);

    const fetchPopular = async () => {
        const {
            data: { results },
        } = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        );
        setPopular(results);
        setFilteredData(results);
        setLoading(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="app">
            <Filter
                currentGenre={currentGenre}
                setCurrentGenre={setCurrentGenre}
                popular={popular}
                setFilteredData={setFilteredData}
            />
            <motion.div
                layout
                className="popular-movies"
            >
                <AnimatePresence>
                    {filteredData.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default App;
