import AmountDisplay from "./AmountDisplay";
import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"

export function BudgetTracker() {
  const { state } = useBudget()

  const spent = useMemo(() => 0, [state.budget])
  const available = useMemo(() => state.budget - spent, [state.budget, spent])

  return (
    <div className="grid grid-cols-2 w-full max-w-lg p-8 bg-white text-black shadow-lg rounded-2xl">
      <div>
        <p>eyy</p>
      </div>
      <div className="text-2xl text-center grid gap-y-3">
        <button 
          type="button"
          className="bg-pink-700 font-semibold text-white rounded-md"
        >
          Reset APP
        </button>
        <AmountDisplay
          label="Available"
          amount={available}
        />
        <AmountDisplay
          label="Budget"
          amount={state.budget}
        />
        <AmountDisplay
          label="Spent"
          amount={spent}
        />
      </div>
    </div>
  )
}
