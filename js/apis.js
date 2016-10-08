// Queries a link and returns the JSON response.
function queryAPI (link) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", link, false );
    xmlHttp.send( null );
    var jsonResponse = JSON.parse(xmlHttp.responseText);
    return jsonResponse;
}

//
// API Request URL Generation Functions
//

function generateAPIUrl(apiName, language, query) {
    var url;
    switch (apiName) {
        case "stack-overflow":
            url = generateStackOverflowLink(language, query);
            break;
    }
    return url;
}

function generateStackOverflowLink (language, query) {
    return "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=" + language + "&intitle=" + query + "&site=stackoverflow";
}

//
// API Request Processing Functions
//

function processResponse(apiName, response) {
    var content;
    switch (apiName) {
        case "stack-overflow":
            content = processStackOverFlowResponse(response);
            break;
    }
}

function processStackOverFlowResponse(response) {
    var articleList = [];
    for (i = 0; i < 10; i++) {
        var item = response.items[i];
        articleList.push({
            link: item.link,
            title: item.title
        });
    }
    return articleList;
}
