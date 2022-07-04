import React from 'react';
import KatieZaferes from '../assets/KatieZaferes.svg';
import Star from '../assets/star.svg';

const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-img'>
            <div className='card-img__photo'>
                <img src={KatieZaferes} alt='woman' />
            </div>
        </div>
        <div className='card-text'>
            <div className='card-text__score'>
                <img src={Star} alr='star' />
                <span className='card-text__score-black'>5.0</span>
                <span className='card-text__score-gray'>(6) USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <div className='card-text__price'>
                <span>From $136</span>
                <span>/ person</span>
            </div>
        </div>
    </div>
  )
}

export default Card