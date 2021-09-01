/* Rest/Spread Notes */

/* ES6 provides us with a new operator " ... " that is context dependent
    Its purpose is to capture the 'rest' of a data set
    OR to 'spread' content of an existing structure */

// Destructuring - using rest and spread
    const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
    // For the first couple of animals
        const [firstAnimal, secondAnimal] = animals;
            // => ['horse', 'dog']
    // For the REST of the animals
        const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
        otherAnimals
            // => ['fish', 'cat', 'bird']

// Objects - using rest and spread
    const person = {
        firstName: 'Bob',
        lastName: 'Marley',
        email: 'bob@marley.com',
        password: 'sekureP@ssw0rd9',
        username: 'barley',
        addresses: [
            {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
            },
            {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
            }
        ],
        createdAt: 1543945177623
        };
    // Grabbing firstName and lastName from person is simple, along with assigning all other properties to a 'catchall'
        const { firstName, lastName, ...attributes } = person;
    // Using spread, we can quickly make complete copies of objects or arrays
        const personCopy = { ...person };
    /* However, there are some limitations. The copy is SHALLOW, so any complex or nested structures with objects references 
    will still point to the SAME object. We'll use our person objects to demonstrate. */
        const personCopy = { ...person };
        personCopy === person
        // => false
        personCopy.addresses === person.addresses
        // => true
    // So it is NOT a PERFECT, EXACT copy, but it still contains most of the values
