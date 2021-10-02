const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const seatCount = document.querySelector("#count");
const totalPrice = document.querySelector("#total");
const movie = document.querySelector("#movie");
console.log(movie);

populateUI()

let ticketPrice = +movie.value
console.log(typeof ticketPrice)


//local storage function
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem("selectedMovie", movieIndex)
    localStorage.setItem("moviePrice", moviePrice)
}



//update count function.

function updateCount(){
    let selectedSeats = document.querySelectorAll(".row .seat.selected")
    console.log(selectedSeats);
    
    const seatsIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat)
    })
    console.log(seatsIndex);

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex))

    const count = selectedSeats.length
    console.log(count);

    seatCount.innerText = count
    totalPrice.innerText= count * ticketPrice
}

// get data from local storage and populate it in UI


function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"))
    console.log(selectedSeats);

    if(selectedSeats!== null && selectedSeats.length > 0){
        seats.forEach((seat, index)=>{
            if(selectedSeats.indexOf(index) > -1){
                console.log(selectedSeats.indexOf(index), seat);
                seat.classList.add("selected")
            }
        })
    }
}



// movie select event

movie.addEventListener("change", (e) => {
    ticketPrice = +e.target.value
    console.log(ticketPrice);
    setMovieData(e.target.selectedIndex, e.target.value)
    updateCount()

})


// event
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat")&& !e.target.classList.contains("occupied"))
    {
     e.target.classList.toggle("selected")
    }
    updateCount()
})

