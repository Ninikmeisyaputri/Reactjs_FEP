import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Tempat dan suasana</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpeg'
              text='Tempat nyaman untuk berkumpul'
            />
            <CardItem
              src='images/2.jpeg'
              text='Tampak depan telihat menarik untuk di kunjungi'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpeg'
              text='tempat juga bersih'
            />
            <CardItem
              src='images/4.jpeg'
              text='Suasananya bagus '
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;