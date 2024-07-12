const itemEl = document.querySelectorAll('.item');
let totalCategories = itemEl.length;
let alertMessage =`Number of categories: ${totalCategories} \n \n`;

itemEl.forEach(element => {

    const category = element.querySelector('h2').textContent;
    const elementsCount = element.querySelectorAll('ul > li').length;

    alertMessage += `Category: ${category} \n Elements:${elementsCount} \n \n`
    alert(alertMessage);

});
