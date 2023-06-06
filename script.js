// Tableau avec les lots à gagner :
const lots = ['Canard en plastique', 'Parapluie', 'Jeux de société', '1000 euros', 'Séjour à Istanbul', 'Tasse turkish kavé'];
const randomIndex = Math.floor(Math.random() * lots.length);
const randomGift = lots[randomIndex];

// variable avec des URL d'imgs pour 
const imgs = ['https://unsplash.com/fr/photos/LhqLdDPcSV8', 'https://unsplash.com/fr/photos/YDZPdqv3FcA', 'https://unsplash.com/fr/photos/GdTLaWamFHw'];

// Récupérer l'input de l'User :

const userGuess = document.getElementById('guess');

// Créer une fonction pour générer un JustPrice de manière aléatoire;
let min = 1;
let max = 100;

const justPrice = Math.floor(Math.random() * (max - min)) + min;
const maxAttempts = 7;

console.log(justPrice);

//faire en sorte de récupérer la valeur de userGuess lorsqu'on tape "entrée"
userGuess.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

// Créer une fonction pour vérifier l'userGuess :
let attempts = 0;
function checkGuess() {
    if (attempts >= maxAttempts) {
        msgResult('Game over!');
        document.querySelector('#button')[0].disabled = true;
        return;
    }

    if (Number(userGuess.value) === justPrice) {
        msgResult('Congratulations! Correct price! ' + 'Your Gift: ' +randomGift); // Get la valeur d'un Gift from le tableau;

        document.getElementById('btn1')[0].disabled = true;
        document.getElementById('guess').disabled = true;

    }
    else
        if (Number(userGuess.value) < justPrice) {
            attempts++;
            msgResult('Try a higher number!');
        }
        else if (Number(userGuess.value) > justPrice) {
            console.log(justPrice);
            attempts++;
            msgResult('Try a lower number!');
        }

}

// Afficher le résultat :
function msgResult(message) {
    document.getElementById('result').textContent = message + '   ' + attempts + ' attempt(s)';

};
// Créer une function resetGame :

function resetGame() {
    document.getElementById('guess').value = ' ';
    document.getElementById('btn1').disabled = false;
    document.getElementById('result').textContent = ' ';
};


