/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MAIN //

/**
* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array/collection
* @param {integer} strideX - `x` stride length
* @param {Collection} y - destination array/collection
* @param {integer} strideY - `y` stride length
* @param {Function} fcn - unary function to apply to callback return values
* @param {Callback} clbk - callback
* @param {*} [thisArg] - callback execution context
* @returns {Collection} `y`
*
* @example
* var abs = require( '@stdlib/math-base-special-abs' );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy( x.length, x, 1, y, 1, abs, accessor );
*
* console.log( y );
* // => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
function mapBy( N, x, strideX, y, strideY, fcn, clbk, thisArg ) {
	var ix;
	var iy;
	var v;
	var i;
	if ( N <= 0 ) {
		return y;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	for ( i = 0; i < N; i++ ) {
		v = clbk.call( thisArg, x[ ix ], i, [ ix, iy ], [ x, y ] );
		if ( v !== void 0 ) {
			y[ iy ] = fcn( v );
		}
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = mapBy;
