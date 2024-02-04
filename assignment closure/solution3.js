const expenses=[
    {amount:1500,category:"untensil"},
    {amount:2000,category:"groceries"},
    {amount:6000,category:"entertainment"}
]
let amounttax=expenses.map((expenses)=>{
   let cost=expenses.amount*0.1
   return {...expenses,cost:cost}
})
console.log(`this is the total tax`,amounttax)