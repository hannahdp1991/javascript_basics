/* Write a Program to Flatten a given n-dimensional array */

const flatten = (object) => {
	if (Array.isArray(object)) {
		var results =
			object.reduce(function flatt(flat, toflatten) {
				if (toflatten == null) {
					return flat;
				}
				if (Array.isArray(toflatten)) {
					return toflatten.reduce(flatt, flat);
				}
				if (typeof toflatten === 'object') {
					return Object.keys(toflatten).map(k => toflatten[k]).reduce(flatt, flat);
				}
				return flat.concat(toflatten)
			}, []);
		return results;
	}
	else {
		return null;
	}
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
