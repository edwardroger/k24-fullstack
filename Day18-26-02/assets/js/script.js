const render = (question, answer) => {
    let display = document.getElementById('body');
    display.innerHTML = `
            <div class="order">Question ${ question.id } of 5</div>
            <div class="title">${ question.title }?</div>
            <div class="answer">
                <input type="radio" id="a1" name="answer" value="${ answer.a1 }"> ${ answer.a1 } <br>
                <input type="radio" id="a2" name="answer" value="${ answer.a2 }"> ${ answer.a2 } <br>
                <input type="radio" id="a3" name="answer" value="${ answer.a3 }"> ${ answer.a3 } <br>
                <input type="hidden" id="question_number" value="${ question.id }">
            </div>
        `;
}

const calScore = (answers) => {
    var sum = 0;
    let score = answers.map((value, key) => {
        if (value === questions[key].correctAnswer) {
            sum++;
        }
        return sum;
    })

    return score.pop();
}

const onHandleClick = () => {
    let next = document.getElementById('next');
    next.addEventListener('click', () => {
        let selected = document.querySelector('input[name="answer"]:checked');
        if (!selected) {
            alert('Please select an answer');
        }
        let answer = selected.value;
        let questionNumber = document.getElementById('question_number').value;

        //Lưu vào localstorage
        var answerOfUser = JSON.parse(localStorage.getItem('answer'));
        let answerLocalstorage = answerOfUser.concat([answer]);
        localStorage.setItem('answer', JSON.stringify(answerLocalstorage));

        let totalAnswer = JSON.parse(localStorage.getItem('answer'));

        //Render lại màn hình
        let display = document.getElementById('body');
        if (totalAnswer.length ===  5) {
            let totalCorrect = calScore(totalAnswer);

            display.innerHTML = totalCorrect + '/5';

            return;
        }

        display.innerHTML = '';
        render(questions[questionNumber], answers[questionNumber]);
    })
}

const initScreen = () => {
    localStorage.setItem('answer', JSON.stringify([]));
    render(questions[0], answers[0]);
    onHandleClick();
}

initScreen();