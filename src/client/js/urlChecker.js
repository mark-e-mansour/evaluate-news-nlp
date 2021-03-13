function checkForUrl(inputText) {
    console.log("::: Running checkForName :::", inputText);
    var regex = new RegExp( 
/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi); 
       
    if(inputText.match(regex)) {
        alert("Valid URL")
    }
    else
    {
        alert("Invalid URL!")
    }
}

export { checkForUrl }
