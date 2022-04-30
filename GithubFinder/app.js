// Event Listener : KeyUP event
const searchInput = document.querySelector("#searchUser");
//Instantiate a Github class member
const github = new Github();
// instant
const ui = new UI();
searchInput.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profileData.message === "Not Found") {
        ui.showAlert("USer Not aFOund", "alert alert-danger");
      } else {
        ui.showProfile(data.profileData);
        ui.showRepos(data.repoData);
      }
    });
  }
});
