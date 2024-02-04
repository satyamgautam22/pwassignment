const expenses=[
    {amount:1500,category:"untensil"},
    {amount:2000,category:"groceries"},
    {amount:6000,category:"entertainment"}
]
let filteration=expenses.filter((expenses)=>
    expenses.category==="groceries"

)
console.log(filteration)