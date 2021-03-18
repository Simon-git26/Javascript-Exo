/* https://api.jikan.moe/v3/search/anime?q= */


var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
    }
};
request.open("GET", "https://api.jikan.moe/v3/search/anime?q=bleach");
request.send();