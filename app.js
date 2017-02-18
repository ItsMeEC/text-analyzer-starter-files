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

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function reportOnText(text) {

  var tokens = tokenizeText(text);
  var numDistinctWords = countDistinctWords(tokens);
  var numTotalWords = tokens.length;
  var averageWordLength = getAverageWordLength(tokens);

  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-unique-word').text(numDistinctWords);
  textReport.find('.js-avg-word-length').text(
  averageWordLength + " characters");
  textReport.removeClass('hidden');
}