import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const Form = ({ onSubmit }) => {
    const [input, setInput] = useState({
        search: 'people',
        id: 0,
    })
    const history = useHistory()
    console.log(history);
    const handleSubmit = (e) => {
        const data = { ...input }
        e.preventDefault()
        data.search === 'people' ? history.push(`/people/${ input.id }`) : history.push(`/planets/${input.id}`)
        history.goForward()
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="search" className="mx-2">Search For: </label>
            <select type="text" name="search" id="search" value={ input.search } onChange={ (e) => setInput({ ...input, search: e.target.value }) }>
                <option value="people">people</option>
                <option value="planets">planets</option>
            </select>
            <label htmlFor="id" className="ms-4 me-2">ID #: </label>
            <input type="number" name="id" id="id" onChange={ (e) => setInput({ ...input, id: e.target.value }) } />
            <input type="submit" value="Search" />
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func,
}
export default Form