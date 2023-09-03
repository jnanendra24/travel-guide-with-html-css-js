function search_place() {
    let input = document.getElementById('search-item').value;
    input = input.toLowerCase();
    let flag = 0;
    let x = document.getElementsByClassName('places');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}
function closeme() {
    document.getElementById("search-list").style.display = "none";
    document.getElementById("close").style.display = "none";
}
var UL = document.getElementById("search-list");
var x = document.getElementById("close");
UL.style.display = "none";
var searchBox = document.getElementById("search-item");
var li = document.getElementsByClassName("places")
searchBox.addEventListener("focus", function () {
    UL.style.display = "block";
    x.style.display = "inline-block";
});
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}