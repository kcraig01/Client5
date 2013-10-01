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

	// addtoObject("bob", "really good quote",2);

	// var manualAdd = addtoObject("Quote1", "test", 3);
	// savedEntries.push(manualAdd);
	// console.log(savedEntries);



		
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


			$(".quoteContainer").prepend ($('<div class="quoteDisplay"> <div class="quoteText"> <div class="quoteAuthor"> Author:  '+ author + '</div> <div class="quoteQuote"> Quote:  ' + quote + '</div> <div class="quoteRating"> Rating:  ' + rating + '</div> <div> </div>'));


		 		var dropDown = document.getElementById("authorList");{	

			 			var newAuthor= author;
			 			var newDropDown = document.createElement("option");
			 				newDropDown.textContent = newAuthor;
			 				newDropDown.value = newAuthor;
			 				dropDown.appendChild(newDropDown);
			 			
			 		}

	});

	$("select").change(function(){
		var selectFilter = document.getElementById("authorList");
		var strSelectedAuthor = selectFilter.options[selectFilter.selectedIndex].text;
		console.log(strSelectedAuthor);

		var selectedAuthorArray = [];
		var selectedAuthorArray = savedEntries.filter (function(j) {
				return strSelectedAuthor === j.author

			});
				console.log(selectedAuthorArray);
				if (selectedAuthorArray.length !==0) {
					$(".quoteText").css("display", "none");
					//var filteredQuotes = $('<div class="newFilterList"> {0} </div>'.supplant([selectedAuthorArray]));
					//$(".quoteDisplay").append(filteredQuotes);
					for (i=0; i<selectedAuthorArray.length; i++) {
					$(".quoteContainer").prepend ($('<div class="quoteDisplay"> <div class="filteredQuotes"> <div class="quoteAuthor"> Author: ' + selectedAuthorArray[i]['author'] + '</div> <div class="quoteQuote"> Quote:  ' + selectedAuthorArray[i]['quote'] + '</div> <div class="quoteRating"> Rating:  ' + selectedAuthorArray[i]['rating'] + '</div> <div> </div>'));
					};
				}
		
	});

			
});