function resultsToLi(result)  {
    return "<li><a href=\"" + result.link + "\">" + result.title + "</a></li>";
}

// Returns the url variables
// From http://papermashup.com/read-url-get-variables-withjavascript/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

$.getScript('js/apis.js', function(){ 
    
    
    function importQuery(results, divID)   {
       var listElements = results.map( resultsToLi );
       var joinElements = listElements.join("");
       var htmlElements = "<ul>" + joinElements + "</ul>";
       $("#" + divID).append( htmlElements );
    }

    var urlValues = getUrlVars();
    var language = urlValues["language"];
    var query = urlValues["query"];

    var apis = [
          "stack-overflow"
        , "github-repositories"
        , "github-issues"
    ];

    console.log(apis);
    console.log(apis.length);

    for (j = 0; j < apis.length; j++) {
        var api = apis[j];
        var id = "listBox" + (j + 1);
        var queryResults = queryAPI(api, language, query);
        importQuery(queryResults, id);
    }
});
