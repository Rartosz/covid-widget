

let scenery = document.createElement("div"); 
let body = document.querySelector("body");
document.body.appendChild(scenery); 

// ZMIENNE POBIERAJACE DANE Z GOOGLE //
let recoveredNumber = 100;
let deathNumber = 15000;
let casesNumber = 163000;
// VVV Nowe przypadki (mozesz pokombinować i usunąć czy coś, ale niżej są podane jako zmienne i sa wyswietlane) VVV //
let newestDeaths = 45;
let newestRecovers = 500;
let newestCases = 1400;

/////////////////////////////////////////

scenery.style.width = 500 + "px";
scenery.style.height = 180 + "px";
scenery.style.borderRadius = "20px 0px 0px 20px";
scenery.style.position = "fixed";
scenery.style.zIndex = 3;
scenery.style.background = "white";
scenery.style.left = 100 + "%";
scenery.style.top = 50 + "%";
scenery.style.display = "flex";
scenery.style.flexDirection = "column";
scenery.style.alignItems = "center";
scenery.style.justifyContent = "flex-start";
scenery.style.transition = "transform 0.4s";

let btn = document.createElement("button");
scenery.appendChild(btn);


btn.style.width = 70 + "px";
btn.style.height = 70 + "px";
btn.style.position = "absolute";
btn.style.border = "none";
btn.style.backgroundColor = "white";
btn.style.borderRadius = "20px 0px 0px 20px";
btn.style.backgroundImage = ` url('images/lew.jpg') `
btn.style.backgroundPosition = "center";
btn.style.backgroundSize = 50 + "%";
btn.style.backgroundRepeat = "no-repeat";
btn.style.left = -69 + "px";
btn.style.top = 25 + "%";




let flag = document.createElement("div");
scenery.appendChild(flag);

flag.style.width = 60 + "px";
flag.style.height = 60 + "px";
flag.style.borderRadius = 100 + "%";
//flag.style.border = "2px solid black";
flag.style.position = "absolute";
flag.style.zIndex = 4;
flag.style.left = 40 + "px";
flag.style.transform = "translateY(-15px)";
flag.style.background = "url('images/poland-flag-medium.png')";
flag.style.backgroundPosition = "center";
flag.style.backgroundSize = "160%";
flag.style.backgroundRepeat = "no-repeat";

let description = document.createElement("h66");
scenery.appendChild(description);
description.className=" ";
description.textContent = "Koronawirus statystyki"
description.style.fontSize = 25 + "px";
description.style.fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
description.style.marginTop = 17 + "px";
description.style.marginLeft = 60 + "px";
description.style.fontWeight = 300;

let infoHolder = document.createElement("div");
scenery.appendChild(infoHolder);
infoHolder.style.width = 100 + "%";
infoHolder.style.height = 100 + "%";
infoHolder.style.position = "relative";
//infoHolder.style.border = "1px solid black";
infoHolder.style.display = "flex";
infoHolder.style.flexDirection = "row";
infoHolder.style.alignItems = "center";
infoHolder.style.justifyContent = "center";


//////////////////// Cases Holder ///////////////////


let infoCases = document.createElement("div");
infoHolder.appendChild(infoCases);
infoCases.style.width = 33 + "%";
infoCases.style.height = 100 + "%";
//infoCases.style.border = "2px solid red";
infoCases.style.position = "relative";
infoCases.style.display = "flex";
infoCases.style.flexDirection = "column";
infoCases.style.alignItems = "center";
infoCases.style.justifyContent = "center";

let textCases = document.createElement("h66");
infoCases.appendChild(textCases);
textCases.textContent = "Zarażeni:";
textCases.style.fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
textCases.style.fontSize = 24 + "px";
textCases.style.fontWeight = 100;

let casesHolder = document.createElement("div");
infoCases.appendChild(casesHolder);
casesHolder.style.display = "flex";
casesHolder.style.flexDirection = "row";
casesHolder.style.position = "relative";
//casesHolder.style.border = "1px solid black";
casesHolder.style.marginTop = 15+"px";


let cases = document.createElement("p66");
casesHolder.appendChild(cases);
cases.textContent = casesNumber;
cases.style.fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
cases.style.fontSize = 20 + "px";
cases.style.fontWeight = "bold";

