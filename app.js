const rating = document.querySelector(".rating-quality");
let isRating = false;
rating.addEventListener("click", (e) => {
  const value = e.target.value;
  if (value) {
    const current = document.getElementById("rating-quality__item" + value);
    current.classList.add("rating-quality__item--active");
    if (isRating && isRating !== value) {
      const prev = document.getElementById("rating-quality__item" + isRating);
      prev.classList.remove("rating-quality__item--active");
    }
    isRating = value;
  }
});
const submit = document.querySelector(".rating__button");
submit.addEventListener("click", (e) => {
  if (!isRating) {
    alert("Please choose start");
  } else {
    window.location.href = "thankyou.html" + "?rating=" + isRating;
  }
});
