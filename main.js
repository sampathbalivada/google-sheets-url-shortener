// Needs document key: document_key and sheet number: sheet_number 

function redirect() {
    //get hash from URL
    var hash = window.location.hash.slice(1)
    console.log(hash)

    //proceed if hash is not empty, else stay on the loading page
    if (hash != "") {
        //generate Google Visualization API URL
        url = generateUrl(hash)
        //get the URL to redirect
        var destinationUrl = getDestinationUrl(url);
        //perform redirect
        if (destinationUrl != undefined) {
            window.location.href = destinationUrl;
        } else {
            displayError();
        }
    }
}

//generates Google Visualization API URL
function generateUrl(hash) {
    var start = "https://docs.google.com/spreadsheets/d/" + document_key + "/gviz/tq?tqx=out:json&tq=SELECT%20B%20WHERE%20A%20%3D%20%27";
    var end = "%27&gid=0";
    var url = start + hash + end;
    return url
}

//perform http GET on URL
function httpGetAsync(theUrl, callback) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", theUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

//get destination URL from the sheet
function getDestinationUrl(url) {
    try {
        var response = httpGetAsync(url);
        var response_clean = response.replace("/*O_o*/\ngoogle.visualization.Query.setResponse(", "")
            .replace(");", "");
        var json_object = JSON.parse(response_clean);
        console.log(json_object);
        var destinationUrl = json_object['table']['rows']['0']['c']['0']['v'];
    } catch (error) {
        displayError();
    }
    return destinationUrl;
}

// hide the loading page and display error message
// loading div id: loading
// error   div id: error
function displayError() {
    document.getElementById('loading').style.display = "none";
    document.getElementById('error').style.display = "block";
}

window.onload = redirect()