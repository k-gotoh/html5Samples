/**
 * to-zero-padding.js
 * The Number value is changed to the numerical string value of zero padding.
 *
 * @version 1.1.1
 * @author think49
 * @url https://gist.github.com/891983
 * @license http://www.opensource.org/licenses/mit-license.php (The MIT License)
 */
 
'use strict';
var toZeroPadding = (function (Number, isNaN, Array) {
  'use strict';
 
  function toZeroPadding (number, limit) {
    number = Number(number);
 
    if (isNaN(number)) {
      return null;
    }
 
    return (Array(limit).join('0') + number).slice(-limit);
  }
 
  return toZeroPadding;
})(Number, isNaN, Array);