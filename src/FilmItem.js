import React from "react"

const FilmItem = ({film}) => {
    const{id, image, title, year, nation} = film;
    return (
        <div className='film-item'>
            <img src={image} alt={title}/>
            <div className='film-details'>
                <h3>{title}</h3>
                <p>Year: {year}</p>
                <p>Nation: {nation}</p>
            </div>
        </div>
    );
};

export default FilmItem;