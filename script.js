const LogoType = {
    Unity: 'Unity',
    Leet: 'Leet',
    Udemy: 'Udemy',
};

const BackgroundType = {
    None: 'None',
    Brown: 'Brown',
    Galaxy: 'Galaxy',
    Road: 'Road',
};

document.getElementById("none").onclick = function(){changeBackground(BackgroundType.None);};
document.getElementById("brown").onclick = function(){changeBackground(BackgroundType.Brown);}; 
document.getElementById("galaxy").onclick = function(){changeBackground(BackgroundType.Galaxy);}; 
document.getElementById("road").onclick = function(){changeBackground(BackgroundType.Road);}; 

document.getElementById("language-btn").onclick = displayLanguages;
document.getElementById("video-game-btn").onclick = displayGallery;
document.getElementById("code-btn").onclick = displayCode;

document.getElementById("unity-pic").onmouseover = function(){displayLogoText(LogoType.Unity);}; 
document.getElementById("leet-pic").onmouseover = function(){displayLogoText(LogoType.Leet);}; 
document.getElementById("udemy-pic").onmouseover = function(){displayLogoText(LogoType.Udemy);}; 

document.getElementById("unity-pic").onmouseleave = function(){removeLogoText(LogoType.Unity);}; 
document.getElementById("leet-pic").onmouseleave = function(){removeLogoText(LogoType.Leet);}; 
document.getElementById("udemy-pic").onmouseleave = function(){removeLogoText(LogoType.Udemy);}; 

let showLanguages = true;
let showGallery = true;
let showCode = true;


function changeBackground(backgroundType)
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

function displayGallery()
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

function displayLanguages()
{
    const button = document.getElementById("language-btn");

    if(showLanguages)
    {
        const ol = document.createElement("ol");
        console.log("element clicked");
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
    else
    {

        const ol = document.getElementById("lang-list");
        ol.remove();
        button.textContent ="Click here to see my three favorite languages!";
        showLanguages = true;
    }


}

function displayCode()
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

function removeLogoText(logo)
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

function displayLogoText(logo)
{
    const p = document.createElement("p");

    switch(logo)
    {
        case LogoType.Unity:
            console.log("debug");
            p.setAttribute("id","unity-text");
            p.textContent = "The Unity Engine - One of the best engines for creating video games.";
            document.getElementById("unity-div").appendChild(p);
            break;
        case LogoType.Leet:
            console.log("debug2");
            p.setAttribute("id","leet-text");
            p.textContent = "LeetCode - One of the best websites to learn code from the professionals.";
            document.getElementById("leet-div").appendChild(p);
            break;
        case LogoType.Udemy:
            console.log("debug3");
            p.setAttribute("id","udemy-text");
            p.textContent = "Udemy - An excellent website with thousands of tutorials on learning how to code.";
            document.getElementById("udemy-div").appendChild(p);
            break;
    }
}