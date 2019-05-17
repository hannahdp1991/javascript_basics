// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast

var fruits = [
    {name: 'Grapes', color: 'purple', pricePerKg:20}, {name: 'Apple', color: 'red', pricePerKg:20},
    {name: 'Banana', color: 'yello', pricePerKg:20}
]

const getFruits = () =>
{
const convert = require("./q2_array_to_object_converter");
const fruitObject = convert(fruits,'name');
return fruitObject;
}

module.exports = getFruits;