export const Heading = ({
  title,
  description,
}: {
  title: string
  description?: string
}) => {
  return (
    <div className="flec-col flex gap-2">
      <h1 className={`font-monts !text-3xl leading-[1.3] font-medium`}>
        {title}
      </h1>
      {description && (
        <p className="font-regular text-sm leading-[1.2]">{description}</p>
      )}
    </div>
  )
}
