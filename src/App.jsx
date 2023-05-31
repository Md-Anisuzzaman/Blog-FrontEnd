import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Dashboard from "./BackEnd/LayOuts/Pages/Dashboard";
import CreateNews from "./BackEnd/LayOuts/Pages/CreateNews";
import FrontEndLayout from "./FrontEnd/LayOuts/FrontEndLayout";
import Content from "./FrontEnd/LayOuts/Content";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={< FrontEndLayout />}>
          <Route path="content" element={<Content />} />
        </Route>

        <Route path="dashboard" element={< Dashboard />}>
          <Route path="createnews" element={<CreateNews />} />
        </Route>
      </Route>

    )
  );
  return (
    <>
      <RouterProvider router={router} />
      {/* < BrowserRouter>
        <Routes>
          <Route index element={<FrontEndLayout />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="createnews" element={<CreateNews />} />
        </Routes>
      </ BrowserRouter> */}
    </>
  )
}

export default App
