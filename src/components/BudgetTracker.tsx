import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget"

export function BudgetTracker() {
  const { state, dispatch } = useBudget()

  return (
    <div className="grid grid-cols-2 w-full max-w-lg p-8 bg-white text-black shadow-lg rounded-2xl">
      <div>
        <p>eyy</p>
      </div>
      <div className="text-2xl text-center grid gap-y-3">
        <button 
          type="button"
          className="bg-pink-700 font-semibold text-white rounded-md"
          onClick={() => dispatch({ type: 'reset-app' })}
        >
          Reset APP
        </button>
        <AmountDisplay
          label="Available"
          amount={state.available}
        />
        <AmountDisplay
          label="Budget"
          amount={state.budget}
        />
        <AmountDisplay
          label="Spent"
          amount={state.spent}
        />
      </div>
    </div>
  )
}
