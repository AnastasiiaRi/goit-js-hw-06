const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

const liArr = ingredients.map ((ingredient) =>{
  const liEl = document.createElement("li");
  liEl.classList.add('item');
  liEl.textContent = ingredient;;
  return liEl;
});
list.append(...liArr);

