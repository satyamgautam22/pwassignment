const expenses=[
    {amount:100,category:"untensil"},
    {amount:200,category:"groceries"},
    {amount:50,category:"entertainment"}
]
function categorizeExpense(expenses){

    if(expenses.amount> 100){
        return "High Expense"
    }
    else{
        return "Low Expense"
    }
}
let categorizeExpenses=expenses.map((expenses)=>
categorizeExpense(expenses))
console.log(categorizeExpenses)