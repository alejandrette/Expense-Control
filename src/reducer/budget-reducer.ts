import { Expense } from "../types";

export type BudgetActions = 
  { type: 'add-budget', payload: { newBudget: number } } |
  { type: 'show-modal'} |
  { type: 'close-modal'} |
  { type: 'add-expense', payload: { expense: Expense } } |
  { type: 'delete-expense', payload: { id: Expense['id'] } } |
  { type: 'edit-expense', payload: { id: Expense['id'] } } |
  { type: 'reset-app'}

export type BudgetState = {
  budget: number;
  modal: boolean;
  expense : Expense[];
  available: number;
  spent: number;
  editExpense: Expense['id'];
}

const initialBudget = (): number =>{
  const budget = localStorage.getItem('budget')
  return budget ? +budget : 0
}

const localStorageExpense = (): Expense[] => {
  const expense = localStorage.getItem('expense')
  return expense ? JSON.parse(expense) : []
}

const initialAvailable = (): number =>{
  const available = localStorage.getItem('available')
  return available ? +available : 0
}

const initialSpent = (): number =>{
  const spent = localStorage.getItem('spent')
  return spent ? +spent : 0
}

export const initialState: BudgetState = {
  budget: initialBudget(),
  modal: false,
  expense: localStorageExpense(),
  available: initialAvailable(),
  spent: initialSpent(),
  editExpense: '', 
}

export const budgetReducer = (state: BudgetState = initialState, action: BudgetActions) => {
  if(action.type === 'add-budget'){
    return {
      ...state, 
      budget: action.payload.newBudget, 
      available: action.payload.newBudget
    }
  }

  if(action.type === 'add-expense'){
    let updateExpense: Expense[] = []
    if(state.editExpense){
      updateExpense =  state.expense.map(exp => exp.id === state.editExpense ? action.payload.expense : exp)
    } else {
      updateExpense = [...state.expense, action.payload.expense]
    }
    const spent = updateExpense.reduce((acc, total) => acc + total.amount, 0)
    return {
      ...state, 
      expense: updateExpense,
      available: state.budget - spent,
      spent: spent,
      editExpense: '',
    }
  }

  if(action.type === 'delete-expense'){
    const newExpense = state.expense.filter(exp => exp.id !== action.payload.id)
    const amountExpense = state.expense.filter(exp => exp.id === action.payload.id)[0]
    return {
      ...state, 
      expense: newExpense, 
      available: state.available + amountExpense.amount,
      spent: newExpense.reduce((acc, total) => acc + total.amount, 0)
    }
  }

  if(action.type === 'edit-expense'){
    const amountExpense = state.expense.filter(exp => exp.id === action.payload.id)[0]
    return {
      ...state, 
      editExpense: action.payload.id, 
      modal: true, 
      available: amountExpense.amount + state.available, 
    }
  }

  if(action.type === 'show-modal'){
    return {...state, modal: true}
  }

  if(action.type === 'close-modal'){
    return {...state, modal: false, editExpense: '',}
  }

  if(action.type === 'reset-app'){
    return { 
      budget: 0,
      modal: false,
      expense: [],
      spent: 0
    }
  }

  return state
}