'use strict';

var REG = /:::FEATHER:::(?:[\s\S]+?):::([\s\S]+?):::END:::/g;

function extendUriAfter(content, file){
	return content.replace(REG, '$1');
}

module.exports = function(content, file, conf){
	if(file.isHtmlLike || file.isJsLike){
		content = extendUriAfter(content, file);
	}

	return content;
};