class Github {
  constructor() {
    this.config = {
      headers: {
        Authorization: "token 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",
      },
    };
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    );

    const repoData = await repoResponse.json();
    console.log(repoData);

    const profileData = await profileResponse.json();
    return {
      profileData,
      repoData,
    };
  }
}
