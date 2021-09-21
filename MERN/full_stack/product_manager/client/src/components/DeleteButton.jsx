// Import axios (to make HTTP requests)
import axios from 'axios'

// Object
const DeleteButton = (props) => {
    const { productID , successCallback, classProp } = props;     
    
    // 'Delete' by id Function
    const onDelete = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/products/delete/${ productID }`)
            .then(res => successCallback())
            .catch(err => console.log(err))
    }
    return (
        <button className={ classProp } onClick={ onDelete }>Delete</button>
    )
}

export default DeleteButton