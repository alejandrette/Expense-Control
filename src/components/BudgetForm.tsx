export default function BudgetForm() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold text-center text-gray-700">Define your budget</h1>
        
        <form className="mt-6 flex flex-col gap-4">
          <input 
            type="number" 
            placeholder="E.g. $5000"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          
          <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300">
            Define your budget
          </button>
        </form>
      </div>
    </div>
  );
}
