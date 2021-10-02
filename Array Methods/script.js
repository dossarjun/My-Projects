const main = document.getElementById("main")
const addUserBtn = document.getElementById("add-user")
const doubleBtn = document.getElementById("double")
const showMilBtn = document.getElementById("show-millionaire")
const sortBtn = document.getElementById("sort")
const calWealthBtn = document.getElementById("calculate-wealth")


let data = [];

genRandomUser()
genRandomUser()
genRandomUser()

//Fetch user data from api and populate it to the array

async function genRandomUser() {
  const res =  await fetch(`https://randomuser.me/api`);
//   console.log(res);
  const data = await res.json()
//   console.log(data);

  const user = data.results[0]

  const name = {
     name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000 )
}
// console.log(name);

addUser(name);
}

// double money
function doubleMoney() {
    data = data.map(user => {
    return {...user, money: user.money * 2}
    })

    updateDom()
 }

 // sort by richest

 function sortByRichest(){
     data.sort((a, b) => b.money - a.money)
     updateDom()
 }

 // filter only millionares
function showMil(){
    data = data.filter(function (item) {
        return item.money > 1000000
    })
    updateDom()
}

// total wealth
function calculateWealth(){
    const total = data.reduce((acc, item) => (acc += item.money), 0)
    console.log(total);

    const wealthEl = document.createElement("div")
    wealthEl.innerHTML =`<h3>Total Wealth: <strong>${formatMoney(total)}</strong> </h3>`
    main.appendChild(wealthEl)



}


// add the users to the initially created array
function addUser(obj) {
    data.push(obj);

    updateDom();
}


//update dom function
function updateDom(provideData = data) {
    //clear main
    main.innerHTML="<h2><strong>Person</strong>Wealth</h2>"
    provideData.forEach(item => {
        const element = document.createElement("div")
        element.classList.add("person")
        element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`
        main.appendChild(element)
    })

}


function formatMoney(money) {
  return "$" + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


//Add events to each button

addUserBtn.addEventListener("click", genRandomUser)

doubleBtn.addEventListener("click", doubleMoney)

sortBtn.addEventListener("click", sortByRichest)

showMilBtn.addEventListener("click", showMil)

calWealthBtn.addEventListener("click", calculateWealth)