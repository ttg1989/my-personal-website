const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

document.getElementById("language-btn").onclick = displayLanguages;

let showLanguages = true;

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

        const ol = document.querySelector("ol");
        ol.remove();
        button.textContent ="Click here to see my three favorite languages!"
        showLanguages = true;
    }


}

function removeLanguages()
{
    const ol = document.getElementById("language-list");
    ol.remove();
}