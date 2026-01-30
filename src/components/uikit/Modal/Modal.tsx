interface IModalProps {
  children: React.ReactNode
  onClick: (value: boolean) => void
}

export const CustomModal = ({ children, onClick }: IModalProps) => {
  return (
    <div
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          onClick(false)
        }
      }}
      className="fixed inset-0 top-0 left-0 flex h-screen w-full items-center justify-center bg-black/40"
    >
      {children}
    </div>
  )
}
