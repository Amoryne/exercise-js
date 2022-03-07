// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
run.addEventListener('click', function (){
    let randombird= birds[Math.floor(Math.random() * birds.length)];
    let randomadjective;
    function getRandomAdjective(adjectives){
        let arrAdjective=Array.from(adjectives);
    randomadjective=arrAdjective[Math.floor(Math.random() * arrAdjective.length)];

    }
    getRandomAdjective(adjectives);

    if (randombird.fem == true){
         document.getElementById('target').innerHTML = "La "+ randombird.name+ " " + randomadjective + "e";
    }else {
        document.getElementById('target').innerHTML = "Le " +randombird.name+ " " + randomadjective ;
    }

   
});
})();
