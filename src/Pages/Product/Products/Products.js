import React, { useState, useEffect } from 'react'
import { Search } from '../../../Components/Search/Search';
import DataTable from '../../../Components/Table/Table';
import Wrapper from '../../../Components/Wrapper/Wrapper'

function Products() {

  const [products, setProducts] = useState([])
  const [original, setOriginal] = useState([])

  const filterProduct = (val) => {
    setProducts(val);
  }
  // fetch data from api
  useEffect(() => {
    fetch('http://localhost:3004/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setOriginal(data)
      }
      )
  }, []);

  const deleteProduct = (id) => {
    console.log('delete ', id);
    fetch(`http://localhost:3004/products/${id}`,
      {
        method: 'DELETE'
      }
    )

    setProducts(products.filter(product => product.id != id))
  }

  return (
    <Wrapper>
      <div>Products</div>
      <Search products={products} filterProduct={filterProduct} original={original} />
      <table class="table">
        {/* <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead> */}
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colspan="12" className='text-center'>No data found</td>

            </tr>
          ) : (
            <>
              <DataTable products={products} />
            </>
            //           products.map(product => {
            //             return (
            //             <>
            //             {/* {console.log("hi")} */}
            //             {/* <EnhancedTable products={products}/> */}

            //               {/* <tr key={product.id}>
            //                 <th scope="row">{product.id}</th>
            //                 <td>{product.name}</td>
            //                 <td>{product.description}</td>
            //                 <td>
            //                   <div class="dropdown">
            //                     <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            //                       Actions
            //                     </button>
            //                     <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

            //                       <li><a class="dropdown-item" href={`/${product.id}/viewproduct`}>View</a></li>
            //                       <li><a class="dropdown-item" href={`/${product.id}/editproduct`}>Edit</a></li>
            //                       <li><a class="dropdown-item" onClick={() => { deleteProduct(product.id) }}>Delete</a></li>
            //                     </ul>
            //                   </div>
            //                 </td>
            //               </tr> */}
            //               <ul class="pagination">
            //   <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            //   <li class="page-item"><a class="page-link" href="#">1</a></li>
            //   <li class="page-item"><a class="page-link" href="#">2</a></li>
            //   <li class="page-item"><a class="page-link" href="#">3</a></li>
            //   <li class="page-item"><a class="page-link" href="#">Next</a></li>
            // </ul>
            //               </>
            //             )
            //           }
            //           )
          )}

        </tbody>
      </table>
    </Wrapper>
  )
}

export default Products

