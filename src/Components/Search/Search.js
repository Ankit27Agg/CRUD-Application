import React, { useState } from 'react'

export const Search = (props) => {

    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        let filter = props.original.filter((val) => {
            if (value == "") {
                return val;
            }
            else if (val.name.toLowerCase().includes(value.toLowerCase())) {
                return val;
            }
        })
        props.filterProduct(filter);
        setValue("");

    }

    const handleReset = () => {
        props.filterProduct(props.original)
    }
    return (
        <>
            <form style={{ maxWidth: '20vw', maxHeight: '5vh' }}
                onSubmit={handleSubmit}
            >
                <div class="mb-3" style={{ display: 'flex', flexDirection: 'row' }}>
                    <input style={{ maxHeight: '5vh', margin: 'auto', alignItem: 'center', justifyContent: 'center' }}
                        type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={value}
                        placeholder='Search Name...'
                        onChange={(e) => setValue(e.target.value)} />
                    <button type="submit" class="btn btn-success me-md-2 m-auto">Submit</button>
                </div>
            </form>
            <button type="btn" class="btn btn-dark m-auto" onClick={handleReset}>Reset</button>
        </>
    )
}
