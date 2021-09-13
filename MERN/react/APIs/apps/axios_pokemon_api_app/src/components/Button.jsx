const Button = ({ onClick }) => {
    return (
        <button onClick={ onClick } className="my-3" style={{ color:'green' }}>Fetch Pokémon</button>
    )
}

export default Button;