interface IBoard {
  children: React.ReactNode
  className?: string
}

export const Board = ({ children, className }: IBoard) => {
  return (
    <div className={`rounded-md bg-white shadow-md ${className}`}>
      {children}
    </div>
  )
}
