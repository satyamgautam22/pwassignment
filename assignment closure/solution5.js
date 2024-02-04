const expenses=[
    {amount:1500,category:"untensil"},
    {amount:2000,category:"groceries"},
    {amount:6000,category:"entertainment"}
]
let totalamt=expenses.reduce((sum,expenses)=>sum +expenses.amount,0)
console.log(totalamt)