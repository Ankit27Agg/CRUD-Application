import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Wrapper from '../../../Components/Wrapper/Wrapper'

function CreateProduct() {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  // var description = '';//we can't use simple variable bcz using usestate we can update our page while rerendering.
  const navigate = useNavigate();
  
  const submit = (e) => {
    e.preventDefault();
    console.log('hi')
    fetch('http://localhost:3004/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name,description }),
    })
    .then(()=>{navigate('/products')})
  }
  return (
    <Wrapper>
      <div>Create Product</div>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => { setName(e.target.value)}} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Decription</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => { setDescription(e.target.value)}} />
        </div>
        {/* <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Description</label>
          <input type="text" class="form-control" id="exampleInputPassword1"
          onChange={(e) => { setDescription(e.target.value) }} />
        </div> */}
        <button type="submit" class="btn btn-primary me-md-2">Submit</button>
        <a class="btn btn-primary" href="/products" role="button">Back</a>
      </form>
    </Wrapper>
  )
}

export default CreateProduct