if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
      if (flag) {
         return 'a'; 
      } else {
         return 'b'; 
      }
    },

    parseInt : function(num) {
	  var numToString = num + "";
      return parseInt(numToString);
    },

    identity : function(val1, val2) {
		if (val1 === val2){
			return true;
		}
		else{
			return false;
		}	
    }
  };
});