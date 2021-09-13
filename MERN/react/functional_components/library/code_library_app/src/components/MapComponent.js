import React from 'react';

// Map in React
    // Map = calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results.
    //       callbackFn is invoked only for indexes of the arary which have assigned values (including undefined).
const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return ( 
        <div>
            <h4 style={{ color:'blue' }}>
                Grocery list:
            </h4>
            <ul>
                { groceryList.map( (item, i) =>         // Here, we use 'map' to transform the array of groceries into an array of <li>
                    <li key={ i }>{ item }</li> ) }     
            </ul>   
        </div>                                          // Here, we use its (the map's) index 'i' as the key to silence a React warning
    );                                                  // map callback signature looks like:
}                                                       //      function( currentVal, currentIndex, thisArray ) { // transform the val here }

const Mapnumbers = (props) => {
    const numsArray = [1, 2, 3, 4, 5];
    function double(num) {
        return num * 2;
    }
    let newArray = numsArray.map( double );
    console.log( newArray );
    return (
        <div>
            <h4>
                Map Numbers:
            </h4>
            <div>
                { newArray + ' ' }
            </div>
        </div>
    )
}

export default Groceries;
export { Mapnumbers }


// JavaScript example
    // const nums = [1, 2, 3, 4, 5];

    // const newNums = [];

    // for(let i = 0; i < nums.length; i++) {
    //     newNums.push( nums[i] * 2 );
    // }

    // console.log( newNums ); // logs [2, 4, 6, 8, 10]

// Using Map method
    // const nums = [1, 2, 3, 4, 5];

    // function double(num) {                  // function double(num)
    //     return num * 2;                     // always return double (2x) the supplied argument, given argument is a number
    // }

    // const newNums = nums.map( double );     // new constant newNums assigned to map method on nums with an argument of ( double )

    // console.log( newNums ); // logs [2, 4, 6, 8, 10]
