const getData = async () => {
    const name = "likbalpande";
    const userStream = await fetch(`https://api.github.com/users/${name}`);
    const data = await userStream.json();

    const repoStream = await fetch(data.repos_url);
    const repos = await repoStream.json();

    document.getElementsByTagName("h1")[0].innerText = data.login;
    document.getElementsByTagName("h2")[0].innerText = data.bio;
    document.getElementsByTagName("img")[0].src = data.avatar_url;
    document.getElementsByTagName("p")[0].innerText = repos[0].name;
};

getData();
