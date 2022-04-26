let results = document.getElementById("results");

document.querySelector(".get-jokes").addEventListener("click", loadJokes);

async function loadJokes(e) {
  e.preventDefault();
  let out = "";
  let number = document.querySelector("#input").value;
  console.log(number);
  const res = await fetch(`http://api.icndb.com/jokes/random/${number}`);
  let data = await res.json();
  console.log(results);
  data.value.forEach((item) => {
    out += `<li>${item.joke}</li>`;
  });
  results.innerHTML = out;
  console.log(results);
}
