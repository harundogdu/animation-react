import React from 'react';
import { motion } from 'framer-motion';

function Movie({ movie }) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            exit={{ opacity: 0 , y: 50, scale: 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className='movie'
        >
            <h1>{movie.title}</h1>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title} />
        </motion.div>
    );
}

export default Movie;