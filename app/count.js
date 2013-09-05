if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
		var startNum = start;
		var timerId = 0;
		logConsole();
		
		function logConsole(){
			console.log(startNum);
			startNum++
			if (startNum <= end){
				timerId = window.setTimeout(logConsole,100);
			}
		}
	return {cancel: function(){
				clearTimeout(timerId);
			}}	
	}
  };
  
});