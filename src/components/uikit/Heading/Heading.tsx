export const Heading = ({
  title,
  className,
}: {
  title: string
  className?: string
}) => {
  return (
    <h1 className={`font-monts !text-3xl font-medium ${className}`}>{title}</h1>
  )
}
