const LogoType = {
    Unity: 'Unity',
    Leet: 'Leet',
    Udemy: 'Udemy',
};

const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

document.getElementById("language-btn").onclick = displayLanguages;
document.getElementById("video-game-btn").onclick = displayGallery;
document.getElementById("code-btn").onclick = displayCode;

document.getElementById("unity").onmouseover = displayLogoText(LogoType.Unity);
document.getElementById("leet").onmouseover = displayLogoText(LogoType.Leet);
document.getElementById("udemy").onmouseover  = displayLogoText(LogoType.Udemy);

let showLanguages = true;
let showGallery = true;
let showCode = true;

function displayGallery()
{
    const gallery = document.getElementById("video-game-gallery");
    const button = document.getElementById("video-game-btn");

    if(showGallery)
    {
        gallery.style.display = "block";
        button.textContent = "Click here to close the gallery."
        showGallery = false;
    }
    else
    {
        gallery.style.display = "none";
        button.textContent = "Click here to see my video games!"
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
        button.textContent ="Click here to close the list."
        showLanguages = false;
    }
    else
    {

        const ol = document.getElementById("lang-list");
        ol.remove();
        button.textContent ="Click here to see my three favorite languages!"
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
        button.textContent = "Click here to close the code."
        showCode = false;
    }
    else
    {
        code.style.display = "none";
        button.textContent = "Click here to see my code!"
        showCode = true;
    }
}

function displayLogoText(logoNum)
{
    const p = document.createElement("p");

    switch(logoNum)
    {
        case LogoType.Unity:
            console.log("debug");
            p.setAttribute("id","unity-text");
            p.textContent = "The Unity Engine - One of the best engines for creating video games.";
            document.getElementById("unity").appendChild(p);
            break;
        case LogoType.Leet:
            console.log("debug2");
            p.setAttribute("id","leet-text");
            p.textContent = "LeetCode - One of the best websites to learn code from the professionals.";
            document.getElementById("leet").appendChild(p);
            break
        case LogoType.Udemy:
            console.log("debug3");
            p.setAttribute("id","udemy-text");
            p.textContent = "Udemy - An excellent website with thousands of tutorials on learning how to code.";
            document.getElementById("leet").appendChild(p);
            break;
    }
}