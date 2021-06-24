// console.log('Hello World!')
const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector('input')

    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)
    const list = document.querySelector('ul')
    list.appendChild(movie)
    inputField.value = ''
    // console.log("movie")
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = `${e.target.parentNode.textContent.slice(0,1)} Deleted!`
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${e.target.textContent} Watched!`
    } else {
        message.textContent = `Movie Added Back!`
    }
    revealMessage()
}


function revealMessage(){
    message.classList.remove('hide')
    setTimeout(function(){
        message.classList.add('hide')
    }, 1000)
}


const button = document.querySelector('button');
button.addEventListener('click', addMovie);




