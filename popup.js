chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
	   var string = tabs[0].url;
	   var substring = ".co/";
	   var message = tabs[0].url;
	   if(string.includes(substring)) {
		   message = "The website can be fake. It contains .co";
		   document.getElementById("status").innerHTML = message;
	   }
		
	    a = FuzzySet(['https://www.economist', 'http://www.bbc.com/news', 'http://www.npr.org/', 'http://www.pbs.org/', 'https://www.wsj.com/', 'http://abcnews.go.com/', 'http://www.cbsnews.com/', 'http://www.nbcnews.com/', 'http://www.cnn.com/', 'https://www.usatoday.com/', 'https://news.google.com/news/?ned=us&hl=en',
		'http://www.theblaze.com/', 'https://www.nytimes.com/', 'https://www.washingtonpost.com/', 'http://www.msnbc.com/', 'https://www.theguardian.com/us', 'https://www.bloomberg.com/', 'http://www.newyorker.com/', 'http://www.politico.com/', 'htps://www.yahoo.com/news/', 'http://www.fox.com/', 'http://www.motherjones.com/', 'http://statenews.com/',
		'http://www.breitbart.com/', 'http://www.huffingtonpost.com/', 'https://thinkprogress.org/', 'http://www.aljazeera.com/', 'https://www.buzzfeed.com/?utm_term=.dsjgOZ8wQ#.kympJEAjv']);
		var result = a.get(message);
		
		if(result[0][0] >= 0.85) {
			document.getElementById("status").innerHTML = "The website is similar to " + result[0][1];
		}
		else {
			document.getElementById("status").innerHTML = message;
		}
		
		
   }
);
