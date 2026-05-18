let income = 0
let expense = 0

function signup(){

const username =
document.getElementById(
"username"
)?.value.trim()

const password =
document.getElementById(
"password"
)?.value.trim()

if(!username || !password){

alert(
"Enter details"
)

return

}

localStorage.setItem(
"user",
username
)

localStorage.setItem(
"pass",
password
)

alert(
"Account Created"
)

}

function login(){

const username =
document.getElementById(
"username"
)?.value.trim()

const password =
document.getElementById(
"password"
)?.value.trim()

const savedUser =
localStorage.getItem(
"user"
)

const savedPass =
localStorage.getItem(
"pass"
)

if(
username===savedUser
&&
password===savedPass
){

window.location.href =
"dashboard.html"

}
else{

document.getElementById(
"message"
).textContent =
"Invalid Login"

}

}

function logout(){

window.location.href =
"index.html"

}

function updateUI(){

const incomeEl =
document.getElementById(
"income"
)

if(!incomeEl){

return

}

incomeEl.textContent =
`₹${income}`

document.getElementById(
"expense"
).textContent =
`₹${expense}`

document.getElementById(
"balance"
).textContent =
`₹${income-expense}`

}

function addIncome(){

addTransaction(
true
)

}

function addExpense(){

addTransaction(
false
)

}

function addTransaction(
isIncome
){

const text =
document.getElementById(
"text"
).value.trim()

const amount =
Number(
document.getElementById(
"amount"
).value
)

if(!text || amount<=0){

return

}

if(isIncome){

income += amount

}
else{

expense += amount

}

const li =
document.createElement(
"li"
)

li.innerHTML = `

<span>

${isIncome?"➕":"➖"}
${text}

</span>

<span>

₹${amount}

</span>

`

document.getElementById(
"list"
)

.appendChild(
li
)

updateUI()

document.getElementById(
"text"
).value=""

document.getElementById(
"amount"
).value=""

}

updateUI()