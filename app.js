

const constDiv = document.getElementById("container");
const text = document.querySelector(".text");
const box = document.querySelector(".bottom_box");
const button = document.querySelector("button");

constDiv.style.backgroundColor = "#fb6964";
box.style.color = "#fb6964";
text.style.color = "#fb6964";
button.style.backgroundColor = "#fb6964";
    

const chuckQuote = [
    "Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.", 
    "A l'école, c'est le professeur qui devait lever la main pour parler a Chuck Norris.",
    "Chuck Norris sait où se trouve Ornicar.",
    "Un jour, les PowerRangers ont rencontré Chuck Norris. Maintenant on les appelle les Télétubbies.",
    "Quand la tartine de Chuck Norris tombe, la confiture change de côté.",
    "Windows ne demande jamais à Chuck Norris d'envoyer le rapport d'erreur. Bill Gates vient le chercher lui même, avec toutes ses excuses.",
    "Des gamins pissent dans la neige pour écrire leur nom. Chuck Norris le fait dans le béton armé.",
    "Un jour, Chuck Norris a perdu son alliance. Depuis c'est le bordel dans les terres du milieu...",
    "Chuck Norris peut remonter le terrain de foot dans Olive et Tom en moins d'un épisode.",
    "Quand Chuck Norris fixe un aveugle, l'aveugle baisse les yeux."
]
console.log(chuckQuote[Math.random(0,1)])
function changeColor() {
    //h1.style.color = "blue";
    let randomColor = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    constDiv.style.backgroundColor = randomColor;
    text.style.color = randomColor;
    text.innerHTML = chuckQuote[Math.floor(Math.random() * chuckQuote.length)];
    box.style.color = randomColor;
    button.style.backgroundColor = randomColor;
    
};




button.addEventListener("click", changeColor);
