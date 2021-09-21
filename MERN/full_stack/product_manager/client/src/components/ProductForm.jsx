// Import React
import React, { useState } from 'react';
import { Link } from 'react-router-dom' // 'Link' renders anchor tags to navigate application

// Object
const ProductForm = (props) => {
    const { initialData } = props
    // If initialData, then (true) = initialData
    const [form, setForm] = useState(initialData ? initialData : { 
        // If false (not initialData), then:
        title: '',
        price: 0,
        description: ''
    });
    // 'Submit' Function
    const { onSubmit } = props
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmit(form)
        // Submit 'Format'
        setForm({
            title: "",
            price: 0,
            description: "",
        })
    }
    return (
        <div className="form-wrapper">
            <h2>Add Product</h2>
            {/* Submit Form ---------------- */}
            <form onSubmit={ onSubmitHandler }>
                {/* Title ---------------------- */}
                <div className="form-floating mb-3">
                    <input className="form-control" type="text" placeholder="title" name="title" id="title" value={ form.title } onChange={ (e) => setForm({ ...form, title: e.target.value })} />
                    <label htmlFor="title">Title:</label>
                </div>
                {/* Price ---------------------- */}
                <div className="form-floating mb-3">
                    <input className="form-control" type="number" step="0.01" placeholder="price" name="price" id="price" onChange={ (e) => setForm({ ...form, price: e.target.value })} value={ form.price } />
                    <label htmlFor="price" className="form-label">Price:</label>
                </div>
                {/* Description----------------- */}
                <div className="form-floating mb-3" style={{ marginTop: '10px' }}>
                    <textarea className="form-control" cols="20" rows="2" placeholder="description" value={ form.description } id="description" onChange={ (e) => setForm({ ...form, description: e.target.value })} />
                    <label htmlFor="description" className="form-label">Description:</label>
                </div>

                {/* 'Submit' Button */}
                <input type="submit" value="Add Product" className="btn btn-primary p-2" />

                {/* Link renders anchor tags to navigate app */}
                <Link className="btn btn-link" to="/">Home</Link>
            </form>
        </div>
    )
}

export default ProductForm