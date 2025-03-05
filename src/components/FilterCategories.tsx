import { ChangeEvent } from "react"
import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"

export function FilterCategories() {
  const { dispatch } = useBudget()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'filter-catregory', payload: {id: e.target.value} })
  }

  return (
    <div className="mt-6 w-full flex items-center max-w-lg p-8 bg-white text-black shadow-lg rounded-2xl ">
      <label htmlFor="category" className="text-gray-700 font-medium">Filter Categories:</label>
      <select 
        name="category"
        className="p-2 border w-full border-gray-300 rounded-lg bg-transparent text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        onChange={handleChange}
      >
      <option value=''>-- All Categories --</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>{category.name}</option>
      ))}
      </select>
    </div>
  )
}
