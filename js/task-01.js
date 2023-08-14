const list = document.querySelectorAll(`.item`)
console.log(`Number of categories: ${list.length}`);

list.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.dir(`Elements: ${item.lastElementChild.children.length}`);
});