import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { IssueDetails } from './pages/IssueDetails'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:issueId" element={<IssueDetails />} />
      </Route>
    </Routes>
  )
}
