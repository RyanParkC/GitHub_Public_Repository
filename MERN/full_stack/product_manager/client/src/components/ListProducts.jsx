// Import Link
import { Link } from 'react-router-dom'
// Import object(s)
import DeleteButton from './DeleteButton'

// Object
const ListProducts = ({ products, onDelete }) => {
    
    return (
        <>
            { products ? products.map((product, i) =>
                <ul className="list-unstyled mt-5" key={i}>
                    <li>{ product.title }</li>
                    <li>${ product.price }</li>
                    <li>{ product.description }</li>
                    <li>
                        <div className="row">
                            <Link className="btn btn-link col me-3" to={`/products/view/${ product._id }`}>View Product</Link>
                            <DeleteButton productID={ product._id } successCallback={ () => onDelete(product._id) } classProp="btn btn-danger"/>
                        </div>
                    </li>
                    <hr></hr>
                </ul>)
                : null}
        </>
    )
}

export default ListProducts