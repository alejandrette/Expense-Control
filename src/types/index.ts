type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Expense = {
  nameExpense: string;
  amount: number;
  category: number;
  date: Value
}