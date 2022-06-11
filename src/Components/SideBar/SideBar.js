import React from 'react'
import './SideBar.css'
function SideBar(props) {
  return (
    <div class="d-flex side-bar">


                                        {/* left bar */}
      <div className="p-2 left-bar">
        <a class="btn btn-dark" href="/products" role="button">All Products</a>
        <br></br>
        <a class="btn btn-dark" href="/createproduct" role="button">Add Product</a>
      </div>


                                        {/* right-bar */}
      <div class="p-2 flex-grow-1">{props.children}</div>

    </div>
  )
}

export default SideBar