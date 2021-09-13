const PokémonName = ({ monsters }) => {
    return (
        monsters.map(( monster, idx ) => <li key={ idx }>{ monster.name }</li>)
    )
}

export default PokémonName;