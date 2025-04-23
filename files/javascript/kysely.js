const questions = [
    "Miltä sinusta tuntuu, että monilla lapsilla ei ole kunnollista päiväkotia tai pitää matkutaa monta kilometriä päästäkseen sinne?",
    "Miltä sinusta tuntuu, että ilmastonmuutos uhkaa tulevaisuuttamme?",
    "Miltä sinusta tuntuu, että monilla ihmisillä ei ole kattoa pään päällä?",
    "Miltä sinusta tuntuu, että monet lapset kuolee siraukesiin kehitys maissa?",
    "Miltä sinusta tuntuu, että monissa paikoissa ei edes ole kunnoillista leikkipuistoa?"
];

const answers = {};
let currentQuestionIndex = 0;

function showQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = `
        <div class="question">
            <p>${questions[currentQuestionIndex]}</p>
            <div class="options">
                <button onclick="saveAnswer('Pahalta')">Pahalta</button>
                <button onclick="saveAnswer('Hyvältä')">Hyvältä</button>
                <button onclick="saveAnswer('En osaa sanoa')">En osaa sanoa</button>
            </div>
        </div>
    `;
}

function saveAnswer(answer) {
    answers[currentQuestionIndex + 1] = answer; // Store answer with question number
    currentQuestionIndex++; // Move to the next question

    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Show the next question
    } else {
        showSummary(); // Show summary if all questions are answered
    }
}

function showSummary() {
    const questionContainer = document.getElementById('questionContainer');
    const summaryDiv = document.getElementById('summary');
    const summaryText = document.getElementById('summaryText');

    // Hide questions and show summary
    questionContainer.classList.add('hidden');
    summaryDiv.classList.remove('hidden');

    // Build summary text
    let summary = '';
    for (let i = 1; i <= questions.length; i++) {
        summary += `<strong>Kysymys ${i}:</strong> ${answers[i]}<br>`;
    }
    summaryText.innerHTML = summary;
}

// Start the questionnaire
showQuestion();