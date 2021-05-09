//DOM manipulation
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

//Click Event & called generateJoke function

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//SET HEADER
function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  // for api call we used fetch API
  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })
}
