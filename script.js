document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "Müzik notalarının baş harfleri hangi harflerle gösterilir?",
            answers: ["A-B-C-D-E-F-G", "Do-Re-Mi-Fa-Sol", "1-2-3-4-5"],
            correct: 0
        },
        {
            question: "Hangi müzik aleti yaylı bir çalgıdır?",
            answers: ["Gitar", "Keman", "Davul"],
            correct: 1
        },
        {
            question: "Pop müziğin kralı olarak kim bilinir?",
            answers: ["Elvis Presley", "Michael Jackson", "Justin Bieber"],
            correct: 1
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    const nextBtn = document.getElementById("next-btn");
    const scoreEl = document.getElementById("score");

    function showQuestion() {
        let q = questions[currentQuestion];
        questionEl.textContent = q.question;
        answersEl.innerHTML = "";
        nextBtn.style.display = "none";

        q.answers.forEach((answer, index) => {
            const btn = document.createElement("button");
            btn.classList.add("answer-btn");
            btn.textContent = answer;
            btn.addEventListener("click", () => selectAnswer(index));
            answersEl.appendChild(btn);
        });
    }

    function selectAnswer(selectedIndex) {
        const correctIndex = questions[currentQuestion].correct;
        const allBtns = document.querySelectorAll(".answer-btn");

        allBtns.forEach((btn, index) => {
            btn.disabled = true;
            if (index === correctIndex) {
                btn.style.backgroundColor = "#28a745";
            } else if (index === selectedIndex) {
                btn.style.backgroundColor = "#dc3545";
            }
        });

        if (selectedIndex === correctIndex) {
            score++;
        }

        nextBtn.style.display = "inline-block";
    }

    nextBtn.addEventListener("click", () => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    });

    function showScore() {
        questionEl.textContent = "Quiz Bitti!";
        answersEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.textContent = `Skorunuz: ${score} / ${questions.length}`;
    }

    showQuestion();
});