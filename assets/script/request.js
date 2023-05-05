

const url = "./assets/script/movies.json";
let movieList = [];
const movieSearch = document.querySelector("#movie-search");


movieSearch.addEventListener("input", (event) => {
    event.preventDefault();
    const temp = [...movieList];
    const query = event.target.value;
    console.log(temp)
    if(query === "") {
        setMovies(movieList);
        return;
    }

    const filteredList = temp.filter(movie => {
        return movie.title.toLowerCase().includes(query.toLowerCase())
    });

    

    setMovies(filteredList);
})

const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json; charset=UTF-8' },
    mode: 'cors'
}

async function getMovies() {
    try {
        const getMovie = await fetch(url, options);
        const movieData = await getMovie.json();
        const { movies } = movieData;
        
        movieList = [...movies];
        setMovies(movieList);
    }catch(error) {

        console.log(error)
    }

}

function setMovies(movies) {
    const movieContainer = document.querySelector("#movies")
     movieContainer.innerHTML = "";
    for(let movie of movies) {
        const {poster, title} = movie;
        const imgElement = document.createElement("img")
        const containerElement = document.createElement("div");
        const titleElement = document.createElement("h5");

        containerElement.classList.add("movie")

        titleElement.innerText = title;
        imgElement.src = poster;
        
        containerElement.appendChild(imgElement);
        containerElement.appendChild(titleElement)

        movieContainer.appendChild(containerElement);
    }
}

getMovies();