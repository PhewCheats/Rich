let transitionActive = false;
var song = document.getElementById("song");
var current_page = "main";


//PAGE LOADING


function startHome() {
    if (transitionActive) return;
    transitionActive = true;

    const displayText = document.querySelector('.display-text');
    displayText.style.opacity = 0;

    setTimeout(() => {
        displayText.innerHTML = getRandomSentence();
        displayText.style.opacity = 1;
        transitionActive = false;
    }, 2000);
}

function startPage() {
    const enterButton = document.getElementById("enter-container");
    enterButton.style.transition = "opacity 1s ease-in-out";
    enterButton.style.opacity = 0;

    setTimeout(() => {
        setTimeout(() => {
            const memberButtons = document.getElementById("member-container");
            const mainButtons = document.getElementById("main-container");
            memberButtons.style.display = "flex";
            mainButtons.style.display = "flex";

            requestAnimationFrame(() => {
                memberButtons.style.transition = "opacity 1s ease-in-out";
                memberButtons.style.opacity = 1;
                mainButtons.style.transition = "opacity 1s ease-in-out";
                mainButtons.style.opacity = 1;
            });

            enterButton.style.display = "none";
        }, 500);
    }, 1000);
    
    song.volume = 0;
    song.playbackRate = 1;
    song.play();

    var fadeInInterval = setInterval(function () {
        song.volume += 0.1;
        if (song.volume >= 0.7) {
            song.volume = 0.7;
            clearInterval(fadeInInterval);
        }
    }, 350);

    setTimeout(startHome, 1000);
};


//MEMBER BUTTONS
function memberCall(pfpSrc, textContent, user) {
    if (transitionActive) return;
    transitionActive = true;

    if (current_page === "member") {
        const displayText = document.querySelector(".display-text");
        const pfpImage = document.getElementById("pfp-image");

        displayText.innerHTML = textContent;
        document.title = "@fmzq " + user;
        pfpImage.src = pfpSrc;

        transitionActive = false;
    } else {
        current_page = "member";
        document.title = "@fmzq " + user;
        const displayText = document.querySelector(".display-text");
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.display = "block";
        pfpImage.style.opacity = 1;
        randomGif.style.position = "absolute";

        displayText.innerHTML = textContent;
        pfpImage.src = pfpSrc;
        randomGif.style.display = "none";

        transitionActive = false;
    }
}

function Burberry() {
    memberCall(
        "assets/berry_icon.png",
        "<a href='https://www.roblox.com/users/958031159/profile' target='_blank' style='color: white;'>Roblox",
        "Burberry"
    );
}

function Rich() {
    memberCall(
        "assets/rich_icon.PNG", 
        "<a href='https://discord.gg/vjj9SCey' target='_blank' style='color: white;'>discord</a>, 
        "Rich" 
    );
}

function Jaguar() {
    memberCall(
        "assets/lejon_icon.png",
        "<a href='https://discord.com/users/1274705405322334250' target='_blank' style='color: white;'>Discord Profile</a>, <a href='https://t.me/f_mzq' target='_blank' style='color: white;'>telegram</a>",
        "Jaguar"
    );
}



// CORE BUTTONS

function memberCall(pfpSrc, textContent, user) {
    if (transitionActive) return;
    transitionActive = true;

    if (current_page === ".") {
        const displayText = document.querySelector(".display-text");
        const pfpImage = document.getElementById("pfp-image");

        displayText.innerHTML = textContent;
        document.title = "." + user;
        pfpImage.src = pfpSrc;

        transitionActive = false;
    } else {
        current_page = "member";
        document.title = "." + user;
        const displayText = document.querySelector(".display-text");
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.display = "block";
        pfpImage.style.opacity = 1;

        displayText.innerHTML = textContent;
        pfpImage.src = pfpSrc;
        randomGif.style.display = "none";

        transitionActive = false;
    }
}

function updatePage(htmlContent, pageTitle) {
    if (transitionActive) return;
    transitionActive = true;
    document.title = "@fmzq " + pageTitle;
    const displayText = document.querySelector(".display-text");

    if (current_page !== "main") {
        current_page = "main";
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.opacity = 0;
        randomGif.style.display = "block";
        randomGif.style.opacity = 1;
        displayText.innerHTML = htmlContent;
        pfpImage.style.display = "none";
        displayText.style.opacity = 1;

        transitionActive = false;
    } else {
        displayText.innerHTML = htmlContent;
        transitionActive = false;
    }
}


function domains() {
    updatePage(
        "<a href='focusing on CyberSecurity And Exploits for the environment!' target='_blank' style='color: white;'>focusing on CyberSecurity And Exploits for the environment!",
        "projects"
    );
}

function about() {
    updatePage(
        "<a href='' target='_blank' style='color: white;'>",
        "about"
    );
}



function discord() {
    window.open("", "_blank");
}


//OTHER


function getRandomSentence() {
    const sentences = [
        "@ <a href='' target='_blank' style='color: white;'>fmzq</a>, a collective"
    ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

var gifs = [


    "1.gif",


    ];

function setRandomGif() {
    var randomIndex = Math.floor(Math.random() * gifs.length);
    var randomGif = gifs[randomIndex];
    document.getElementById("random-gif").src = "assets/" + randomGif;

    document.body.setAttribute("data-current-gif", randomGif);

    updateButtonHoverColor();
}

setRandomGif();

function updateButtonHoverColor() {
    var currentGif = document.body.getAttribute("data-current-gif");
    var buttons = document.querySelectorAll(".buttons-container button");

    buttons.forEach(function(button) {
        button.setAttribute("data-gif", currentGif);
    });
}

