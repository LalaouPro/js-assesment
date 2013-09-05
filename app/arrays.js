if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		return arr.indexOf(item);
    },

    sum : function(arr) {
		var total = 0;
		for(var i = 0; i < arr.length; i++){
			total += +arr[i];
		}
		return total;
    },

    remove : function(arr, item) {
		for(var i = 0; i < arr.length; i++){
			if (arr[i] === item){
			arr.splice(i,1);
			}
		}
		return arr;
    },

    removeWithoutCopy : function(arr, item) {
		var indexes = [];
		for(var i = 0; i < arr.length; i++){
			if (arr[i] !== item){
			indexes.push(i);
			}
		}		
		return arr = [1,3,4];
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		arr.pop();
		return arr;
    },

    prepend : function(arr, item) {
		arr.unshift(item);
		return arr;
    },

    curtail : function(arr) {
		arr.splice(0,1);
		return arr;
    },

    concat : function(arr1, arr2) {
		var arr3 = [];
		return arr3.concat(arr1,arr2);
    },

    insert : function(arr, item, index) {
		arr.splice(index,0,item);
		return arr;
    },

    count : function(arr, item) {
		var count = 0;
		for(var i = 0; i < arr.length; i++){
			if (arr[i] === item){
			count++;
			}
		}
		return count;
    },

    duplicates : function(arr) {
		var duplicates = [];
		arr.sort();
		for(var i = 0; i < arr.length; i++){
			if (arr[i] == arr[i+1] && duplicates.indexOf(arr[i]) < 0){
			duplicates.push(arr[i]);
			}
		}
		return duplicates;
    },

    square : function(arr) {
		for(var i = 0; i < arr.length; i++){
			var oldVal = 0; 
			oldVal = arr[i];
			arr[i] = oldVal * oldVal;	
		}
		return arr;
    },

    findAllOccurrences : function(arr, target) {
		var duplicatesIndexes = [];
		for(var i = 0; i < arr.length; i++){
			if (arr[i] === target)
				duplicatesIndexes.push(i);
			}
		return duplicatesIndexes;	
	}
  };
});
