const pyramid = require("./solutions/q1_pyramid_of_stars");
console.log(pyramid(6));
const convert = require("./solutions/q2_array_to_object_converter");
const arrayObject = convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id');
console.log(arrayObject);
const flatten = require("./solutions/q3_flatten_n_dimensional_array");
const flattenObject = flatten([1, [2, 3], [[4], [5]]]);
console.log(flattenObject);
const list = require("./solutions/q4_data_modelling_and_retrieval");
const FruitList = list();
console.log(FruitList['Grapes']);
const displayresult = require("./solutions/q5_students_result_card");
displayresult();