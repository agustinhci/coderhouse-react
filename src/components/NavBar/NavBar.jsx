import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
        <Link className="logo" to={`/`}>
          <p>FOOTBAY</p>
        </Link>
        <div className="header__links">
          <nav>
              <ul className="nav__items">
                  <NavLink className="nav__items--links" to={`/category/hombres`}>Hombres</NavLink>
                  <NavLink className="nav__items--links" to={`/category/mujeres`}>Mujeres</NavLink>
                  <NavLink className="nav__items--links" to={`/category/niños`}>Niños</NavLink>
              </ul>
          </nav>
          <CartWidget />
        </div>
    </header>
  )
}
