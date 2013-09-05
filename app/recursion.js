if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
		var listOfFiles = [];
		var searchForDir = dirName;
		var saveNames = false;
		findFiles(data, searchForDir);
		return listOfFiles;
		
		function findFiles(data, wantedDir){
		var currentDir = data.dir;
		var currentFile = data.files;
		var flag = typeof wantedDir !== 'undefined' && wantedDir === currentDir;
		saveNames = flag || saveNames;
		for (var i = 0, len = currentFile.length; i < len ; i++){
			if (typeof currentFile[i] === 'string'){
					if (typeof wantedDir === 'undefined'){
						listOfFiles.push(currentFile[i]);
					}else if(saveNames){
						listOfFiles.push(currentFile[i]);
					}						
			}else if (typeof currentFile[i] === 'object'){					
					findFiles(currentFile[i],searchForDir);					
				}
		}
	}
    },

    permute: function(arr) {
		var permArr = [],
			usedChars = [];
		var i, ch;
		for (i = 0; i < arr.length; i++) {
		ch = arr.splice(i, 1)[0];
        usedChars.push(ch);
        if (arr.length == 0) {
            permArr.push(usedChars.slice());
        }
        permute(arr);
        arr.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr;
    }
  };
});
