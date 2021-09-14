import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useHistory }  from 'react-router-dom'


const People = (props) => {
    const [homeWorld, setHomeWorld] = useState({})
    const [result, setResult] = useState([])
    const { id } = useParams()
    const history = useHistory()
    
    useEffect( () => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                setResult( res.data )
                axios.get( res.data.homeworld ).then(response => {
                    setHomeWorld( response.data )
                }).catch(e => console.log(e))
            }).catch(e => console.log(e))
    }, [id])
        const clickHandler = (e) => {
            e.preventDefault()
            console.log(homeWorld.length);
            let pid = homeWorld.url.slice(30);
            history.push(`/planets/${pid}`)
            history.goForward()
        }

    return (
        <div style={{ color:'purple' }}>
            <h1 className="mt-5 mb-3 mx-2">Person:</h1>
            <div className="details ms-5">
                <h2>{ result.name }</h2>
                <h5>Height: { result.height }</h5>
                <h5>Mass: { result.mass }</h5>
                <h5>Hair Color: { result.hair_color }</h5>
                <h5>Skin Color: { result.skin_color }</h5>
                <div className="my-2">
                    {homeWorld.name ? 
                    <button href="" onClick={ clickHandler }>
                    <h5 style={{ color:'blue'}}>HomeWorld: { homeWorld.name }</h5></button> 
                    : null}
                </div>
            </div>
        </div>
    )
}

export default People