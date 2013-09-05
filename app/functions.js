if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
		return fn.apply(null,arr);
    },

    speak : function(fn, obj) {
		return fn.call(obj);
    },

    functionFunction : function(str) {
		return function(arg) {
        return str + ', ' + arg;
      };
    },

    makeClosures : function(arr, fn) {
		var answer = [];
		var myFunc = function(arg){
			return function(){
				return fn(arg);
			}
		}
		for (var  i= 0; i < arr.length; i++ ){
			answer.push(myFunc(arr[i]));
		}
		return answer;
    },

    partial : function(fn, str1, str2) {
      return function(str3) {
        return fn.call(null, str1, str2, str3);
      };
    },

    useArguments : function() {
		var sum = 0;
		for (var i = 0, len = arguments.length; i < len; i++) {
			sum += arguments[i];
		}
		return sum;
    },

    callIt : function(fn) {	
		var args = [];
		args = Array.prototype.slice.call(arguments);
		args.splice(0,1);
		return fn.apply(null,args)
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function() {
        var moreArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, moreArgs);
      };
		
    },

    curryIt : function(fn) {

    }
  };
});
