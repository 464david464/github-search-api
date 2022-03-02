let inputValue = document.querySelector("input");

function searchUser() {
  console.log(inputValue.value);

  let myHeaders = new Headers();
  myHeaders.append("Accept", "application/vnd.github.v3+json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://api.github.com/search/users?q=" + inputValue.value,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      for (let el of result.items) {
        render(el.login, el.avatar_url, el.html_url)
      }
    })
    .catch((error) => console.log("error", error));

    document.querySelector("main").innerHTML = '';
}

document.querySelector("button").addEventListener("click", searchUser);

document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    document.querySelector("main").innerHTML = '';
    searchUser();
  }
});

function render(user, avatar, toaccount) {
  const container = document.querySelector("main");

  const div = document.createElement("div");

  const image = document.createElement("img");
  image.setAttribute('src', avatar)

  const userName = document.createElement("p");
  userName.innerText = user;

  const a = document.createElement('a');
  a.setAttribute('href', toaccount);
  a.setAttribute('target', 'blenk')

  const button = document.createElement('button');
  button.innerText = 'veiw on github'

  container.appendChild(div);
  div.appendChild(image);
  div.appendChild(userName);
  div.appendChild(a)
  a.appendChild(button)
}
