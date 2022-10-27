const LogoType = { // Enumerated type for the logo hover function
    Unity: 'Unity',
    Leet: 'Leet',
    Udemy: 'Udemy',
};

const BackgroundType = { // Enumerated type for the background change function
    None: 'None',
    Brown: 'Brown',
    Galaxy: 'Galaxy',
    Road: 'Road',
};

document.getElementById("none").onclick = function(){changeBackground(BackgroundType.None);}; // When the user clicks a radio button, change the background on the page.
document.getElementById("brown").onclick = function(){changeBackground(BackgroundType.Brown);}; 
document.getElementById("galaxy").onclick = function(){changeBackground(BackgroundType.Galaxy);}; 
document.getElementById("road").onclick = function(){changeBackground(BackgroundType.Road);}; 

document.getElementById("language-btn").onclick = displayLanguages; // Display content when user clicks the button.
document.getElementById("video-game-btn").onclick = displayGallery;
document.getElementById("code-btn").onclick = displayCode;

document.getElementById("unity-pic").onmouseover = function(){displayLogoText(LogoType.Unity);}; // When the user's mouse hovers over a logo, display the information text.
document.getElementById("leet-pic").onmouseover = function(){displayLogoText(LogoType.Leet);}; 
document.getElementById("udemy-pic").onmouseover = function(){displayLogoText(LogoType.Udemy);}; 

document.getElementById("unity-pic").onmouseleave = function(){removeLogoText(LogoType.Unity);}; // When the user's mouse exits over a logo, hide the information text.
document.getElementById("leet-pic").onmouseleave = function(){removeLogoText(LogoType.Leet);}; 
document.getElementById("udemy-pic").onmouseleave = function(){removeLogoText(LogoType.Udemy);}; 

let showLanguages = true; // Set the booleans initial state to true so that the user can click the buttons and see the information.
let showGallery = true;
let showCode = true;


function changeBackground(backgroundType) //Depending on the type past in, change the background image and text color of the document body.
{
    const body = document.querySelector("body");

    switch(backgroundType)
    {
        case BackgroundType.None:
            body.style.backgroundImage = "none";
            body.style.backgroundColor = "biege";
            body.style.color = "black";
            body.style.textShadow = "none"; 
            break;
        
        case BackgroundType.Brown:
            body.style.backgroundImage = "url(images/backgrounds/brown-canvas.jpg)";
            body.style.color = "black";
            body.style.textShadow = "none";       
            break;
        
        case BackgroundType.Galaxy:
            body.style.backgroundImage = "url(images/backgrounds/galaxy.jpg)"; 
            body.style.color = "yellow";
            body.style.textShadow = "1px 1px blue";
            break;

        case BackgroundType.Road:
            body.style.backgroundImage = "url(images/backgrounds/road.jpg)";
            body.style.color = "yellow";
            body.style.textShadow = "1px 1px blue";
            break;
    }
}

function displayGallery() // Hide or unhide the video game gallery when the user clicks the button and change the button text.
{
    const gallery = document.getElementById("video-game-gallery");
    const button = document.getElementById("video-game-btn");

    if(showGallery)
    {
        gallery.style.display = "block";
        button.textContent = "Click here to close the gallery.";
        showGallery = false;
    }
    else
    {
        gallery.style.display = "none";
        button.textContent = "Click here to see my video games!";
        showGallery = true;
    }
}

function displayLanguages() //If the showLanguages boolean is true create the list, otherwise destroy it.
{
    const button = document.getElementById("language-btn");

    if(showLanguages) // Create list and update button.
    {
        const ol = document.createElement("ol");
        ol.setAttribute("id","lang-list");
        document.getElementById("language-list").appendChild(ol);
        const li1 = document.createElement("li");
        li1.textContent = "C#";
        const li2 = document.createElement("li");
        li2.textContent = "C++";
        const li3 = document.createElement("li");
        li3.textContent = "Java";
    
        ol.appendChild(li1);
        ol.appendChild(li2);
        ol.appendChild(li3);
        button.textContent ="Click here to close the list.";
        showLanguages = false;
    }
    else //Destroy list and reset button.
    {

        const ol = document.getElementById("lang-list");
        ol.remove();
        button.textContent ="Click here to see my three favorite languages!";
        showLanguages = true;
    }


}

function displayCode() // When the user clicks the button display or hide the code section.
{
    const code = document.querySelector("code");
    const button = document.getElementById("code-btn");

    if(showCode)
    {
        code.style.display = "block";
        button.textContent = "Click here to close the code.";
        showCode = false;
    }
    else
    {
        code.style.display = "none";
        button.textContent = "Click here to see my code!";
        showCode = true;
    }
}

function removeLogoText(logo) // Get the logo text element depending on the type passed in and remove it.
{
    let p;

    switch(logo)
    {
        case LogoType.Unity:
            p = document.getElementById("unity-text");
            break;
        
        case LogoType.Leet:
            p = document.getElementById("leet-text");       
            break;
        
        case LogoType.Udemy:
            p = document.getElementById("udemy-text");
            break;
    }

    p.remove();
}

function displayLogoText(logo) // Create the logo text below the logo for the type passed in.
{
    const p = document.createElement("p");

    switch(logo)
    {
        case LogoType.Unity:
            p.setAttribute("id","unity-text");
            p.textContent = "The Unity Engine - One of the best engines for creating video games.";
            document.getElementById("unity-div").appendChild(p);
            break;
        case LogoType.Leet:
            p.setAttribute("id","leet-text");
            p.textContent = "LeetCode - One of the best websites to learn code from the professionals.";
            document.getElementById("leet-div").appendChild(p);
            break;
        case LogoType.Udemy:
            p.setAttribute("id","udemy-text");
            p.textContent = "Udemy - An excellent website with thousands of tutorials on learning how to code.";
            document.getElementById("udemy-div").appendChild(p);
            break;
    }
}