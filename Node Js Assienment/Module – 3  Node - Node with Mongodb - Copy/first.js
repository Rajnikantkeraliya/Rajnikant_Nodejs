let col20 = document.querySelector(".col-20");
let aElements = col20.querySelectorAll("a");

aElements.forEach(a => {
    a.onclick = () => {
        let index = a.classList[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        let targetQuestion = document.querySelector(`.que${index}`);

        document.querySelectorAll('.dis').forEach(question => {
            question.style.display = 'none';
        });

        targetQuestion.style.display = "block";
    }
});