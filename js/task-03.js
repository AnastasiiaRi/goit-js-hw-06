const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector(".gallery");
const image = images.map(function({url, alt}) {
  return `<li><img src = '${url}' alt = '${alt}' width="400", height = "280"></li>`;
}).join("");
  gallery.insertAdjacentHTML("afterbegin", image);
console.log(image);
gallery.style.display = "inline-flex";
gallery.style.listStyle = "none";
gallery.style.margin = 0;
gallery.style.padding = 0;