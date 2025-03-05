import { useEffect, useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import { Header } from "./components/Header";
import { useBudget } from "./hooks/useBudget";
import { BudgetTracker } from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import { ExpenseList } from "./components/ExpenseList";
import { FilterCategories } from "./components/FilterCategories";

export default function App() {
  const { state }  = useBudget()
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expense', JSON.stringify(state.expense))
    localStorage.setItem('available', JSON.stringify(state.available))
    localStorage.setItem('spent', JSON.stringify(state.spent))
  }, [state])

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-20">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
        {isValidBudget && <FilterCategories />}
        {isValidBudget && <ExpenseList />}
      </div>
      {isValidBudget && <ExpenseModal />}
    </>
  )
}
