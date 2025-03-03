import { useMemo } from "react"
import { LeadingActions, SwipeAction, SwipeableList, SwipeableListItem, TrailingActions } from 'react-swipeable-list'
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/categories"
import "../../node_modules/react-swipeable-list/dist/styles.css";

type ExpenseDetailsProps = {
  expense: Expense
}

export function ExpenseDetails({ expense }: ExpenseDetailsProps) {
  const formatDate = (dateStr: string): string => {
    const dateObj = new Date(dateStr)
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return new Intl.DateTimeFormat('en-EN', options).format(dateObj)
  }

  const cantegoryInfo = useMemo(() => categories.filter(category => category.id === expense.category)[0], [expense.category])

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() => {}}
      >
        Update
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => {}}
        destructive={true}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={30}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="grid items-center mt-3 grid-cols-[auto,1fr,auto] gap-4">
          <div className="w-fit">
            <img src={`../../public/icono_${cantegoryInfo.icon}.svg`} width='50' alt="" />
          </div>
          <div>
            <p>{cantegoryInfo.name}</p>
            <p>{expense.nameExpense}</p>
            <p>{formatDate(expense.date!.toString())}</p>
          </div>
          <div>
            <AmountDisplay amount={expense.amount} />
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
