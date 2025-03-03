import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import { ExpenseDetails } from "./ExpenseDetails"

export function ExpenseList() {
  const { state } = useBudget()
  
  const isEmpty = useMemo(() => state.expense.length > 0, [state.expense])

  return (
    <div className="mt-6 w-full max-w-lg p-8 bg-white text-black shadow-lg rounded-2xl ">
      <h1 className="text-3xl font-bold">Expense List</h1>
      {!isEmpty
        ? <p>There are no expenses</p>
        : state.expense.map(exp => (
          <ExpenseDetails
            key={exp.id}
            expense={exp}
          />
        ))}
    </div>
  )
}
