const correctAnswer = "Правильный ответ"; // Правильный ответ для теста

    function checkAnswer(element, answer) {
        // Проверка выбранного ответа
        if (answer === correctAnswer) {
            element.classList.add("correct");
            alert("Правильный ответ!");
        } else {
            element.classList.add("incorrect");
            alert("Неправильный ответ. Попробуйте еще раз.");
        }
    }

    function checkWrittenAnswer() {
        // Проверка ответа, введенного пользователем
        const userInput = document.getElementById("user-input").value;
        if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            alert("Правильно!");
        } else {
            alert("Неправильно. Попробуйте еще раз.");
        }
    }