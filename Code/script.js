const navmenu = document.querySelectorAll(".nav-items li a");
const navLinks = document.querySelector(".nav-items");
const mobileLinks = document.querySelector(".mobile-menu");

mobileLinks.addEventListener("click", () => {
  mobileLinks.classList.toggle("active");
  navLinks.classList.toggle("active");
});

navmenu.forEach(link => {
  link.addEventListener("click", function () {
    navmenu.forEach(item => item.classList.remove("active-nav"));
    this.classList.add("active-nav");

    // menu close হলে সব reset
    navLinks.classList.remove("active");
    mobileLinks.classList.remove("active");
  });
});


const item = document.querySelectorAll('a [href^="#"]');

item.forEach(anchor => {
  anchor.addEventListener("click", () => {
    e.preventDefault()
    item.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// about img

const slider = document.querySelector(".slide");
const allImages = document.querySelectorAll(".slide img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let countIndex = 0;

function updateImages() {
  slider.style.transform = `translateX(-${countIndex * 100}%)`;
}

function updateSlider() {
  nextBtn.addEventListener("click", () => {
    countIndex++;
    if (countIndex >= allImages.length) {
      countIndex = 0;
    }
    updateImages();
  });

  prevBtn.addEventListener("click", () => {
    countIndex--;
    if (countIndex < 0) {
      countIndex = allImages.length - 1;
    }
    updateImages();
  });
}

setInterval(() => {
  countIndex++;
  if (countIndex >= allImages.length) {
    countIndex = 0;
  }
  updateImages()
}, 4000)

updateSlider();

// trainer section

const trainers = [
  { name: "Victoria Shurpik", img: "/Image/trainer-1.png" },
  { name: "John Carter", img: "/Image/trainer-2.png" },
  { name: "Sofia Lee", img: "/Image/trainer-3.png" },
  { name: "Michael Roy", img: "/Image/trainer-4.png" },
  { name: "Emma Watson", img: "/Image/trainer-5.png" },
  { name: "David Miller", img: "/Image/trainer-6.png" },
  { name: "Chris Evans", img: "/Image/trainer-7.png" },
  { name: "Sarah Khan", img: "/Image/trainer-8.png" },
];

const trainerContainer = document.getElementById("trainerGrids");

function trainerUpdate() {
  trainers.forEach((trainer) => {
    const card = document.createElement("div");
    card.classList.add("trainer-card");

    card.innerHTML = `
      <img src="${trainer.img}" alt="${trainer.name}">
      <h4>${trainer.name}</h4>
      <div class="sosal-icon">
        <div class="icon"><i class="fa-brands fa-facebook"></i></div>
        <div class="icon"><i class="fa-brands fa-twitter"></i></div>
        <div class="icon"><i class="fa-brands fa-youtube"></i></div>
      </div>
    `;

    trainerContainer.appendChild(card);
  });
}

trainerUpdate();


// pyment mothed

