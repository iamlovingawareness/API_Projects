document.querySelector(".get-jokes").addEventListener("click", loadJokes);

function loadJokes(e) {
  const number = document.querySelector("#number").value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
  let output = "";
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);

      if (response.type === "success") {
        const arr = response.value;
        arr.forEach(function (element) {
          output += `<li>${element.joke}</li>`;
        });

        document.querySelector(".results").innerHTML = output;
      } else {
        output += `<li>Something went wrong deer</li>`;
      }
    }
  };

  xhr.send();
  e.preventDefault();
}
