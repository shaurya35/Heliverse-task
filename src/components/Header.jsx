import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <>
      <header className='header'>
        <div className="header_logo_envato">
          <a href="#" className='logo_envato_link'>
            <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg" alt="Envato" className='logo_envato_img'/>
          </a>
        </div>
        <div className="header_button">
          <a href="#" className="button_buynow">Buy now</a>
        </div>
      </header>
    </>
  )
}
