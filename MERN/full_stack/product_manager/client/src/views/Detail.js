// Import React (JS library to create UIs)
import React, { useState, useEffect } from 'react'
import { 
    useParams, // returns an object of key/value pairs of URL parameters
    Link, // renders anchor tags to navigate application
    useHistory  // helps access the history object to navigate to other routes
} from 'react-router-dom';
// Import axios (to make HTTP requests)
import axios from 'axios';
// Import object(s) from 'components' folder
import DeleteButton from '../components/DeleteButton';

// Object
const Detail = () => {
    const [product, setProduct] = useState()    // allows adding state to functional components
    const { id } = useParams()  // returns an object of key/value pairs of URL parameters
    const history = useHistory(); // helps access the history object to navigate to other routes
    
    // tells React your component needs to do something after render
    useEffect(() => {
        // Here, we use axios to make an HTTP request to get the following URL
        axios.get("http://localhost:8000/api/products/" + id)
            // Then, display the product with the details listed below in the return function
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [id])
    
    return (
        <div>
            {
                product ?   // Condition ? (If true) : (If false)
                    // If true, then list the following details:
                    <div className="product">
                        <p>Title: { product.title }</p>
                        <p>Price: ${ product.price }</p>
                        <p>Description: { product.description }</p>
                        {/* Buttons -------------------------- */}
                        <div className="row">
                            <Link className="btn btn-link col me-3" to={`/`}>Home</Link>
                            <Link className="btn btn-link col ms-3" to={`/products/update/${ product._id }`}>Update</Link>
                            <DeleteButton productID={ product._id } successCallback={ () => history.push('/') } classProp="btn btn-link col"/>
                        </div>
                    </div> 
                : null   // If false, then null
            }
        </div>
    )
}

export default Detail;