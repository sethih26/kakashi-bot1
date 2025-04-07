
export function Card({ children }) {
  return <div className="rounded-2xl shadow-lg bg-gray-800 p-4">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
