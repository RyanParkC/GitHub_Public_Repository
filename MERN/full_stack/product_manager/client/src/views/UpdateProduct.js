// Import React
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// Import axios
import axios from 'axios'
// Import object(s) from 'components' folder
import ProductForm from '../components/ProductForm'

// Object
const UpdateProduct = () => {
    const { id } = useParams()  // returns an object of key/value pairs of URL parameters
    const [product, setProduct] = useState({    // allows adding state to functional components
        title: '',
        price: '',
        description: ''
    })
    const [loaded, setLoaded] = useState(false)

    // tells React your component needs to do something after render
    useEffect(() => {
        // 'View' product by id 
        axios.get(`http://localhost:8000/api/products/${ id }`)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id])
    // 'Update' by id Function
    const onUpdate = (form) => {
        const { title, price, description } = form
        axios.put(`http://localhost:8000/api/products/update/${ id }`, { title, price, description })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update Product</h1>
            <hr/> {/* horizontal rule - thematic break */}
            {loaded && <ProductForm onSubmit={ onUpdate } initialData={ product } />}
        </div>
    )
}

export default UpdateProduct