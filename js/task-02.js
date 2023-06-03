const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById('ingredients');

for (const ingredient of ingredients) {
  const ulEl = document.createElement('li');
  ulEl.textContent = ingredient;
  ulEl.classList.add('item');
  ulList.append(ulEl);
}