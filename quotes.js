var arrayOfQuotes = [
{
	"author":"Abhishek Byanjankar",
	"quote":"Its not over, till its over."
},
{
	"author":"Billie Eilish",
	"quote":"I hate smiling. It makes me feel weak and powerless and small. I've always been like that; I don't smile in any pictures."
},
{
	"author":"Sujan Panta",
	"quote":"If your dreams let you sleep at night then sorry mate you need to look out for better dream."
},







]

function randomSelector(arrayLength){
return Math.floor(Math.random()*arrayLength);
}

function generateQuote(){	
	var randomNumber = randomSelector(arrayOfQuotes.length);
	document.getElementById("quoteOutput").innerHTML='"'+arrayOfQuotes[randomNumber].quote+'"';
	document.getElementById("authorOutput").innerHTML="-"+arrayOfQuotes[randomNumber].author;
}














