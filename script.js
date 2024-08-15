const questionsContainer = document.getElementById('questionsContainer');

questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    const questionText = document.createElement('p');
    questionText.innerText = `${index + 1}. ${question.text}`;
    questionDiv.appendChild(questionText);

    if (question.image) {
        const questionImage = document.createElement('img');
        questionImage.src = question.image;
        questionDiv.appendChild(questionImage);
    }

    question.options.forEach(option => {
        const optionLabel = document.createElement('label');
        optionLabel.style.display = "block";

        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `question${index}`;
        optionInput.value = option.charAt(0);

        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        questionDiv.appendChild(optionLabel);
    });

    questionsContainer.appendChild(questionDiv);
});
