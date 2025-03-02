import { useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import { Header } from "./components/Header";
import { useBudget } from "./hooks/useBudget";
import { BudgetTracker } from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";

export default function App() {
  const { state }  = useBudget()
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-20">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {isValidBudget && <ExpenseModal />}
    </>
  )
}
