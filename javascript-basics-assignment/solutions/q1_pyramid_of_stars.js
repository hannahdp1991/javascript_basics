/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (height) => {
    var object;
    var space = '';
    
    if (height > 0) {
        for (var i = 1; i <= height; i++) {


            for (var j = 1; j <= height - i; j++) {
                space = space + " ";
            }
            for(k=1;k<= i;k++)
            {
                space = space+"* ";
            }
            
            space = space + " \n"
        }
        object = space;
    }
    else {
        object = '';
    }
    return object;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
