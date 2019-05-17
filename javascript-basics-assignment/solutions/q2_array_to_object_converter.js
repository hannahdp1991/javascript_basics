/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (object, property) => {
	if (Array.isArray(object)) {
		const list = object.reduce((obj, item) => (
			{
				...obj, [item[property]]: item

			}
		)
			, {}
		)

		return list;
	}
	else{
		return null;
	}
	};

	/* For example,
	INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
	OUTPUT - {
				'1': {id: 1, value: 'abc'},
				'2': {id: 2, value: 'xyz'}
			 }
	
	
	*/

	module.exports = convert;
