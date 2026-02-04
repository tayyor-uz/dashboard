import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CustomerLayout } from './components/Layout/CustomerLayout/CustomerLayout'
import { ExecutorLayout } from './components/Layout/ExecutorLayout/ExecutorLayout'
import { ExecutorAppLayout } from './components/Layout/ExecutorAppLayout/ExecutorAppLayout'
import { OrdersPage } from './pages/ExecutorPage/OrdersPage/OrdersPage'
import { CustomerAppLayout } from './components/Layout/CustomerAppLayout/CustomerAppLayout'
import { CustomerLanding } from './pages/CustomerLanding/CustomerLanding'
import { NotificationsPage } from './pages/ExecutorPage/NotificationsPage/NotificationsPage'
import { ProfilePage } from './pages/ExecutorPage/ProfilePage/ProfilePage'
import { ExecutorLanding } from './pages/ExecutorLanding/ExecutorLanding'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer landing */}
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<CustomerLanding />} />
        </Route>

        {/* Executor landing */}
        <Route path="/for-executor" element={<ExecutorLayout />}>
          <Route index element={<ExecutorLanding />} />
        </Route>

        {/* Executor App */}
        <Route path="/executor" element={<ExecutorAppLayout />}>
          <Route index element={<OrdersPage />} />
          <Route path="prices" element={<div>prices</div>} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="support" element={<div>support</div>} />
        </Route>

        {/* Customer App */}
        <Route path="/customer" element={<CustomerAppLayout />}>
          <Route index element={<div>Поиск специалиста</div>} />
          <Route path="profile" element={<div>Profile</div>} />
          <Route path="notifications" element={<div>Notifications</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
