import React from 'react';
import Star from '../assets/star.svg';

const Card = ({img, rating, reviewCount, country, title, price}) => {
  return (
    <div className='card'>
        <div className='card-img'>
            <div className='card-img__photo'>
                <img src={img} alt='woman' />
            </div>
        </div>
        <div className='card-text'>
            <div className='card-text__score'>
                <img src={Star} alr='star' />
                <span className='card-text__score-black'>{rating}</span>
                <span className='card-text__score-gray'>({reviewCount}) {country}</span>
            </div>
            <p>{title}</p>
            <div className='card-text__price'>
                <span>From ${price}</span>
                <span>/ person</span>
            </div>
        </div>
    </div>
  )
}

export default Card