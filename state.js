const select = document.querySelector(".state__select");
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let value = params.rating;
select.textContent = `You select ${value} out of 5`;
