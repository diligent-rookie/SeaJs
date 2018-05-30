/*
* @Author: liuwenjing
* @Date:   2018-05-26 16:39:50
* @Last Modified by:   liuwenjing
* @Last Modified time: 2018-05-26 17:14:17
*/
define(function(require,exports,module){
	var add=function(v1,v2){
		return v1+v2;
	}
	$=require('../sea-modules/jquery/jquery/1.10.1/jquery.js');
	var add2=function(v1,v2){
		var v1=$("input")[0].value;
		var v2=$("input")[1].value;
		return parseInt(v1)+parseInt(v2);
	}
	exports.add=add;
	exports.add2=add2;
})