import { ExecutorAppHeader } from '@/components/Header/ExecutorAppHeader/ExecutorAppHeader'
import type { JSX } from 'react'
import { Outlet } from 'react-router-dom'

// export const ExecutorAppLayout = () => {
//   return (
//     <>
//       <header>header</header>
//       <main>
//         <Outlet />
//       </main>
//     </>
//   )
// }

export const ExecutorAppLayout = ({
  children,
}: {
  children?: React.ReactNode
}): JSX.Element => {
  return (
    <>
      <ExecutorAppHeader />
      <main className="px-[52px]">{children || <Outlet />}</main>
    </>
  )
}
