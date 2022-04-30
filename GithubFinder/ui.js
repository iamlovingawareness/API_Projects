class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.alert = document.querySelector(".alert");
  }

  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}"/>
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge bg-secondary">Public Repos: ${user.public_repos}</span>
                <span class="badge bg-primary">Public Gists: ${user.gists}</span>
                <span class="badge bg-success">Followers: ${user.followers}</span>
                <span class="badge bg-info">Following: ${user.following}</span>
                <br/>
                <ul class="list-group pt-3">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
       
                </ul>

            </div>
        </div>

    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    
    `;
  }

  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
        <div class="card card-body">
            <div class="row">
                <div class="col-md-6">
                    <a href=${repo.html_url} target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                  <span class="badge bg-secondary">Stars: ${repo.stargazers_count}</span>
                  <span class="badge bg-primary">Watchers: ${repo.watchers_count}</span>
                  <span span class="badge bg-success">Forks: ${repo.forks_count}</span>
                </div>


            </div>
        </div>
      `;
    });
    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");

    const search = document.querySelector(".search");
    container.insertBefore(div, search);
    //Timeout after 3s
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currAlert = document.querySelector(".alert");
    if (currAlert) {
      currAlert.remove();
    }
  }
}
