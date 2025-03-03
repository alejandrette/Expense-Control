type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Expense = {
  id: string
  nameExpense: string;
  amount: number;
  category: number;
  date: Value
}