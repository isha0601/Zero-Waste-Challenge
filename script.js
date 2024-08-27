// Simulated user data
const userData = {
    username: "user",
    password: "password",
    score: 0
};

// Daily challenges
const challenges = [
    { title: "Avoid Single-Use Plastics", points: 10 },
    { title: "Use a Reusable Water Bottle", points: 10 },
    { title: "Compost Kitchen Waste", points: 15 },
];

// Handle login
function login(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === userData.username && password === userData.password) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials, please try again.");
    }
}

// Show challenges on the home page
window.onload = function () {
    if (document.getElementById('challenge-list')) {
        const challengeList = document.getElementById('challenge-list');

        challenges.forEach(challenge => {
            const challengeDiv = document.createElement('div');
            challengeDiv.classList.add('challenge');

            challengeDiv.innerHTML = `
                <h3>${challenge.title}</h3>
                <p>Points: ${challenge.points}</p>
            `;

            challengeList.appendChild(challengeDiv);
        });
    }

    // Display user's score if available
    if (document.getElementById('userScore')) {
        document.getElementById('userScore').innerText = userData.score;
    }
};

// Complete a task and update score
function completeTask() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const selectedChallenge = challenges[randomIndex];
    userData.score += selectedChallenge.points;

    alert(`Task completed: ${selectedChallenge.title}. You earned ${selectedChallenge.points} points!`);
    document.getElementById('userScore').innerText = userData.score;
}

// Compare scores (simulated comparison)
function compareScores() {
    const otherUserScores = [50, 75, 100, 125, 150];
    const comparisonResults = document.getElementById('comparisonResults');

    comparisonResults.innerHTML = "<h4>Your score vs Others:</h4>";

    otherUserScores.forEach((score, index) => {
        const result = document.createElement('p');
        result.innerText = `User ${index + 1}: ${score} points`;
        comparisonResults.appendChild(result);
    });

    const userResult = document.createElement('p');
    userResult.innerText = `You: ${userData.score} points`;
    userResult.style.fontWeight = 'bold';
    comparisonResults.appendChild(userResult);
}
