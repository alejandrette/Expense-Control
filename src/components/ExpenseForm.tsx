import { ChangeEvent, FormEvent, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import { Expense } from '../types';
import { useBudget } from '../hooks/useBudget';
import { v4 as uuidv4 } from 'uuid';
import { categories } from '../data/categories';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export function ExpenseForm() {
  const { state, dispatch } = useBudget()
  const initialState = {
    id: uuidv4(),
    nameExpense: '',
    amount: 0,
    category: 0,
    date: new Date()
  }
  const [expense, setExpense] = useState<Expense>(initialState)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setExpense(prev => ({
      ...prev,
      [name]: name === "amount" || name === "category" ? Number(value) : value,
    }));
  }

  const handleDateChange = (date: Value) => {
    setExpense(prev => ({
      ...prev,
      date: date || new Date(),
    }));
  };

  const isValid: boolean = expense.nameExpense.trim() !== '' && expense.amount > 0 && expense.category !== 0 && expense.amount <= state.available

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: 'add-expense', payload: { expense } })
    dispatch({ type: 'close-modal' })
    setExpense({...initialState, id: uuidv4()})
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">New Expense</h2>
      <form 
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="nameExpense" className="block text-gray-700 font-medium">Name Expense:</label>
          <input 
            type="text" 
            name="nameExpense" 
            placeholder="E.g. Spotify"
            value={expense.nameExpense}
            onChange={handleChange}
            className="w-full p-2 border bg-transparent text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-gray-700 font-medium">Amount:</label>
          <input 
            type="number" 
            name="amount" 
            placeholder="E.g. $300"
            value={expense.amount}
            onChange={handleChange}
            className="w-full p-2 border bg-transparent border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <span className={`${state.available <= 0 ? 'text-red-500' : 'text-gray-400'}`}>Available balance ${state.available}</span>
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-700 font-medium">Category:</label>
          <select 
            name="category"
            value={expense.category}
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-lg bg-transparent text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option disabled value={0}>-- Select --</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="amount" className="block text-gray-700 font-medium">Date:</label>
          <DatePicker 
            name='date'
            className='bg-transparent text-gray-700'
            value={expense.date}
            onChange={handleDateChange}
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-teal-600 text-white font-semibold py-2 rounded-lg enabled:hover:bg-teal-700 disabled:opacity-40 transition-all"
          disabled={!isValid}
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}
