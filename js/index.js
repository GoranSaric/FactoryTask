$(document).ready(function() {
	$.ajax({
		url: "https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=9a258991a9d744d3832a0eb78f712ff2",
		method: "GET",
		dataType: "json",
		success: function(data) {
			processData(data);
		}

	})


	function processData(data) {
		var articleItems = [];
		for (var i = 0; i <= 4; i++) {

			var content = data.articles[i].content;
			var author = data.articles[i].author;
			var title = data.articles[i].title;
			var imgUrl = data.articles[i].urlToImage;
			var newsUrl = data.articles[i].url;

			var $content = '<p>' + content + '</p>';
			var $author = '<h5>' + author + '</h5>';
			var $title  = '<h2>' + title + '</h2>';
			var $imgUrl = '<div id="div-news-img">' + '<img src=' + imgUrl + '>' + '</div>';
			var $newsUrl = '<a href= ' + newsUrl + '> Pročitaj članak' + '</a>';

 			$("#slide-container").append("<div id=div-news>" + $imgUrl + "<div id=div-news-info>" + $title + $author + $content + $newsUrl + "</div>" + "</div>");
 		}
 	}
 });