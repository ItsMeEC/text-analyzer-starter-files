function getAverageWordLength(tokens) {
	var totalLength = tokens.join("").length;
	return (totalLength / toekn.length).toFixed(2);
}

function countDistinctWords(tokens) {
	var distinctWords = [];
	for (var i = 0; i < tokens.length; i++) {
		if (distinctWords.indexOf(tokens[i]) === -1) {
			distinctWords.push(tokens[i]);
		}
	}
	return distinctWords.length;
}

//couldnt figure this one out
function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}