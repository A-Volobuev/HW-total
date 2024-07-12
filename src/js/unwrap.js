// Ищем кнопки
const unwrapButtons = document.querySelectorAll('.unwrap-button');

unwrapButtons.forEach(button => {
    button.addEventListener('click', onUnwrapButtonClick);
});

// Условия для кнопки
function onUnwrapButtonClick(event) {
    const currentButton = event.currentTarget;
        const taskParents = currentButton.closest('.main__task');
        const content = taskParents.querySelector('.task__list');
        
        // Добавляем класс 
        content.classList.toggle('is-visible');

        const buttonStyle = taskParents.querySelector('.unwrap-button');
        buttonStyle.classList.toggle('unwrap-is-open');
    };