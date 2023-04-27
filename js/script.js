
function loading() {
    document.getElementById("loading").style.visibility = "visible";
    document.getElementById("loading").style.display = "flex";
}
function hideloading() {
    document.getElementById("loading").style.visibility = "hidden";
    document.getElementById("loading").style.display = "none";
}
const dictinory = async (word) => {
    const url =
        "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright";
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/octet-stream",
            "X-RapidAPI-Key": "63fb8f781amsh1da3051971b755dp13cf16jsn1cd50925e4c2",
            "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
        },
    };
    fetch(
        "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=" + word,
        options
    ).then((response) => response.json()).then((response) => {
        hideloading();
        console.log(response);
        if (response.valid == true) {
            wordheading.innerHTML = "Meaning of: " + response.word;
            definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
            document.getElementById("definition").style.color = "";
        }
        else if (searchinput.value == "") {
            wordheading.innerHTML = "Word can't be empty";
            definition.innerHTML = "";
        }
        else {
            wordheading.innerHTML = response.word;
            definition.innerHTML = "Word not found";
            document.getElementById("definition").style.color = "red";
        }
        console.log(response.valid);
    }).catch(err => console.error(err));
};


document.getElementById("searchbtn").addEventListener("click", (e) => {
    e.preventDefault();
    dictinory(searchinput.value);
})
