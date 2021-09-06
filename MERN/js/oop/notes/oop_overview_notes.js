// OOP Overview Notes

/* OOP (Object Oriented Programming):
    1. What is OOP?
        A style of programming characterized by the identification of CLASSES of OBJECTS that are
        closely linked with the METHODS (Functions) with which they are associated.
        This includes ideas of inheritance of attributes and methods.
    2. Why use it?
        Saves A LOT of time.
        Helps avoid repeating code. */

/* JavaScript uses a functional programming style
    This means Classes are NOT a core part of the JS language and JS is NOT inherently Object Oriented.
        But this does NOT mean we don't use OOP style of programming in all of our work.
    We pair JavaScript Objects and Functions to create Constructors that can mimic an OOP style. */

/* OOP is used to create models to represent what we have in the real world.
    e.g. in the real world, 'users' (real people) visit our website
    but in our program, we use an 'object' to represent the 'user'.
    Within the object, we may store any data we need to know about the user. 
    e.g. */
    const user1 = {                     // object created to represent 'user'
            name: "Kermit",             // data about user
            email: "kermit@sesame.org"  // data about user
        }

/* Nesting objects - an essential concept to master.
    We may store ANY DATA we like within an object, even another object.
    As we nest more and more objects, we may wonder how so much many can be stored in one object.
        Memory is allocated as follows:
            Nested object gets its OWN separate place in memory.
            Outer object then POINTS tto that memory address.
    e.g. Below code - user's 'friend' is occupying a location in memory apart from where user is stored.
        Though it looks like we're storing object 'friend' within user, we're really storing just the
        'address in memory' where object 'friend' is stored. */
    const user1 = {                         // Outer Object 'user'
            name: "Kermit",                 
            email: "kermit@sesame.org",     
            friend: {                       // Nested Object 'friend' - own separate place in memory so we address it here
                name: "Miss Piggy",         // We are storing the 'address in memory' where object 'friend' is stored
                email: "piggy@sesame.org"   
            }
        }

/* Instances -
    As we create more and more user objects, we may want a shortcut to create user 'instances'.
    Unlike Python, JS is NOT class-based, but does have 'object constructors'.
        Object constructors are used to construct objects. 
            They are functions that make new instances.
            Within the obejct constructor, we may layout a blueprint we want our objects to follow
            by setting attributes and methods each object should have. */
