import { ExecutorAppHeader } from '@/components/Header/ExecutorAppHeader/ExecutorAppHeader'
import type { JSX } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export const ExecutorAppLayout = ({
  children,
}: {
  children?: React.ReactNode
}): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Executor Dashboard</title>
        <meta
          name="description"
          content="Executor application for managing tasks, progress, and workflow"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <ExecutorAppHeader />
      <main className="site-container">{children || <Outlet />}</main>
    </>
  )
}
