import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Wrapper from '../../../Components/Wrapper/Wrapper'

function EditProduct(props) {
  // console.log(props.match.params.id)
  console.log()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  // var description = '';//we can't use simple variable bcz using usestate we can update our page while rerendering.
  const navigate = useNavigate();
  let params = useParams();
  console.log('hi')
  
  // fetch data from api
  useEffect(() => {
    fetch(`http://localhost:3004/products/${params.id}`)
      .then(res => res.json())
      .then(product=>{
        setName(product.name);
        setDescription(product.description);
      })
  }, []);

  const submit = (e) => {
    e.preventDefault();
    console.log('hi')
    fetch(`http://localhost:3004/products/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name,description }),
    })
    .then(()=>{navigate('/products')})
  }

  return (
    <Wrapper>
      <div>Edit Product</div>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => { setName(e.target.value)}}
            value={name} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Decription</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => { setDescription(e.target.value)}}
            defaultValue={description} />
        </div>
        {/* <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Description</label>
          <input type="text" class="form-control" id="exampleInputPassword1"
          onChange={(e) => { setDescription(e.target.value) }} />
        </div> */}
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </form>
    </Wrapper>
  )
}

export default EditProduct