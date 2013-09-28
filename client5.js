$(document).ready(function(){

	if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
	}

	var savedEntries = [];



	var addtoObject =function(author, quote, rating){
	//Create pure function - push entries to either a new object 
	//or to an array. 
	//How do you create an object of an object????
		var newestEntry = {};
		newestEntry.author=author;
		newestEntry.quote= quote;
		newestEntry.rating= rating;
		return newestEntry;
		// convertString(author, quote, rating);	
	};

	addtoObject("bob", "really good quote",2);

	var manualAdd = addtoObject("Quote1", "test", 3);
	savedEntries.push(manualAdd);
	console.log(savedEntries);



		
	$('#addQuote').on('click', function() 	{
		var author = $("#author").val();
	 	var quote = $("#quote").val();
		var rating = $("#rating").val();
		rating = Number(rating);
		
		var returnEntry = addtoObject(author, quote, rating);
		console.log(addtoObject);
		console.log(returnEntry.author);
		console.log(rating);
		savedEntries.push(returnEntry);
		console.log(savedEntries);

		// var newAuthorString = author.toString();
		// console.log (newAuthorString);
		$(".quoteContainer").prepend ($('<div class="quoteDisplay"> Author: ' + author + 'Quote: ' + quote + 'Rating: ' + rating + '</div>'));

		});

	// 	var convertString = function(){
	// 		$(".quoteDisplay").prepend($'<div class="entryDiv"></div>');
	// 		$(".entryDiv").prepend($'<div class="authorDiv"></div>');
	// 		$(".authorDiv").prepend("Author: " + author );
	// 		$(".entryDiv").prepend($'<div class="quoteDiv"></div>');
	// 		$(".quoteDiv").prepend("Quote: " + quote);
	// 		$(".entryDiv").prepend($'<div class="ratingDiv"></div>');
	// 		$(".ratingDiv").prepend("Rating: " + rating);

	// 	convertString(author, quote, rating);
	// 	}
	 //});



		// var convertString = function(author, quote, rating){ 
	// 		var stringEntry = addtoObject(author, quote, rating);
	// 		var authorString = stringEntry.author.toString();
	// 		var quoteString = stringEntry.quote.toString();
	// 		var ratingString = stringEntry.rating.toString();
	// 		return authorString, quoteString, ratingString;
	// }

	// $('#displayQuote').on('click', function() 	{
	// // Use jQuery to create a new DOM element.
	// 	var x = savedEntries.toString();
	// 	console.log(savedEntries.toString());
	// 	console.log(savedEntries instanceof Array);
	// 	var quoteList = $("<p> {0} </p>".supplant([x]));
	// 	console.log(quoteList);

	// // Add the DOM element to the page.
	// 	$(".quoteDisplay").append(quoteList);
	// });

});