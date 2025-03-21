import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducer/budget-reducer"

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
  children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

// De donde provienen los datos
export const BudgetProvider = ({children}: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState)

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}