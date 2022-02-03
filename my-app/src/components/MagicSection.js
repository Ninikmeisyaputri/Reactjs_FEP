import React from 'react'
import '../App.css';
import {Button} from './Button'
import './MagicSection.css'

function MagicSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/bebek.mp4" autoPlay loop muted />
            <h1 style={{backgroundColor: ""}}>Bebek Potong LIMO Purwokerto</h1>
            <p style={{backgroundColor: ""}}>Selamat Datang di Website kami</p>
        </div>
    )
}

export default MagicSection
