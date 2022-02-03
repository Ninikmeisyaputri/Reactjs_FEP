import React from 'react';
import '../../App.css';
import CardItem1 from './CardItem1';

export default function Product() {
    return (
        <div className='cards'>
          <h1>Products</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem1
                  src='images/bebekhibrida.jpg'
                  text='Bebek Hibrida &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' 
                  label='Rp. 50.000/ekor' 
                  path='/services'
                />
                <CardItem1
                  src='images/bebekpeking.jpg'
                  text='Bebek Peking &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; '
                  label='Rp.65.000/ekor'
                  path='/services'
                />
                <CardItem1
                  src='images/bebekalabio.jpg'
                  text='Bebek Alabio &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; '
                  label='Rp. 48.000'
                  path='/services'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem1
                  src='images/Bebek1.jpg'
                  text='Daging bebek frozen'
                  label='Rp. 35.000/kg'
                  path='/services'
                />
                <CardItem1
                  src='images/bebekfillet.jpg'
                  text='Daging bebek fillet'
                  label='Rp. 40.000/kg'
                  path='/products'
                />
                <CardItem1
                  src='images/Atibebek.jpg'
                  text='Hati dan Ampela bebek'
                  label='Rp. 20.000/kg'
                  path='/sign-up'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem1
                  src='images/cekerbebek.jpg'
                  text='Ceker bebek'
                  label='Rp. 17.000 '
                  path='/services'
                />
                <CardItem1
                  src='images/kepalabebek.jpg'
                  text='Kepala bebek'
                  label='Rp. 15.000'
                  path='/products'
                />
                <CardItem1
                  src='images/telurbebek.jpg'
                  text='Telur Bebek'
                  label='Rp. 36.000/kg '
                  path='/sign-up'
                />
              </ul>
            </div>
          </div>
        </div>
      );
}