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
import BlogsUpdate from "./BackEnd/LayOuts/Pages/BlogsMangement/BlogsUpdate";
import BackEndHome from "./BackEnd/LayOuts/BackEndHome";
import UsersLayouts from "./BackEnd/LayOuts/Pages/Users Management/UsersLayouts";
import AllUsers from "./BackEnd/LayOuts/Pages/Users Management/AllUsers";
import UserCreate from "./BackEnd/LayOuts/Pages/Users Management/UserCreate";
import UserUpdate from "./BackEnd/LayOuts/Pages/Users Management/UserUpdate";
import AllBlogs from "./BackEnd/LayOuts/Pages/BlogsMangement/AllBlogs";
import Login from "./FrontEnd/LayOuts/Login";
import CategoryLayouts from "./BackEnd/LayOuts/Pages/Category Management/CategoryLayouts";
import AllCategory from "./BackEnd/LayOuts/Pages/Category Management/AllCategory";
import CategoryCreate from "./BackEnd/LayOuts/Pages/Category Management/CategoryCreate";
import CategoryUpdate from "./BackEnd/LayOuts/Pages/Category Management/CategoryUpdate";
import Select from "./components/Select";
import Registration from "./FrontEnd/LayOuts/Registration";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={< FrontEndLayout />}>
          <Route path="content" element={<Content />} />
        </Route>

        <Route path="/data" element={<Select />} />

        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />

        <Route path="dashboard" element={<BackEndLayout />}>
          {/* <Route path="createnews" element={<CreateNews />} /> */}
          <Route path="" element={<BackEndHome />} />

          <Route path="blogs" element={<BlogsLayouts />}>
            <Route path="allblogs" element={<AllBlogs />} />
            <Route path="blogscreate" element={<BlogsCreate />} />
            <Route path="blogedit/:id" element={<BlogsUpdate />} />
          </Route>

          <Route path="categories" element={<CategoryLayouts />}>
            <Route path="allcategory" element={<AllCategory />} />
            <Route path="categorycreate" element={<CategoryCreate />} />
            <Route path="categoryedit/:id" element={<CategoryUpdate />} />
          </Route>

          <Route path="users" element={<UsersLayouts />}>
            <Route path="allusers" element={<AllUsers />} />
            <Route path="usercreate" element={<UserCreate />} />
            <Route path="useredit" element={<UserUpdate />} />
          </Route>

        </Route>
      </Route>

    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
