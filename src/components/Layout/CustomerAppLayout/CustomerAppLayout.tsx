import { CustomerAppHeader } from '@/components/Header/CustomerAppHeader/CustomerAppHeader'
import type { JSX } from 'react'
import { Outlet } from 'react-router-dom'

export const CustomerAppLayout = ({
    children,
}: {
    children?: React.ReactNode
}): JSX.Element => {
    return (
        <>
            <CustomerAppHeader />
            <main className="px-[52px]">{children || <Outlet />}</main>
        </>
    )
}
