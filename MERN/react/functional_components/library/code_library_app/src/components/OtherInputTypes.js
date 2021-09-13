import React, { useState } from 'react';


const Fruits = [
    'banana',
    'pineapple',
    'peach',
    'apple'
];

export default function FruitForm() {
    const [selectedFruit, setSelectedFruit] = useState(Fruits[0]);
    const [isTasty, setIsTasty] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('The ' + selectedFruit + ' is' + (isTasty ? '' : ' not') + ' tasty!');
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Scroll options box --------------------------------------------------------------------------------------- */}
            <select className="mx-2" value={selectedFruit} onChange={e => setSelectedFruit(e.target.value)}>
                {Fruits.map( (fruit, idx) => 
                    <option key={idx} value={fruit}>{fruit}</option>
                )}
            </select>
            {/* Checkbox for "Is it tasty?" ------------------------------------------------------------------------------ */}
            <label>
                <input className="mx-1" type="checkbox" checked={isTasty} onChange={e => setIsTasty(e.target.checked)}/> Is it tasty?
            </label>
            {/* Button to submit it to console --------------------------------------------------------------------------- */}
            <button className="mx-2">Take a bite!</button>
            {/* Displayed on webpage ------------------------------------------------------------------------------------- */}
            <div>
                <h5 className="my-3" style={{ color:'orange'}}>The [{ selectedFruit }] is { isTasty ? '' : 'not'} tasty!</h5>
            </div>
        </form>
    );
}
