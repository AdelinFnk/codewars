// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//PREP - Parameters, Returns, Examples, Pseudo Code

//url, if that has any data after # we need to remove that inclusiv the anchor
//P: URL as a string
//R: console to print the result
//E:

function removeUrlAnchor(url){
    //regexp and a string method
    const finalUrl = url.replace(/#.*/gi, '')
    console.log(finalUrl)
    
}

removeUrlAnchor('www.google.com#homepage')//'www.google.com'
removeUrlAnchor('www.google.com?page=1#homepage')//'www.google.com?page=1'