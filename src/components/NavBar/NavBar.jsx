import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <header>
        <p className="logo">FOOTBAY</p>
        <div className="header__links">
          <nav>
              <ul className="nav__items">
                  <li><a href="/" target="_self">Casuales</a></li>
                  <li><a href="/" target="_self">Deportivas</a></li>
                  <li><a href="/" target="_self">Medias</a></li>
                  <li><a href="/" target="_self">Accesorios</a></li>
              </ul>
          </nav>
          <CartWidget />
        </div>
    </header>
  )
}
