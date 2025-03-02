import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0)
  const { dispatch } = useBudget()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber)
  }

  const isValid: boolean = useMemo(() => {
    return isNaN(budget) || budget <= 0
  }, [budget])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: 'add-budget', payload: { newBudget: budget } })
  }

  return (
    <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center text-gray-700">Define your budget</h1>
      
      <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input 
          type="number" 
          placeholder="E.g. $5000"
          value={budget}
          onChange={handleChange}
          className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-transparent"
        />
        
        <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold enabled:hover:bg-teal-700 disabled:opacity-60 transition duration-300" disabled={isValid}>
          Define your budget
        </button>
      </form>
    </div>
  );
}
