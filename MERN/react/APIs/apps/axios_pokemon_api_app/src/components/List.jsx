import PokémonName from './Name';

const PokémonList = ({ monsters }) => {
    return (
        <div>
            <ol>
                <PokémonName monsters={ monsters }/>
            </ol>
        </div>
    )
}

export default PokémonList;