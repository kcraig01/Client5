$(document).ready(function(){

var savedEntries = [];

var addtoObject =function(author, quote, rating){
//Create pure function - push entries to either a new object 
//or to an array. 
//How do you create an object of an object????
	var newestEntry = {};
	newestEntry.author=author;
	newestEntry.quote= quote;
	newestEntry.rating=rating;
	return newestEntry;
};

//addtoObject("bob", "really good quote",2);

	
$('#addQuote').on('click', function() 	{
	var author = $("#author").val();
 	var quote = $("#quote").val();
	var rating = $("#rating").val();
	
	var returnEntry = addtoObject(author, quote, rating);
	console.log(addtoObject);
	console.log(returnEntry.author);
	savedEntries.push(returnEntry);
	console.log(savedEntries);
});
	

});