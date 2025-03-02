import { ChangeEvent, FormEvent, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type Expense = {
  nameExpense: string;
  amount: number;
  category: number;
  date: Value
}

export const categories = [
  { id: 1, name: 'Ahorro', icon: 'ahorro' },
  { id: 2, name: 'Comida', icon: 'comida' },
  { id: 3, name: 'Casa', icon: 'casa' },
  { id: 4, name: 'Gastos Varios', icon: 'gastos' },
  { id: 5, name: 'Ocio', icon: 'ocio' },
  { id: 6, name: 'Salud', icon: 'salud' },
  { id: 7, name: 'Suscripciones', icon: 'suscripciones' },
];

export function ExpenseForm() {
  const [expense, setExpense] = useState<Expense>({
    nameExpense: '',
    amount: 0,
    category: 0,
    date: new Date()
  })

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(expense)
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
          className="w-full bg-teal-600 text-white font-semibold py-2 rounded-lg hover:bg-teal-700 transition-all"
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}
