type AmountDisplayProps = {
 label?: string;
 amount: number; 
}

export default function AmountDisplay({ label, amount }: AmountDisplayProps) {

  return (
    <p>{label && `${label}:`} <span className="text-teal-500 font-semibold">${amount}</span></p>
  )
}
