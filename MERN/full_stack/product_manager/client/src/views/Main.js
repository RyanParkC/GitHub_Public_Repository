// Import React
import React, { useEffect, useState } from 'react'
// Import axios (to make HTTP requests)
import axios from 'axios'
// Import object(s) from 'components' folder
import ProductForm from '../components/ProductForm'
import ListProducts from '../components/ListProducts'

// Object
const Main = () => {
    const [products, setProducts] = useState(); // allows adding state to functional components
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => { // tells React your component needs to do something after render
        // Here, we use axios to make an HTTP request to get the following URL
        axios.get("http://localhost:8000/api/products")
        // Then, display the product with the details listed below in the return function
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log('Main Error', err)) // else catch error and print
    }, []);
    
    // 'Add New' Function
    const onAdd = (form) => {
        const { title, price, description } = form
        // POST request to Add New Product
        axios.post(`http://localhost:8000/api/products/new`, { title, price, description })
            .then(res => {
                setProducts([...products, res.data])
            })
            .catch(err => console.log(err))
    }
    // 'Delete' Function
    const onDelete = (id) => {
        setProducts([...products].filter(item => item._id !== id ))
    }
    return (
        <div className="products">
            <h1>Products:</h1>

            {/* ProductForm.jsx */}
            <ProductForm onSubmit={ onAdd }/>

            <hr/> {/* horizontal rule - thematic break */}
            {loaded && <ListProducts onDelete={ onDelete } products={ products }/>}
        </div>
    )
}

export default Main