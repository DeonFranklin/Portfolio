import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='dev_cards__item'>
        <div className='dev_cards__item__link' to={props.path}>
          <figure className='dev_cards__item__pic-wrap' data-category={props.label}>
            <img
              className='dev_cards__item__img'
              alt='Links'
              src={props.src}
            />
          </figure>
          <div className='dev_cards__item__info'>
            <h5 className='dev_cards__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
