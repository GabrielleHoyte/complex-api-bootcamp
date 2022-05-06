document.querySelector('button').addEventListener('click', getPokèmon)

function getPokèmon(){
  let nameOrIDVal = document.querySelector('input').value
  let url = `https://pokeapi.co/api/v2/pokemon/${nameOrIDVal}/`

  fetch(url.toLowerCase())
  .then(res => res.json())
  .then(data => {
  let urlTwo = `https://g.tenor.com/v1/search?q=${data.name}&key=LIVDSRZULELA&limit=8`
    fetch(urlTwo.toLowerCase())
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.querySelector('.gifOne').src = data.results[0].media[0].gif.url
        document.querySelector('.gifTwo').src = data.results[1].media[0].gif.url
        document.querySelector('.gifThree').src = data.results[2].media[0].gif.url
      })
      .catch(err => {
        console.log(`err ${err}`)
      })
    document.querySelector('h2').innerText = data.name
    document.querySelector('h3').innerText = data.id
    document.querySelector('.sprite').src = data.sprites.front_default
  })
  .catch(err => {
    console.log(`err ${err}`)
  })
  playSound()
}

function playSound() {
	let sound = new Audio('sounds/button.mp3');
	sound.play();
}

// document.querySelector('button').addEventListener('click', getGif)

// function getGif(){
//   let keyword = document.querySelector('input').value
//   let url = `https://g.tenor.com/v1/search?q=${keyword}&key=LIVDSRZULELA&limit=8`

//   fetch(url.toLowerCase())
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     document.querySelector('.gifOne').src = data.results[0].media[0].gif.url
//     document.querySelector('.gifTwo').src = data.results[1].media[0].gif.url
//     document.querySelector('.gifThree').src = data.results[2].media[0].gif.url
//   })
//   .catch(err => {
//     console.log(`err ${err}`)
//   })
// }