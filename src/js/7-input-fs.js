const inputSize = document.getElementById('font-size-control');
const textChangeSize = document.getElementById('text');
const textValueSize = document.getElementById('text-size');

function sizeChange(event) {
    textChangeSize.style.fontSize = event.currentTarget.value + 'px';

    textValueSize.textContent = `Font-Size: ${event.currentTarget.value}px`
};
inputSize.addEventListener('input', sizeChange);



