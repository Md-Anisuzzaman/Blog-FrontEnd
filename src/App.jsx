import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import FrontEndLayout from "./FrontEnd/LayOuts/FrontEndLayout";
import Content from "./FrontEnd/LayOuts/Content";
import BackEndLayout from "./BackEnd/LayOuts/BackendLayout";
import BlogsLayouts from "./BackEnd/LayOuts/Pages/BlogsMangement/BlogsLayouts";
import BlogsCreate from "./BackEnd/LayOuts/Pages/BlogsMangement/BlogsCreate";
import AllBlogs from "./BackEnd/LayOuts/Pages/BlogsMangement/allBlogs";
import BlogsUpdate from "./BackEnd/LayOuts/Pages/BlogsMangement/BlogsUpdate";
import BackEndHome from "./BackEnd/LayOuts/BackEndHome";
import UsersLayouts from "./BackEnd/LayOuts/Pages/Users Management/UsersLayouts";
import AllUsers from "./BackEnd/LayOuts/Pages/Users Management/AllUsers";
import UserCreate from "./BackEnd/LayOuts/Pages/Users Management/UserCreate";
import UserUpdate from "./BackEnd/LayOuts/Pages/Users Management/UserUpdate";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={< FrontEndLayout />}>
          <Route path="content" element={<Content />} />
        </Route>

        <Route path="dashboard" element={<BackEndLayout />}>
          {/* <Route path="createnews" element={<CreateNews />} /> */}
          <Route path="" element={<BackEndHome />} />

          <Route path="blogs" element={<BlogsLayouts />}>
            <Route path="allblogs" element={<AllBlogs />} />
            <Route path="blogscreate" element={<BlogsCreate />} />
            <Route path="edit" element={<BlogsUpdate />} />
          </Route>

          <Route path="users" element={<UsersLayouts />}>
            <Route path="allusers" element={<AllUsers />} />
            <Route path="usercreate" element={<UserCreate />} />
            <Route path="edit" element={<UserUpdate />} />
          </Route>

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
