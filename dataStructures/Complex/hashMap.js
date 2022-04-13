// Hash maps are a common data structure used to store key-value pairs for efficient retrieval. 
// A value stored in a hash map is retrieved using the key under which it was stored.

// Hash map data structures use a hash function, which turns a key into an index within an underlying array.
// The hash function can be used to access an index when inserting a value or retrieving a value from a hash map.

// Hash maps are built on top of an underlying array data structure using an indexing system. Each index in the array can store one key-value pair.
// If the hash map is implemented using chaining for collision resolution, each index can store another data structure such as a linked list, which stores all values for multiple keys that hash to the same index.

// Each Hash Map key can be paired with only one value. However, different keys can be paired with the same value.

// `states` is a Hash Map with state abbreviation keys and state name values.

const states = {
    'TN': 'Tennessee',
    'CA': 'California',
    'NY': 'New York',
    'FL': 'Florida'
}

const westCoastState = states['CA']

// This is a valid Hash Map where 2 keys share the same value

const correctHashMap = {
    'a': 1,
    'b': 3,
    'c': 1
}

// This Hash Map is INVALID since a key cannot have more than 1 value

const incorrectHashMap = {
    'a': 1,
    'a': 3,
    'b': 2
}