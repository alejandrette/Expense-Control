export type BudgetActions = 
  { type: 'add-budget', payload: { newBudget: number } }

export type BudgetState = {
  budget: number
}

export const initialState: BudgetState = {
  budget: 0
}

export const budgetReducer = (state: BudgetState = initialState, action: BudgetActions) => {
  if(action.type === 'add-budget'){
    return {...state, budget: action.payload.newBudget}    
  }

  return state
}