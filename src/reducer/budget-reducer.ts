import { Expense } from "../types";

export type BudgetActions = 
  { type: 'add-budget', payload: { newBudget: number } } |
  { type: 'show-modal'} |
  { type: 'close-modal'} |
  { type: 'add-expense', payload: { expense: Expense } }  

export type BudgetState = {
  budget: number;
  modal: boolean;
  expense : Expense[];
  available: number;
  spent: number;
}

export const initialState: BudgetState = {
  budget: 0,
  modal: false,
  expense: [],
  available: 0,
  spent: 0,
}

export const budgetReducer = (state: BudgetState = initialState, action: BudgetActions) => {
  if(action.type === 'add-budget'){
    return {
      ...state, 
      budget: action.payload.newBudget, 
      available: action.payload.newBudget - state.spent
    }
  }

  if(action.type === 'add-expense'){
    const newSpent = state.spent + action.payload.expense.amount
    return {
      ...state, 
      expense: [...state.expense, action.payload.expense],
      available: state.available - newSpent
    }
  }

  if(action.type === 'show-modal'){
    return {...state, modal: true}
  }

  if(action.type === 'close-modal'){
    return {...state, modal: false}
  }

  return state
}