let newCases = document.createElement("p67");
casesHolder.appendChild(newCases);
newCases.textContent = "+" + newestCases;
newCases.style.fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
newCases.style.fontWeight = "bold";
newCases.style.fontSize = 20 + "px";
newCases.style.color = "orange";
newCases.style.marginLeft = 10 + "px";




//////////////// End of Cases Holder ////////////////


//////////////// Deaths holder /////////////////
let infoDeaths = document.createElement("div");
infoHolder.appendChild(infoDeaths);
infoDeaths.style.width= 33 + "%";
infoDeaths.style.height = 100 + "%";
//infoDeaths.style.border = "2px solid blue";
infoDeaths.style.position = "relative";
infoDeaths.style.display = "flex";
infoDeaths.style.flexDirection = "column";
infoDeaths.style.alignItems = "center";
infoDeaths.style.justifyContent = "center";



let textDeaths = document.createElement("h66");
infoDeaths.appendChild(textDeaths);
textDeaths.textContent = "Zmarłych:";
textDeaths.style.fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
textDeaths.style.fontSize = 24 + "px";
textDeaths.style.fontWeight = 100;

let deathsHolder = document.createElement("div");
infoDeaths.appendChild(deathsHolder);
deathsHolder.style.display = "flex";
deathsHolder.style.flexDirection = "row";
deathsHolder.style.position = "relative";
//casesHolder.style.border = "1px solid black";
deathsHolder.style.marginTop = 15+"px";


let deaths = document.createElement("p66");
deathsHolder.appendChild(deaths);
deaths.textContent = deathNumber;
deaths.style.fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
deaths.style.fontSize = 20 + "px";
deaths.style.fontWeight = "bold";

let newDeaths = document.createElement("p67");
deathsHolder.appendChild(newDeaths);
newDeaths.textContent = "+" + newestDeaths;
newDeaths.style.fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
newDeaths.style.fontWeight = "bold";
newDeaths.style.fontSize = 20 + "px";
newDeaths.style.color = "red";
newDeaths.style.marginLeft = 10 + "px";

//////////////// End of Deaths Holder ////////////////////////


//////////////// Recovered Holder ////////////////////////
let infoRecovered = document.createElement("div");
infoHolder.appendChild(infoRecovered);
infoRecovered.style.width = 33 + "%";
infoRecovered.style.height = 100 + "%";
//infoRecovered.style.border = "2px solid pink";
infoRecovered.style.position = "relative";
infoRecovered.style.display = "flex";
infoRecovered.style.flexDirection = "column";
infoRecovered.style.alignItems = "center";
infoRecovered.style.justifyContent = "center";


let textRecovered = document.createElement("h66");
infoRecovered.appendChild(textRecovered);
textRecovered.textContent = "Wyzdrowiałych:";
textRecovered.style.fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
textRecovered.style.fontSize = 24 + "px";
textRecovered.style.fontWeight = 100;

let recoveredHolder = document.createElement("div");
infoRecovered.appendChild(recoveredHolder);
recoveredHolder.style.display = "flex";
recoveredHolder.style.flexDirection = "row";
recoveredHolder.style.position = "relative";
recoveredHolder.style.marginTop = 15+"px";


let recovers = document.createElement("p66");
recoveredHolder.appendChild(recovers);
recovers.textContent = recoveredNumber;
recovers.style.fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
recovers.style.fontSize = 20 + "px";
recovers.style.fontWeight = "bold";

let newRecovers = document.createElement("p67");
recoveredHolder.appendChild(newRecovers);
newRecovers.textContent = "+" + newestRecovers;
newRecovers.style.fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
newRecovers.style.fontWeight = "bold";
newRecovers.style.fontSize = 20 + "px";
newRecovers.style.color = "green";
newRecovers.style.marginLeft = 10 + "px";

///////////////// End of Recovered Holder ///////////////////


let openInfo = () => 
{

    if(scenery.style.transform === "translateX(-500px)" )
    {
        scenery.style.transform= "translateX(-0px)";
        scenery.style.transition = "0.7s";
        btn.style.transform = "rotateY(0deg)";
        btn.style.borderRadius = "20px 0px 0px 20px";
        btn.style.transition = "0.7s";
    }
    else 
    {
        scenery.style.transform= "translateX(-500px)";
    scenery.style.transition = "0.7s";
    btn.style.transform = "rotateZ(180deg)";
    btn.style.borderRadius = "0px 20px 20px 0px";
    btn.style.transition = "0.7s";
    }
    

}

btn.addEventListener("click", openInfo);