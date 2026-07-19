let coins = 0;
let correctAnswer = 0;
let answered = false;


function startLesson() { 

   answered = false;
    
   let n1 = Math.floor(Math.random() * 10) + 1;
    let n2 = Math.floor(Math.random() * 10) + 1;

    correctAnswer = n1 + n2;

    document.getElementById("question").innerHTML =
        "Quanto é " + n1 + " + " + n2 + "?";
}

function checkAnswer() {

    if(answered){
    return;
}
    
    let answer = Number(document.getElementById("answer").value);

    if (answer === correctAnswer) {

        answered = true;
        
        coins += 50;

        document.getElementById("coins").innerHTML = coins;

        alert("🎉 Você ganhou 50 moedas!");

    } else {

        alert("❌ Resposta errada!");

    }
}

function openEgg() {

    if (coins < 50) {
        alert("Você precisa de 50 moedas!");
        return;
    }

    coins -= 50;

    document.getElementById("coins").innerHTML = coins;

    let egg = document.getElementById("eggAnimation");

    egg.classList.add("shake");

    setTimeout(function() {

        egg.classList.remove("shake");

        let pets = [
            "🐶 Pet Comum",
            "🐱 Pet Raro",
            "🐉 Pet Lendário",
            "✨ Pet Mítico"
        ];

        let pet =
        pets[Math.floor(Math.random() * pets.length)];

        document.getElementById("pet").innerHTML =
            "Você conseguiu: " + pet;

        egg.innerHTML = "💥";

    }, 2000);
}

