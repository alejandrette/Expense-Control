import { Expense } from "../types";

export type BudgetActions = 
  { type: 'add-budget', payload: { newBudget: number } } |
  { type: 'show-modal'} |
  { type: 'close-modal'} |
  { type: 'add-expense', payload: { expense: Expense } } |
  { type: 'delete-expense', payload: { id: Expense['id'] } } |
  { type: 'edit-expense', payload: { id: Expense['id'] } }

export type BudgetState = {
  budget: number;
  modal: boolean;
  expense : Expense[];
  available: number;
  spent: number;
  editExpense: Expense['id'];
}

export const initialState: BudgetState = {
  budget: 0,
  modal: false,
  expense: [],
  available: 0,
  spent: 0,
  editExpense: '',
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
    let updateExpense: Expense[] = []
    if(state.editExpense){
      updateExpense =  state.expense.map(exp => exp.id === state.editExpense ? action.payload.expense : exp)
    } else {
      updateExpense = [...state.expense, action.payload.expense]
    }
    return {
      ...state, 
      expense: updateExpense,
      available: state.available - newSpent,
      spent: newSpent
    }
  }

  if(action.type === 'delete-expense'){
    const newExpense = state.expense.filter(exp => exp.id !== action.payload.id)
    return {...state, expense: newExpense}
  }

  if(action.type === 'edit-expense'){
    return {...state, editExpense: action.payload.id, modal: true}
  }

  if(action.type === 'show-modal'){
    return {...state, modal: true}
  }

  if(action.type === 'close-modal'){
    return {...state, modal: false}
  }

  return state
}