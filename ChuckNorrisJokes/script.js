function getJokes(){
    let joke;
    let text = document.getElementById("Jokes");
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => text.innerHTML = data.value)
    .catch(err=>console.log(err));
}
getJokes();