import { Heading } from '@/components/uikit/Heading/Heading'

interface IPageProps {
  children: React.ReactNode
  heading: string
  className?: string
}

export const Page = ({ children, heading, className }: IPageProps) => {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <Heading title={heading} />
      {children}
    </div>
  )
}
