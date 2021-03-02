import React from 'react'

const GifGridItem = ({ title, url, delay }) => {

    //document.querySelector('.card.animate__bounceIn').
    console.log('delay')
    console.log(delay)

    return (
        <div
            className="card animate__animated animate__fadeIn"
            style={ {animationDelay: `${ delay * .1 }s`} }
        >
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

export default GifGridItem;