import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useMemo } from "react";
import 'react-circular-progressbar/dist/styles.css'

export function BudgetTracker() {
  const { state, dispatch } = useBudget()

  const porcentage = useMemo(() => ((state.spent / state.budget) * 100), [state])

  return (
    <div className="grid grid-cols-2 w-80 md:w-full max-w-lg p-8 bg-white text-black shadow-lg rounded-2xl">
      <div>
        <CircularProgressbar 
          value={porcentage}
          styles={buildStyles({
            pathColor: `${porcentage === 100 ? '#be185d' : '#14b8a6'}`,
            trailColor: '#F5F5F5',
            textColor: `${porcentage === 100 ? '#be185d' : '#14b8a6'}`,
          })}
          text={`${porcentage}%`}
        />
      </div>
      <div className="text-1xl md:text-2xl text-center grid gap-y-3">
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
