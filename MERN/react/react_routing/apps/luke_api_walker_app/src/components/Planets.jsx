import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planets = (props) => {
    const [result, setResult] = useState([])
    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        console.log('this is the request');
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                setResult(res.data)
                console.log(res.data);
            }).catch(e => console.log(e))

    }, [id])
    return (
        <div style={{ color:'blue' }}>
            <h1 className="mt-5 mb-3 mx-2">Planet:</h1>
            <div className="details ms-5">
                <h2 className="my-3">{result.name}</h2>
                <h5>Climate: {result.climate}</h5>
                <h5>Terrain: {result.terrain}</h5>
                <h5>Surface Water: {result.surface_water}</h5>
                <h5>Population: {result.population}</h5>
            </div>
        </div>
    )
}

export default Planets