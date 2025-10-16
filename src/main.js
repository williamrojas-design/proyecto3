import "./style.css";

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let counter;
let currentItem;
let nameElement = document.querySelector(".name");
let jobElement = document.querySelector(".job");
let imgElement = document.querySelector(".img-review");
let textElement = document.querySelector(".text");
let backBtn = document.querySelector(".btn-back");
let forwardBtn = document.querySelector(".btn-forward");
let surpriseBtn = document.querySelector(".btn-surprise");

document.addEventListener("DOMContentLoaded", (event) => {
  counter = 0;
  showReview(counter);
  backBtn.addEventListener("click", backImg);
  forwardBtn.addEventListener("click", forwardImg);
  surpriseBtn.addEventListener("click", surprise);
});

function showReview(counter) {
  currentItem = reviews[counter];

  nameElement.textContent = currentItem.name;
  jobElement.textContent = currentItem.job;
  imgElement.setAttribute("src", currentItem.img);
  textElement.textContent = currentItem.text;
}

function forwardImg() {
  if (counter === reviews.length - 1) {
    counter = 0;
  } else counter++;

  showReview(counter);
}

function backImg() {
  if (counter === 0) {
    counter = reviews.length - 1;
  } else counter--;
  showReview(counter);
}

function surprise() {
let newRandom;

  do {
    newRandom = Math.floor(Math.random() * reviews.length);
  } while (newRandom === counter);

  counter = newRandom;
  showReview(counter);
}
