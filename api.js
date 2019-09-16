



$("button").on("click", function){
    var searchResults = $(this).attr();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchResults + "&api-key=AsCjICidiC2xLqba1u4dJHO9geZ9G6vp";

    $.ajax({
        url: queryURL,
        method: "GET"
      }) .then(function(response) {})
    }