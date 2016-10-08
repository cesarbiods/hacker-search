function resultsToLi(result)  {
    return "<li><a href=\"" + result.link + "\">" + result.title + "</a></li>";
}

$.getScript('js/apis.js', function(){ 
    
    
    function importQuery(results, divID)   {
       var listElements = results.map( resultsToLi );
       var joinElements = listElements.join("");
       var htmlElements = "<ul>" + joinElements + "</ul>";
       $("#" + divID).append( htmlElements );
    }

    var id = "listBox1";
    var queryResults = queryAPI("stack-overflow", "java", "JUnit");
    importQuery(queryResults, id);

    console.log("HELLO");
    console.log(queryResults);
});
