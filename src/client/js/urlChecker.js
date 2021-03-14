function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    var regex = new RegExp( 
/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi); 
       
    if(inputText.match(regex)) {
        return true
    }
    else
    {
        alert("Invalid URL! Please correct URL and try again")
        return false
    }
}

export { checkForUrl }
