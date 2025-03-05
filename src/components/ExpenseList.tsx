import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import { ExpenseDetails } from "./ExpenseDetails"

export function ExpenseList() {
  const { state } = useBudget()

  const filteredExpenses = state.filterIdCategory ? state.expense.filter(exp => exp.category === Number(state.filterIdCategory)) : state.expense  
  
  const isEmpty = useMemo(() => filteredExpenses.length > 0, [filteredExpenses])

  return (
    <div className="mt-6 w-full max-w-lg p-8 bg-white text-black shadow-lg rounded-2xl ">
      <h1 className="text-3xl font-bold">Expense List</h1>
      {!isEmpty
        ? <p className="text-gray-700 font-medium">There are no expenses</p>
        : filteredExpenses.map(exp => (
          <ExpenseDetails
            key={exp.id}
            expense={exp}
          />
        ))}
    </div>
  )
}
