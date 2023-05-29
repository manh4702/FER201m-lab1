import React from 'react';
import ListOfFilms from './ListOfFilms';
import FilmItem from './FilmItem';

const Films = () => {
    return (
        <div className='films'>
            {ListOfFilms.map((film) => (
                <FilmItem key={film.id} film={film}/>
            ))}
        </div>
    );
}

export default Films;