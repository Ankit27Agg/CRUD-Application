import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
function Navbar() {
  return (
    <nav class="navbar fixed-top bg-light">
        <div class="container-fluid logo">
          <a class="navbar-brand" href="/">CRUD Application</a>
        </div>
      </nav>
  )
}

export default Navbar