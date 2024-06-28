import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import NotFoundPage from "./pages/NotFoundPage"

// Workflow: create a new page in 'src/pages/' then add that page to the route here in App.jsx

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
        <Route index element={<HomePage />}/>
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
  )
)

const App = () => {
  return (
  <RouterProvider router={router}/>
)
}

export default App