import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/react-website-yt/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islando of Bali in a Private Cruise'
              label='Luxury'
              path='/react-website-yt/services'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean cisiting Unchated Waters'
              label='Mystery'
              path='/react-website-yt/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Texperience Football on Top of the Himilayan'
              label='Adventure'
              path='/react-website-yt/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Luxury'
              path='/react-website-yt/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
