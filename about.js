function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("like-button").addEventListener("click", function () {
    var likeCountElem = document.getElementById("like-count");
    var currentCount = parseInt(likeCountElem.textContent);
    likeCountElem.textContent = (currentCount + 1) + " likes";
});

// Open the first tab by default
// document.getElementsByClassName("tab-button")[0].click();
