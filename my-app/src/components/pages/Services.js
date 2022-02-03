import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';




export default function Services(){
    return (
        <div className='cards'>
          <Link
              class='social-icon-link facebook'
              to='//www.google.co.id/maps/place/H669%2B5RF,+Tanjung,+Kec.+Purwokerto+Sel.,+Kabupaten+Banyumas,+Jawa+Tengah+53144/@-7.4394575,109.2194704,20z/data=!4m13!1m7!3m6!1s0x2e655ddcab0dc9c1:0xa491405788a1d85f!2sKedungwringin,+Kec.+Patikraja,+Kabupaten+Banyumas,+Jawa+Tengah!3b1!8m2!3d-7.4461263!4d109.2207098!3m4!1s0x2e655dd8949e191f:0x1f56ab488adcf18!8m2!3d-7.4396397!4d109.2195715!5m1!1e1?hl=id'
              target='_blank'
              aria-label='Facebook'
            >
              <center><h3 style={{color: 'black'}}>LINK MAP</h3></center>
          </Link>
          <div className='cards__container'>
            <div className='cards__wrapper'>
            <img src='images/maps.png'></img>
    </div>
  </div>
</div>
      );
}