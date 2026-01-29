import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CustomerLayout } from './components/Layout/CustomerLayout/CustomerLayout'
import { ExecutorLayout } from './components/Layout/ExecutorLayout/ExecutorLayout'
import { ExecutorPage } from './pages/ExecutorPage/ExecutorPage'
import { ExecutorAppLayout } from './components/Layout/ExecutorAppLayout/ExecutorAppLayout'
import { OrdersPage } from './pages/ExecutorPage/OrdersPage/OrdersPage'
import { CustomerAppLayout } from './components/Layout/CustomerAppLayout/CustomerAppLayout'
import { CustomerPage } from './pages/CustomerPages/CustomerPage'
import { CustomerLanding } from './pages/CustomerLanding/CustomerLanding'

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
          <Route index element={<ExecutorPage />} />
        </Route>

        {/* Executor App */}
        <Route path="/executor" element={<ExecutorAppLayout />}>
          <Route index element={<OrdersPage />} />
          <Route path="prices" element={<div>prices</div>} />
          <Route path="profile" element={<div>profile</div>} />
          <Route path="notifications" element={<div>notifications</div>} />
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
