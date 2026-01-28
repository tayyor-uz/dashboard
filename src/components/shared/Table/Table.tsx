import type { ComponentPropsWithoutRef } from "react"

type TableProps = ComponentPropsWithoutRef<'table'>

export const Table = ({ className, ...props }: TableProps) => {
    return <table className={className} {...props} />
}