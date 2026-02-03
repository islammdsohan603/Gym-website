const membershipPlans = [
  {
    name: "Pass 'Trial' ",
    price: "$ 0",
    features: [
      "Access to the gym from 8:00 to 14:00",
      "The trainer on duty will introduce you to the gym"
    ]
  },
  {
    name: "Pass 'Easy Start ",
    price: "$ 119",
    features: [
      "Visit without restrictions 24/7",
      "Individual training program",
      "Access to the VTRAINER application",
      "Trainer support"
    ]
  },
  {
    name: "Pass '1 Month 24/7'",
    price: "$ 85",
    features: [
      "Visit without restrictions 24/7",
      "The trainer on duty will introduce you to the gym"
    ]
  },
  {
    name: "Pass 'Free Timel' ",
    price: "$ 49",
    features: [
      "The entrance time to the gym is from 14:00 to 16:00",
      "Without suspension of gym membership",
      "The trainer on duty will introduce you to the gym"
    ]
  },
  {
    name: "Pass 'In Shape (AM)'",
    price: "$ 165",
    features: [
      "Training in mini-groups until 14:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support"
    ]
  },
  {
    name: "Pass 'In Shape (PM)'",
    price: "$ 195",
    features: [
      "Training in mini-groups until 17:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support"
    ]
  },
];
function renderMembership() {
  const membershipCard = document.getElementById("membershipGrids");

  membershipCard.innerHTML = membershipPlans.map(plan => {
    const featuresHTML = plan.features.map(feature => `
      <li>
        <img src="/icon/check-icon.png" alt="check-icon">
        <span>${feature}</span>
      </li>
    `).join('');

    return `
      <div class="membership-card">
        <h4>${plan.name}</h4>
        <div class="price">${plan.price}</div>
        <ul>${featuresHTML}</ul>
        <button class="buy-btn" data-name="${plan.name}" data-price="${plan.price}">Buy</button>
      </div>
    `;
  }).join("");

}



document.addEventListener("DOMContentLoaded", () => {
  renderMembership()
})


// animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100; // কত নিচে এলে animation শুরু হবে

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

