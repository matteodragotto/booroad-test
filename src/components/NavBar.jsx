import React from 'react'

const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>BooRoad</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </nav>
    </>
  )
}

export default NavBar