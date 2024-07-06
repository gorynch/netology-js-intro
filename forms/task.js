const form = document.querySelector('form')
const inputName = document.getElementById('name');
const inputFeedback = document.getElementById('feedback');
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

form.addEventListener('submit', () => {
    event.preventDefault();
})

btn.addEventListener('click', () => {
    if ((inputName.value != '') && (inputFeedback.value != '')){
        let p1 = document.createElement('p');
        content.appendChild(p1);
        p1.textContent = `Имя: ${inputName.value}`;

        let p2 = document.createElement("p");
        content.appendChild(p2);
        p2.textContent = `Текст: ${inputFeedback.value}`;
        form.reset();
    }
});