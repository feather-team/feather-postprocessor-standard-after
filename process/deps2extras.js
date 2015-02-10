'use strict';

module.exports = function(content, file, conf){
	if(file.isJsLike && !file.isMod){
		file.extras.deps = file.requires;
		file.requires = [];
	}

	return content;
};